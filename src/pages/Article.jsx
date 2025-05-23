// src/pages/Article.jsx (atau di mana pun file Anda berada)
import React, { useState, useEffect } from "react";
import ListArticle from "../components/ListArticle";
import FilterSidebar from "../components/FilterSidebar"; // Impor komponen baru
import { FunnelPlus, FunnelX } from 'lucide-react'; // Impor ikon

// Opsi kategori untuk artikel 

const kategoriArticleOptions = [
  { name: 'Tampilkan Semua', value: '' },
  { name: 'Handphone', value: 'Handphone' }, // Pastikan valuenya harus cocok dengan data article.category
  { name: 'Laptop', value: 'Laptop' },
  { name: 'Tablet', value: 'Tablet' },
  // Tambahkan kategori lain 
];

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/articles");
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error("Terjadi kesalahan saat fetch:", err);
      }
    };
    fetchArticles();
  }, []);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const resetFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
    // setShowFilter(false); // Opsional: sembunyikan filter setelah reset
  };

  const filteredArticles = articles.filter((article) => {
    // Filter berdasarkan kategori
    if (selectedCategory && article.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    // Filter berdasarkan searchTerm (mencari di judul artikel)
    if (searchTerm && !article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Cek apakah ada filter yang aktif
  const isFilterActive = selectedCategory || searchTerm;

  return (
    <div className="flex w-full min-h-screen text-white m-0 p-0">
      {showFilter && (
        <FilterSidebar
          kategoriOptions={kategoriArticleOptions}
          selectedKategori={selectedCategory}
          onKategoriChange={handleCategoryChange}
        />
      )}

      <div className="flex-1 p-6">
        {/* Section Atas Start */}
        <div className="w-full pt-8 flex flex-col items-center justify-center"> {/* Mengurangi pt-14 menjadi pt-8 */}
          <div className="text-center font-bold text-white lg:text-4xl text-xl sm:text-2xl md:text-3xl shadow-sm">
            Article Technology
          </div>
          <p className="text-white mt-4 mb-8 text-xs md:text-base lg:text-base shadow-sm">
            <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white inline-block text-center w-[20ch] px-1 sm:px-5">
              Read and Review Technology Information Right Now!!
            </span>
          </p>
        </div>
        {/* Section Atas End */}

        {/* Tombol Filter dan Search */}
        <div className="flex flex-wrap items-center gap-4 mt-5 mb-7"> {/* Menambah gap-4 */}
          <div className="flex gap-2"> {/* Menjaga gap-2 untuk dua tombol filter */}
            <h3 className="text-2xl font-bold font-poppins text-white ">| Explore Read Articles |</h3>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md border transition
                ${isFilterActive
                  ? 'bg-transparent border-2 border-green-300 text-green-300'
                  : 'border-2 text-white'}
                hover:bg-green-500 hover:text-white`}
              title={showFilter ? 'Tutup Filter' : 'Tampilkan Filter'}
            >
              <FunnelPlus size={20} />
              <span className="text-sm hidden sm:inline">
                {showFilter ? 'Tutup Menu Filter' : 'Tampilkan Menu Filter'}
              </span>
               <span className="text-sm sm:hidden">
                {showFilter ? 'Tutup' : 'Filter'}
              </span>
            </button>

            {isFilterActive && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white text-white hover:bg-red-600 transition"
                title="Reset Filter"
              >
                <FunnelX size={20} />
                <span className="text-sm hidden sm:inline">Reset Filter</span>
                <span className="text-sm sm:hidden">Reset</span>
              </button>
            )}
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari artikel..."
            className="bg-white/0 flex-grow sm:flex-grow-0 w-full sm:w-1/3 text-white border border-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-80"
          />
          
        </div>

        {/* Garis horizontal */}
        <div className="border-b-2 border-white w-full mb-10"></div>

        <ListArticle articles={filteredArticles} />

        {filteredArticles.length === 0 && !articles.length && ( // Loading state
           <p className="col-span-full text-center text-gray-300 mt-8">
             Memuat artikel...
           </p>
        )}
         {filteredArticles.length === 0 && articles.length > 0 && ( // No results state
           <p className="col-span-full text-center text-gray-300 mt-8">
             Tidak ada artikel yang cocok. Coba ubah filter atau pencarian Anda.
           </p>
        )}
      </div>
    </div>
  );
};

export default Article;