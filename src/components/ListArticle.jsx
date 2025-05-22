import React from "react";
import { Link } from "react-router-dom";

const ListArticle = () => {
  return (
    <div>
        <Link to="/artikel/samsung-galaxy-s23">
  <div className="w-full mt-3 mb-3">
    <div className="w-full border border-slate-400 shadow-lg flex mt-4 relative bg-slate-800 rounded-md 
      hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear">
      
      {/* Gambar */}
      <div className="w-[200px] sm:w-[220px] md:w-[250px] lg:w-[320px] aspect-[4/3] overflow-hidden flex-shrink-0 rounded-l-md">
        <img
          src="gas23.png"
          alt="Samsung Galaxy S23"
          className="w-full h-full object-cover"
          width="640"
          height="480"
        />
      </div>

      {/* Konten */}
      <div className="w-full ml-4 pr-2 py-2 relative">
        <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl font-poppins text-white">
          Samsung Galaxy S23: Mengukir Standar Baru Smartphone Premium
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-[270px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-xl xl:max-w-2xl font-poppins">
          Samsung Galaxy S23 hadir dengan desain kompak, chipset Snapdragon 8 Gen 2,
          serta kamera 50MP yang powerful. Cocok bagi pengguna yang mencari ponsel flagship
          ringkas tanpa mengorbankan performa.
        </p>

        {/* Footer */}
        <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xs text-gray-400">
          <span className="hidden sm:block">Leonardo Davinci</span>
          <span className="hidden sm:block bg-sky-400 text-slate-900 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
            Handphone
          </span>
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          21-05-2023
        </div>
      </div>
    </div>
  </div>
</Link>

    </div>
  );
};

export default ListArticle;
