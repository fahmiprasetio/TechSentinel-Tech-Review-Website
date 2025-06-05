import React, { useState, useEffect } from "react";
import ListArticle from "../components/ListArticle";
import ArticleFilter from "../components/ArticleFilter";
import { useSearchParams } from "react-router-dom";

const kategoriArticleOptions = [
  { name: "Semua", value: "" },
  { name: "Handphone", value: "Handphone" },
  { name: "Laptop", value: "Laptop" },
  { name: "Tablet", value: "Tablet" },
];

const Article = () => {
  const [articles, setArticles] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";
  const searchTerm = searchParams.get("search") || "";

  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm); // hanya update ketika Enter

  useEffect(() => {
      const API_URL = import.meta.env.VITE_API_URL;
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_URL}/articles`);
        if (!response.ok) throw new Error("Gagal mengambil data");
        const data = await response.json();
        setArticles(data.data);
      } catch (err) {
        console.error("Terjadi kesalahan saat fetch:", err);
      }
    };
    fetchArticles();
  }, []);

  const handleCategoryChange = (value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", value);
    setSearchParams(newParams);
  };

  const handleSearchSubmit = () => {
    const newParams = new URLSearchParams(searchParams);
    if (tempSearchTerm) {
      newParams.set("search", tempSearchTerm);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const newParams = new URLSearchParams(searchParams);
      if (tempSearchTerm) {
        newParams.set("search", tempSearchTerm);
      } else {
        newParams.delete("search");
      }
      setSearchParams(newParams);
    }
  };

  const resetFilters = () => {
    setTempSearchTerm("");
    setSearchParams({});
  };

  const filteredArticles = articles.filter((article) => {
    if (
      selectedCategory &&
      article.category.toLowerCase() !== selectedCategory.toLowerCase()
    )
      return false;
    if (
      searchTerm &&
      !article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

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

      {/* FILTER & SEARCH */}
      <ArticleFilter
        kategoriOptions={kategoriArticleOptions}
        selectedCategory={selectedCategory}
        searchTerm={tempSearchTerm}
        isFilterActive={!!selectedCategory || !!searchTerm}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setTempSearchTerm}
        onSearchKeyDown={handleSearchKeyDown}
        onResetFilters={resetFilters}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Garis */}
      <div className="border-b-2 border-white w-full mb-10"></div>

      {/* LIST ARTICLE */}
      <ListArticle articles={filteredArticles} />

      {/* UI Loading */}
      {filteredArticles.length === 0 && !articles.length && (
        <p className="text-center text-gray-300 mt-8">Memuat artikel...</p>
      )}
      {filteredArticles.length === 0 && articles.length > 0 && (
        <p className="text-center text-gray-300 mt-8">
          Tidak ada artikel yang cocok. Coba ubah filter atau pencarian Anda.
        </p>
      )}
    </div>
  );
};

export default Article;