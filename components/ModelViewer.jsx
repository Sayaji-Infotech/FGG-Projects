"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect, useLayoutEffect } from 'react'
import { Box3, Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { Progress } from '@/components/ui/progress'

function Model({ gltf, onSceneReady }) {
  const modelRef = useRef()
  const rotationRef = useRef({ x: 0, y: 0 })
  const { invalidate, gl, scene, camera } = useThree()

  useEffect(() => {
    if (gltf?.scene) {
      console.log('🎨 Model ready for rendering...')
      // Force scene update and render
      invalidate() // Force re-render
      gl.render(scene, camera) // Force immediate render
      
      if (onSceneReady) {
        onSceneReady()
      }
      console.log('✨ Model render triggered')
    }
  }, [gltf, scene, invalidate, gl, camera, onSceneReady])

  // Smooth orbital rotation
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Smooth rotation around Y axis (left to right)
      rotationRef.current.y += delta * 0.3
      
      // Gentle up-down movement using sine wave
      rotationRef.current.x = Math.sin(rotationRef.current.y * 0.5) * 0.1
      
      modelRef.current.rotation.y = rotationRef.current.y
      modelRef.current.rotation.x = rotationRef.current.x
    }
  })

  if (!gltf?.scene) return null

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene}
      position={[0, 0, 0]}
    />
  )
}

function LoadingProgress({ progress, isTimeout }) {
  return (
    <div className="absolute inset-0 flex items-end pb-1 justify-center bg-gradient-to-b from-gray-50 to-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: `url('/static/FGG-hero.png')`
        }}
      />
      
      {/* Progress bar overlay */}
      <div className="relative z-10 w-64 space-y-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700">
            {isTimeout ? 'Loading 3D Model (Please wait...)' : 'Loading 3D Model...'}
          </h3>
          {isTimeout && (
            <p className="text-xs text-amber-600 mt-1">
              This may take longer if the tab was in the background
            </p>
          )}
        </div>
        <Progress value={progress} className="w-full h-2" />
        <p className="text-xs text-gray-400 text-center">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}

// Scene invalidation component to force rendering on visibility change
function SceneUpdater({ shouldUpdate }) {
  const { invalidate, gl, scene, camera } = useThree()
  
  useEffect(() => {
    if (shouldUpdate) {
      console.log('🔄 Forcing scene update due to visibility change')
      invalidate()
      gl.render(scene, camera)
    }
  }, [shouldUpdate, invalidate, gl, scene, camera])
  
  return null
}

export default function ModelViewer({ modelPath = "/static/3d/model.glb" }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState(null)
  const [gltf, setGltf] = useState(null)
  const [isTimeout, setIsTimeout] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(0)
  const canvasRef = useRef(null)
  const [canvasReady, setCanvasReady] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(true) // Force to true initially
  const [manualGL, setManualGL] = useState(null)

  // Force immediate Canvas creation using useLayoutEffect (before paint)
  useLayoutEffect(() => {
    // Force Canvas to be ready immediately
    setCanvasReady(true)
    console.log('🚀 Canvas component mounting - forcing immediate creation')
    
    // Override document.hidden to force visibility
    const originalHidden = Object.getOwnPropertyDescriptor(Document.prototype, 'hidden') || 
                          Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'hidden')
    
    if (originalHidden) {
      Object.defineProperty(document, 'hidden', {
        get: () => false, // Always return false (visible)
        configurable: true
      })
      console.log('🕶️ Document.hidden overridden to force visibility')
    }
    
    // Override visibilityState as well
    const originalVisibilityState = Object.getOwnPropertyDescriptor(Document.prototype, 'visibilityState') || 
                                   Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'visibilityState')
    
    if (originalVisibilityState) {
      Object.defineProperty(document, 'visibilityState', {
        get: () => 'visible', // Always return visible
        configurable: true
      })
      console.log('👁️ Document.visibilityState overridden to force visible')
    }
    
    // Warm up WebGL context with a hidden canvas
    const warmupCanvas = document.createElement('canvas')
    warmupCanvas.width = 1
    warmupCanvas.height = 1
    warmupCanvas.style.position = 'absolute'
    warmupCanvas.style.top = '-9999px'
    warmupCanvas.style.left = '-9999px'
    document.body.appendChild(warmupCanvas)
    
    const warmupGL = warmupCanvas.getContext('webgl2') || warmupCanvas.getContext('webgl')
    if (warmupGL) {
      console.log('🔥 WebGL context warmed up successfully')
      warmupGL.clearColor(0, 0, 0, 0)
      warmupGL.clear(warmupGL.COLOR_BUFFER_BIT)
      
      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(warmupCanvas)
        console.log('🧹 Warmup canvas cleaned up')
      }, 2000)
    }
    
    return () => {
      // Restore original properties when component unmounts
      if (originalHidden) {
        Object.defineProperty(document, 'hidden', originalHidden)
      }
      if (originalVisibilityState) {
        Object.defineProperty(document, 'visibilityState', originalVisibilityState)
      }
    }
  }, [])

  // Force intersection observer to always report as visible
  useEffect(() => {
    if (canvasRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          // Always report as intersecting to trick React Three Fiber
          setIsIntersecting(true)
          console.log('📍 Intersection Observer: Forcing visible state')
        },
        { threshold: 0 }
      )
      
      observer.observe(canvasRef.current)
      
      // Force initial intersection
      setIsIntersecting(true)
      
      return () => observer.disconnect()
    }
  }, [canvasReady])

  // Update document title to show loading progress
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const originalTitle = document.title
      
      if (!isLoaded && !error) {
        document.title = `Loading 3D Model (${Math.round(loadingProgress)}%)...`
      } else if (isLoaded) {
        document.title = originalTitle
      }
      
      return () => {
        document.title = originalTitle
      }
    }
  }, [loadingProgress, isLoaded, error])

  // Force Canvas to be visible and create WebGL context immediately
  useEffect(() => {
    const timer = setTimeout(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current.querySelector('canvas')
        if (canvas) {
          console.log('🔧 Forcing Canvas visibility and WebGL context creation')
          canvas.style.visibility = 'visible'
          canvas.style.display = 'block'
          canvas.style.opacity = '1'
          // Force a paint
          canvas.offsetHeight
        }
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let isMounted = true
    let loader = null
    let dracoLoader = null
    let timeoutId = null

    // Handle visibility changes (tab switching)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log('👁️ Tab became visible, forcing scene update')
        // Force scene update when tab becomes visible
        setForceUpdate(prev => prev + 1)
        
        if (isTimeout) {
          // Force a small progress update to trigger UI refresh
          setLoadingProgress(prev => Math.min(prev + 1, 99))
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    const loadModel = async () => {
      try {
        setLoadingProgress(0)
        setError(null)
        setIsTimeout(false)

        // Create timeout to detect if loading is taking too long (likely due to tab suspension)
        timeoutId = setTimeout(() => {
          if (isMounted) {
            setIsTimeout(true)
          }
        }, 5000) // 5 seconds

        // Initialize loaders
        loader = new GLTFLoader()
        
        if (typeof window !== 'undefined') {
          dracoLoader = new DRACOLoader()
          dracoLoader.setDecoderPath('/draco/')
          dracoLoader.setDecoderConfig({ type: 'wasm' })
          loader.setDRACOLoader(dracoLoader)
        }

        // Set up progress tracking
        loader.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
          const progress = (itemsLoaded / itemsTotal) * 100
          if (isMounted) {
            setLoadingProgress(progress)
            // Clear timeout if we're making progress
            if (timeoutId) {
              clearTimeout(timeoutId)
              timeoutId = null
              setIsTimeout(false)
            }
          }
        }

        loader.manager.onError = (url) => {
          console.error('Error loading model:', url)
          if (isMounted) {
            setError(`Failed to load model: ${url}`)
          }
        }

        // Load the model
        const loadedGltf = await new Promise((resolve, reject) => {
          loader.load(
            modelPath,
            (gltf) => resolve(gltf),
            (progress) => {
              const progressPercent = (progress.loaded / progress.total) * 100
              if (isMounted) {
                setLoadingProgress(progressPercent)
              }
            },
            (error) => reject(error)
          )
        })

        if (isMounted) {
          setGltf(loadedGltf)
          setLoadingProgress(100)
          // Clear any remaining timeout
          if (timeoutId) {
            clearTimeout(timeoutId)
            timeoutId = null
          }
          setIsTimeout(false)
          
          // Process the model immediately and trigger onLoad
          if (loadedGltf?.scene) {
            console.log('🎯 Model loaded successfully, processing...')
            // Calculate bounding box to fit model properly
            const box = new Box3().setFromObject(loadedGltf.scene)
            const center = box.getCenter(new Vector3())
            const size = box.getSize(new Vector3())
            
            // Center the model
            loadedGltf.scene.position.sub(center)
            
            // Scale model to fit nicely in view
            const maxDim = Math.max(size.x, size.y, size.z)
            const scale = 2 / maxDim
            loadedGltf.scene.scale.setScalar(scale)
            
            console.log('✅ Model processed, will be added to scene...')
          }
        }
      } catch (error) {
        console.error('Model loading error:', error)
        if (isMounted) {
          setError(`Failed to load 3D model: ${error.message}`)
        }
      }
    }

    loadModel()

    return () => {
      isMounted = false
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (dracoLoader) {
        dracoLoader.dispose()
      }
    }
  }, [modelPath, isTimeout])

  const handleSceneReady = () => {
    console.log('🚀 Scene ready, activating display...')
    setTimeout(() => {
      setIsLoaded(true)
      console.log('✨ Model display activated!')
    }, 100) // Shorter delay since scene is already ready
  }

  return (
    <div className="w-full h-full relative">
      {!isLoaded && !error && <LoadingProgress progress={loadingProgress} isTimeout={isTimeout} />}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Failed to load 3D model</h3>
            <p className="text-sm text-gray-600">{error}</p>
          </div>
        </div>
      )}
      
      {/* Force Canvas to be immediately visible and create WebGL context */}
      {canvasReady && (
        <div 
          ref={canvasRef}
          className="absolute inset-0"
          style={{ 
            width: '100%', 
            height: '100%',
            visibility: 'visible',
            opacity: 1,
            zIndex: 1
          }}
        >
          <Canvas
            camera={{
              position: [0, 0, 1],
              fov: 50,
              near: 0.1,
              far: 100
            }}
            style={{ 
              background: 'transparent',
              width: '100%',
              height: '100%',
              visibility: 'visible',
              opacity: 1,
              display: 'block'
            }}
            frameloop="always"
            dpr={[1, 2]}
            legacy={false}
            linear={false}
            flat={false}
            orthographic={false}
            resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
              failIfMajorPerformanceCaveat: false,
              preserveDrawingBuffer: true,
              premultipliedAlpha: true
            }}
            onCreated={({ gl, scene, camera, size, viewport }) => {
              // Ensure WebGL context doesn't get lost and is immediately active
              gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
              gl.setClearColor(0x000000, 0)
              gl.setClearAlpha(0)
              
              // Force render when canvas is created
              console.log('🎮 WebGL context created and ready - IMMEDIATE')
              gl.render(scene, camera)
              
              // Force multiple renders to ensure context is active
              requestAnimationFrame(() => {
                gl.render(scene, camera)
                console.log('🔄 Forced additional render')
                
                // Force another render for good measure
                requestAnimationFrame(() => {
                  gl.render(scene, camera)
                  console.log('🔄 Second forced render')
                })
              })
            }}
          >
            {/* Enhanced lighting for better model visibility */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <directionalLight position={[-10, -10, -5]} intensity={0.4} />
            <spotLight 
              position={[0, 10, 0]} 
              angle={0.3} 
              penumbra={1} 
              intensity={0.5}
            />
            
            <Suspense fallback={null}>
              <SceneUpdater shouldUpdate={forceUpdate > 0} />
              <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[0, Math.PI / 2.5]}
                azimuth={[-Math.PI, Math.PI]}
                config={{ mass: 1, tension: 170, friction: 26 }}
              >
                {/* Only render Model when gltf is loaded, but Canvas is always active */}
                {gltf && (
                  <Model 
                    gltf={gltf}
                    onSceneReady={handleSceneReady}
                  />
                )}
              </PresentationControls>
            </Suspense>
            
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minDistance={0.5}
              maxDistance={25}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              autoRotate={false}
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Canvas>
        </div>
      )}
      
      {/* Overlay to hide the 3D model until loaded */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-transparent pointer-events-none"
          style={{ zIndex: 2 }}
        />
      )}
    </div>
  )
}
