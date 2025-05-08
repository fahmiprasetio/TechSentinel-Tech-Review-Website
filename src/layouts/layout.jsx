import React from 'react';
import LayoutNavbar from './layoutnavbar';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Background Fixed */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: "url('/Background-4.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <LayoutNavbar />
      <main className="mt-0 flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 h-30 text-white py-4">
        <div className="text-center">
          <p>&copy; 2025 Tech Commitment. All Rights Reserved.</p>
          <p>Contact: info@techcommitment.com</p>
        </div>
      </footer>
      
    </div>
  );
};

export default Layout;
