import React, { useState } from 'react';
import { motion } from 'framer-motion'; //buat animasi hurufnya
import topLaptops2025 from '../data/topLaptops2025';

const Homepage = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/products?search=${searchInput}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error saat mencari produk:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-4 text-center">
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }} // Awal: transparan dan turun 50px
        animate={{ opacity: 1, y: 0 }}   // Animasi ke: muncul dan posisi normal
        transition={{ duration: 0.5, ease: 'easeOut' }} // Durasi dan jenis easing
        className="font-poppins text-white text-2xl mt-32 sm:text-4xl md:text-5xl font-semibold mb-4"
        style={{ lineHeight: '1.1' }}
      >
        Commitment to Objectivity
        and <br />Technology Accuracy
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="text-white text-sm sm:text-lg md:text-lg mb-8 max-w-5xl font-light"
      >
        Providing data-driven technology analysis to help facilitate the best choices for you
      </motion.p>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md bg-white rounded-full overflow-hidden mb-12">
        <input
          type="text"
          placeholder="Search product..."
          className="w-full h-12 px-4 ml-2 text-gray-700 outline-none"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="flex items-center justify-center h-12 w- text-gray-700 hover:bg-gray-200"
          onClick={handleSearch}
        >
          {/* Icon Search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </button>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-5xl mt-10 bg-white bg-opacity-5 border border-white border-opacity-30 rounded-2xl overflow-x-auto">
        <div className="flex space-x-6 p-6 min-w-max">
          {topLaptops2025.map((laptop) => (
            <div
              key={laptop.id}
              className="flex-shrink-0 w-40 sm:w-56 md:w-64 bg-white bg-opacity-10 border border-white border-opacity-30 backdrop-blur-md rounded-2xl p-2 hover:scale-105 transition-transform text-left"
            >
              <img
                src={laptop.image}
                alt={laptop.name}
                className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 drop-shadow-2xl"
              />
              <h3 className="text-sm ml-5 sm:text-base font-semibold text-white">{laptop.name}</h3>
              <p className="text-white font-bold ml-5 text-sm mt-1">{laptop.price}</p>
              <a
                href={laptop.link}
                className="inline-block mt-4 ml-5 mb-4 px-3 py-1 border border-white text-white text-sm rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Lihat Detail
              </a>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Homepage;
