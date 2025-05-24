# 3D Model Optimization with Draco

## Overview
This project uses Draco compression to optimize 3D models for faster loading and better performance.

## Setup

### File Structure
```
├── static/3d/
│   ├── model.glb (1.6MB - Draco optimized)
│   ├── hospital_construction1.glb (19MB - Unoptimized)
│   └── hospital_construction.glb (32MB - Unoptimized)
└── public/draco/
    ├── draco_decoder.js
    ├── draco_decoder.wasm
    └── draco_wasm_wrapper.js
```

### Performance Improvements
- **File Size Reduction**: From 19MB to 1.6MB (91% reduction)
- **Faster Loading**: Significantly reduced download time
- **Better UX**: Faster initial page load and 3D scene initialization

### Implementation

The ModelViewer component now includes:

1. **DRACOLoader Configuration**:
   - Uses WASM decoder for optimal performance
   - Fallback to JavaScript decoder if WASM fails
   - Decoder files served from `/draco/` path
   - **SSR-Safe**: Only initializes on client-side to avoid server-side errors

2. **Error Handling**:
   - Loading progress tracking
   - Error state display
   - Fallback messaging for failed loads

3. **Optimized Default Model**:
   - Uses `model.glb` by default (1.6MB)
   - Still supports custom model paths
   - Maintains all existing functionality

### SSR Considerations

The DRACOLoader is only initialized on the client side to prevent SSR errors:

```jsx
// Only initialize draco loader on client side
if (typeof window !== 'undefined') {
  const dracoLoaderInstance = new DRACOLoader()
  dracoLoaderInstance.setDecoderPath('/draco/')
  dracoLoaderInstance.setDecoderConfig({ type: 'wasm' })
  loader.setDRACOLoader(dracoLoaderInstance)
}
```

This ensures compatibility with Next.js server-side rendering while maintaining optimal performance on the client.

### Tab Switching & Loading Reliability

To address common issues with WebGL context suspension when tabs go to background, the component includes:

1. **Manual Loading**: Uses direct GLTFLoader instead of React Three Fiber's `useLoader` to avoid WebGL context dependency
2. **Immediate Processing**: Model processing and display activation happens directly in the loader callback, not in React effects
3. **Timeout Detection**: Automatically detects if loading stalls (5+ seconds) and shows helpful messaging
4. **Visibility Handling**: Listens for tab visibility changes and handles suspended loading gracefully
5. **Progress Recovery**: Forces progress updates when returning to a previously suspended tab

```jsx
// Process model immediately when loading completes
if (loadedGltf?.scene) {
  // Process geometry (center, scale)
  processModel(loadedGltf.scene)
  
  // Activate display immediately - no waiting for React effects
  setTimeout(() => {
    setIsLoaded(true)
  }, 500)
}
```

**Key Fix**: The 3D model now displays immediately when reaching 100% progress, regardless of whether the tab was in the background during loading. Previously, the display activation was dependent on React effects that could be throttled in inactive tabs.

### Usage

```jsx
// Use default optimized model
<ModelViewer />

// Use custom model
<ModelViewer modelPath="/static/3d/custom-model.glb" />
```

### Browser Support
- Modern browsers with WebAssembly support (preferred)
- Fallback to JavaScript decoder for older browsers
- Progressive enhancement approach

### Notes
- Draco files must be served from the `/draco/` public path
- Models should be compressed with Draco for optimal performance
- The decoder initializes automatically when the model loads (client-side only) 