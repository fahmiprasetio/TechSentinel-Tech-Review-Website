import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 
import { Link } from 'react-router-dom';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import SearchBar from '../components/SearchBar'; 


const FixedShaderBackground = ({ urlString }) => {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <ShaderGradient control="query" urlString={urlString} />
    </ShaderGradientCanvas>
  );
};



const HoverButton = ({ text }) => (
  <button className="relative text-left overflow-hidden group">
    <span className="relative z-10 group-hover:text-white transition-colors duration-300">{text}</span>
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white  group-hover:w-full transition-all duration-300"></span>
  </button>
);


const Homepage = () => {
  

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/products?search=${searchInput}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error saat mencari produk:', error);
    }
  };

  const { ref: chooseUsRef, inView: chooseUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>

      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen text-center">

        {/* Hero Section */}
        <div className="w-full flex flex-col items-center justify-center mt-32 text-center ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-poppins text-white text-2xl sm:text-4xl md:text-5xl font-semibold mb-4"
            style={{ lineHeight: '1.1', textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
          >
            Commitment to Objectivity
            and <br />Technology Accuracy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="text-white text-sm sm:text-lg md:text-lg mb-8 max-w-5xl font-light"
            style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
          >
            Providing data-driven technology analysis to help facilitate the best choices for you
          </motion.p>

          {/* tombol search statis */}
          <div className="w-full max-w-xl px-4 mb-12">
  <SearchBar />
</div>


        </div>

        {/* Section Kategori */}
        <div className="w-full max-w-5xl mt-10 backdrop-blur-sm border border-white bg-white/5 border-opacity-80 rounded-2xl overflow-hidden py-5 lg:py-0"
        >
          <div className="flex flex-wrap justify-evenly sm:p-4 lg:p-6 w-full">
            {['Tablet', 'Laptop', 'Phone'].map((item, index) => (
              <div key={index} className="flex flex-col items-center border border-white bg-white/10 border-white border-opacity-80  rounded-2xl sm:p-4 p-0 flex-1 sm:mx-4 mx-3 hover:scale-[1.02] transition-transform duration-400"
                style={{ boxShadow: '0px 8px 24px rgba(5, 5, 10, 0.4)' }}>
                <img src={`/${item.toLowerCase()}-noBg3.png`} alt={item} className="w-50 h-50 mb-1 drop-shadow-2xl" />
                <h3 className="text-white text-lg font-semibold mb-5"
                  style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)' }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Section Why Choose Us */}
        <div className="w-full max-w-6xl mt-10 text-center sm:px-4 px-6 " ref={chooseUsRef}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: chooseUsInView ? 1 : 0, y: chooseUsInView ? 0 : 50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-poppins text-white text-2xl sm:text-4xl md:text-5xl mt-20 font-semibold mb-4"
            style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)' }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: chooseUsInView ? 1 : 0, y: chooseUsInView ? 0 : 50 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="text-white text-sm sm:text-lg md:text-lg mb-20  font-light"
            style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)' }}
          >
            We provide expert, data-driven reviews aimed at empowering you to make the smartest, most informed technology decisions. Our evaluations are grounded in rigorous analysis and objective data to eliminate confusion and marketing noise, allowing you to clearly identify which products truly meet your needs. With our comprehensive insights, you gain access to the most accurate, up-to-date information available—carefully curated and explained—so you can navigate the fast-changing tech landscape with clarity and confidence.
          </motion.p>
        </div>







        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white px-8 pt-10 pb-8 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 -mb-14 ">
            {/* Info Lokasi */}
            <div>
              <h4 className="font-bold mb-2 text-left">TECH SENTINEL</h4>
              <p className="text-sm">
                Jl. Teknologi No. 404<br />
                Jakarta, INDONESIA
              </p>
            </div>

            {/* Navigation - jadi 4 kolom */}
            <div>
              <h4 className="font-bold mb-2 text-left">NAVIGATION</h4>
              <div className="text-sm grid grid-cols-4 gap-x-6 gap-y-1">
                {[
                  'Home', 'Collections', 'Projects', 'Innovations',
                  'Applications', 'Showroom', 'Company', 'Download',
                  'Contact', 'News', 'FAQ', 'Group',
                ].map((item, index) => (
                  <HoverButton key={index} text={item} />
                ))}
              </div>
            </div>

            {/* Follow - jadi 2 kolom */}
            <div>
              <h4 className="font-bold mb-2 text-left">FOLLOW</h4>
              <div className="text-sm grid grid-cols-2 gap-x-6 gap-y-1">
                {['Facebook', 'Instagram', 'YouTube', 'Pinterest', 'LinkedIn'].map((item, index) => (
                  <HoverButton key={index} text={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Logo besar */}
          <div className="flex justify-center items-center my-10">
            <h1 className="text-[10rem] font-extrabold tracking-tight text-white/90 ">TECH SENTINEL</h1>
          </div>

          {/* Bottom Bar */}
          <div className="-mt-10 flex justify-between items-center border border-white rounded-xl px-6 py-3 text-sm">
            <p>©2025 TECH SENTINEL</p>
            <div className="flex gap-4">
              <HoverButton text="Legal" />
              <HoverButton text="Privacy" />
              <HoverButton text="Cookies" />
            </div>
          </div>
        </footer>


      </div>
    </>
  );
};

export default Homepage;
