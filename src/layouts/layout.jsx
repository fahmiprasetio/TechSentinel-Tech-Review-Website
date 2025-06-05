import React from 'react';
import { useLocation } from 'react-router-dom';
import LayoutNavbar from './layoutnavbar';
import FixedShaderBackground from '../components/SectionShader.jsx'; 


const Layout = ({ children }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Background Fixed
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: "url('/Background-4.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div> */}

    <FixedShaderBackground
      urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=4.2&cPolarAngle=90&cameraZoom=1&color1=%2300999c&color2=%23aa0000&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=0.9&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.9&uFrequency=5.5&uSpeed=0.7&uStrength=0.4&uTime=0&wireframe=false"
    />


      {/* Content */}
      <LayoutNavbar />
      <main className="mt-0 flex-grow">
        {children}
      </main>

      {/* Footer global tidak akan muncul di homepage */}
      {!isHomepage && (
        <footer className="w-full bg-gray-900 h-30 text-white py-4">
          <div className="text-center">
            <p>&copy; 2025 Tech Commitment. All Rights Reserved.</p>
            <p>Contact: info@techcommitment.com</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
