import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center font-poppins">
      {/* Konten utama */}
      <div className="flex items-center justify-center min-h-[80vh] px-4 w-full">
        <div className="text-center max-w-5xl w-full">
          <h1 className="lg:text-5xl sm:text-5xl md:text-6xl font-semibold text-white mb-6"
            style={{ 
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)'
            }}>
            About Us
          </h1>

          <motion.div
            className="h-1 bg-white mx-auto mb-6 rounded-full w-1/4 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/2"
            style={{ originX: 0.5, boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />


          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed px-2 sm:px-6 font-thin"
          style={{ 
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)'
          }}>
            <strong>Tech Sentinel</strong> is a platform dedicated to providing
            data-driven technology analysis to assist users in finding the best
            tech products based on their needs. We are committed to delivering
            accurate, objective, and transparent product reviews.
          </p>
        </div>
      </div>

      <motion.div
        className="relative z-10 mt-20 mb-4 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src="/section-slogan.png"
          alt="Section Slogan"
          className="h-auto block"
          style={{ marginLeft: "-24px" }}
        />
      </motion.div>

      {/* Gambar gradien */}
      <div className="w-screen -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64 xl:-mt-[500px]">
        <img
          src="/gradient-hitam1.png"
          alt="Gradient"
          className="w-full h-auto block"
        />
      </div>

      {/* Section Vision & Mission */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full px-4 md:px-0 pt-4 md:pt-0 max-w-7xl mx-auto gap-8 -mt-40 md:-mt-52 lg:-mt-72 xl:-mt-[500px]">
        {/* Text kiri */}
        <div className="text-white text-justify max-w-xl self-center md:self-center md:pl-8 lg:ml-7">
          <h3 className="text-2xl font-semibold mb-4"
            style={{ 
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)'
            }}>Our Vision</h3>
          <p className="text-base md:text-lg leading-relaxed mb-6 font-light"
            style={{ 
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)'
            }}>
              To become the most trusted and comprehensive source for technology
              reviews and comparisons, empowering users to make informed,
              confident, and smarter purchasing decisions.
          </p>
          <h3 className="text-2xl font-semibold mb-4"
            style={{ 
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)'
            }}>Our Mission</h3>
          <p className="text-base md:text-lg leading-relaxed font-light"
            style={{ 
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)'
            }}>
              At Tech Sentinel, we provide honest, accurate, and detailed insights
              to simplify the process of choosing tech products. Our unbiased
              reviews and expert comparisons ensure users find the perfect device
              for their needs.
          </p>
        </div>

        {/* Gambar kanan */}
        <div className="w-fit md:pl-4">
          <img
            src="/grup-barang.png"
            alt="Product Showcase"
            className="h-auto block"
            style={{ maxWidth: "580px", marginRight: "-32px" }}
          />
        </div>
      </div>

      {/* Layer tumpuk: Gradien + Gambar makna-logo */}
      <div className="relative w-screen -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-24">
        {/* Gambar gradien sebagai latar belakang */}
        <img
          src="/gradient-4.png"
          alt="Gradient"
          className="w-full mt-52 h-[50vh] lg:h-[100vh] sm:h-[10vh] md:h-[10vh]  block"
        />

        {/* Gambar makna-logo di atas gradien */}
        <img
          src="/makna-logo2.png"
          alt="Makna Logo"
          className="absolute top-96 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-5xl "
        />
      </div>



    </div>
  );
};

export default About;
