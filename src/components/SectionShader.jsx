// src/components/FixedShaderBackground.jsx
import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const FixedShaderBackground = ({ urlString }) => {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <ShaderGradient control="query" urlString={urlString} />
    </ShaderGradientCanvas>
  );
};

export default FixedShaderBackground;
