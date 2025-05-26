"use client"

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Box3, Vector3 } from 'three'
import { Progress } from '@/components/ui/progress'

function Model({ modelPath, onLoad, onProgress }) {
  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    loader.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const progress = (itemsLoaded / itemsTotal) * 100
      if (onProgress) {
        onProgress(progress)
      }
    }
  })
  const modelRef = useRef()
  const rotationRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (gltf.scene && onLoad) {
      // Calculate bounding box to fit model properly
      const box = new Box3().setFromObject(gltf.scene)
      const center = box.getCenter(new Vector3())
      const size = box.getSize(new Vector3())
      
      // Center the model
      gltf.scene.position.sub(center)
      
      // Scale model to fit nicely in view
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 2 / maxDim // Adjust this value to make model smaller/larger
      gltf.scene.scale.setScalar(scale)
      
      onLoad()
    }
  }, [gltf, onLoad])

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

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene}
      position={[0, 0, 0]}
    />
  )
}

function LoadingProgress({ progress }) {
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
          <h3 className="text-lg font-semibold text-gray-700">Loading 3D Model...</h3>
        </div>
        <Progress value={progress} className="w-full h-2" />
        <p className="text-xs text-gray-400 text-center">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}

export default function ModelViewer({ modelPath }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const handleProgress = (progress) => {
    setLoadingProgress(progress)
  }

  const handleLoad = () => {
    setLoadingProgress(100)
    setTimeout(() => {
      setIsLoaded(true)
    }, 500) // Small delay to show 100% completion
  }

  return (
    <div className="w-full h-full relative">
      {!isLoaded && <LoadingProgress progress={loadingProgress} />}
      
      <Canvas
        camera={{
          position: [0, 0, 12], // Much more zoomed out
          fov: 50,
          near: 0.1,
          far: 100
        }}
        style={{ 
          background: 'transparent',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
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
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[0, Math.PI / 2.5]} // Only allow rotation from horizontal to above
            azimuth={[-Math.PI, Math.PI]} // Full horizontal rotation
            config={{ mass: 1, tension: 170, friction: 26 }}
          >
            <Model 
              modelPath={modelPath} 
              onLoad={handleLoad}
              onProgress={handleProgress}
            />
          </PresentationControls>
        </Suspense>
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={0.5} // Much closer zoom
          maxDistance={25} // Further zoom out
          minPolarAngle={0} // Can look from directly above
          maxPolarAngle={Math.PI / 2} // Cannot go below horizontal plane
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
