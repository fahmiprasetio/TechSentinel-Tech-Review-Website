import React, { useState, useEffect } from "react";
import ListArticle from "../components/ListArticle";    
import ArticleFilter from "../components/ArticleFilter";

const kategoriArticleOptions = [
  { name: 'Semua', value: '' },
  { name: 'Handphone', value: 'Handphone' },
  { name: 'Laptop', value: 'Laptop' },
  { name: 'Tablet', value: 'Tablet' },
];

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/articles");
        if (!response.ok) throw new Error("Gagal mengambil data");
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
  };

  const filteredArticles = articles.filter((article) => {
    if (selectedCategory && article.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    if (searchTerm && !article.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const isFilterActive = selectedCategory || searchTerm;

  return (
    <div className="flex w-full min-h-screen text-white p-6 flex-col">
      {/* HEADER */}
      <div className="text-center font-bold text-white lg:text-4xl text-xl sm:text-2xl md:text-3xl shadow-sm">
        Article Technology
      </div>
      <p className="text-white mt-4 mb-8 text-xs md:text-base lg:text-base shadow-sm text-center">
        <span className="animate-typing overflow-hidden whitespace-nowrap border-r-1 inline-block text-center w-[20ch] px-1 sm:px-5">
          Read and Review Technology Information Right Now!!
        </span>
      </p>

     
      {/* FILTER & SEARCH MENGGUNAKAN KOMPONEN BARU */}
      <ArticleFilter
        kategoriOptions={kategoriArticleOptions}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        isFilterActive={isFilterActive}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchTerm} // Bisa langsung pass setSearchTerm
        onResetFilters={resetFilters}
      />

      {/* garis */}
      <div className="border-b-2 border-white w-full mb-10"></div>

      {/* LIST ARTICLE */}
      <ListArticle articles={filteredArticles} />

      {/* Load Ui */}
      {filteredArticles.length === 0 && !articles.length && (
        <p className="text-center text-gray-300 mt-8">Memuat artikel...</p>
      )}
      {filteredArticles.length === 0 && articles.length > 0 && (
        <p className="text-center text-gray-300 mt-8">Tidak ada artikel yang cocok. Coba ubah filter atau pencarian Anda.</p>
      )}
    </div>
  );
};

export default Article;
