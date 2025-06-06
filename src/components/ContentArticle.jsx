
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContentArticle = ({ slug, id }) => {
  const [article, setArticle] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [articleError, setArticleError] = useState(null);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);
  const [recommendationsError, setRecommendationsError] = useState(null);


  
  useEffect(() => {
      const API_URL = import.meta.env.VITE_API_URL;
    const fetchArticleDetail = async () => {
      if (!id) {
        setLoadingArticle(false);
        setArticleError("ID Artikel tidak tersedia untuk diambil.");
        return;
      }

      setLoadingArticle(true);
      setArticleError(null);
      setArticle(null);

      try {
        const response = await fetch(
          `${API_URL}/article/${id}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`Artikel detail dengan ID ${id} tidak ditemukan.`);
          }
          throw new Error(`Gagal mengambil detail artikel (status: ${response.status})`);
        }

        const result = await response.json();
        if (result.success && typeof result.data === 'object' && !Array.isArray(result.data)) {
          setArticle(result.data);
        } else if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          console.warn("API /article/:id mengembalikan array, menggunakan elemen pertama.");
          setArticle(result.data[0]);
        } else {
          throw new Error("Format data artikel tidak sesuai atau kosong dari API.");
        }
      } catch (err) {
        console.error(`Gagal mengambil artikel (ID: ${id}):`, err);
        setArticleError(err.message);
      } finally {
        setLoadingArticle(false);
      }
    };

    fetchArticleDetail();
  }, [id]);

  // artikel rekomendasi
  useEffect(() => {
      const API_URL = import.meta.env.VITE_API_URL;
    const fetchRecommended = async () => {
      if (!slug) { // Pastikan slug ada
        setRecommended([]);
        return;
      }
      setLoadingRecommendations(true);
      setRecommendationsError(null);
      setRecommended([]); // Reset sebelum fetch

      try {
        const response = await fetch(`${API_URL}/articles`);
        if (!response.ok) { 
          throw new Error(`Gagal mengambil data rekomendasi (status: ${response.status})`);
        }

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) { // Pengecekan krusial
          const filtered = result.data.filter((item) => item.slug !== slug);
          setRecommended(filtered.slice(0, 7));
        } else {
          console.error("Format data rekomendasi tidak sesuai dari API atau success:false :", result);
          throw new Error("Format data rekomendasi tidak sesuai atau gagal diambil.");
        }
      } catch (err) {
        console.error("Error dalam fetchRecommended:", err);
        setRecommendationsError(err.message || "Gagal memuat rekomendasi.");
      } finally {
        setLoadingRecommendations(false);
      }
    };

    fetchRecommended();
  }, [slug]);


  // Kondisi render utama
  if (loadingArticle) {
    return <div className="text-white text-center mt-10 p-6">Memuat detail artikel...</div>;
  }

  if (articleError) {
    return <div className="text-red-400 text-center mt-10 p-6">Error: {articleError}</div>;
  }

  if (!article) {
    // Ini akan menangani kasus jika artikel masih null setelah loading selesai dan tidak ada error
    return <div className="text-white text-center mt-10 p-6">Detail artikel tidak dapat dimuat atau tidak ditemukan.</div>;
  }

  // Jika sampai sini, 'article' sudah pasti ada dan bisa dirender
  return (
    <div className="relative bg-center bg-contain min-h-screen px-4 sm:px-8 py-12 bg-gradient-to-br from-slate-500/5 via-gray-900/5 backdrop-blur-sm">
      <div className="absolute inset-0 bg-opacity-60 z-0" />

      {/* Konten Artikel Utama */}
      <div className="relative z-10 max-w-screen-lg mx-auto p-6 rounded-lg">
        <h1 className="text-white font-bold lg:text-3xl sm:text-xl md:text-2xl text-center mb-8 drop-shadow-md">
          {article.title}
        </h1>
       
        {/* Intro */}
        <div className="flex flex-wrap xl:flex-nowrap gap-8 mb-12">
          <div className="w-full xl:w-1/2 max-w-md mx-auto">
            <img
              src={article.image || "/placeholder.jpg"}
              alt={article.title || "Gambar Artikel"}
              className="w-full h-[250px] object-cover rounded shadow-md"
            />
          </div>
          <div className="w-full xl:w-1/2 text-slate-200 text-base max-w-xl sm:mx-auto md:mx-auto font-normal">
            <p>{article.intro}</p>
          </div>
        </div>

        {/* Sub Section */}
        {article.subTitle && (
          <div className="text-center mb-12">
            <h2 className="font-semibold text-white lg:text-2xl md:text-xl sm:text-lg mb-4">
              {article.subTitle}
            </h2>
            {article.subImage && (
              <div className="flex justify-center mb-6">
                <img
                  src={article.subImage}
                  alt={article.subTitle || "Gambar Sub Bagian"}
                  className="w-80 h-[200px] object-cover rounded shadow"
                />
              </div>
            )}
            <p className="text-slate-200 max-w-xl mx-auto text-left">
              {article.subContent}
            </p>
            {article.subTitle2 && (
              <div className="text-slate-200 text-base max-w-xl mx-auto text-left">
                <h3 className="font-semibold text-white mt-6 mb-2">
                  {article.subTitle2}
                </h3>
                <p>{article.subContent2}</p>
              </div>
            )}
          </div>
        )}

        {/* Section 2 */}
        {article.section2Title && (
          <div className="text-center mb-12">
            <h2 className="font-semibold text-white lg:text-2xl md:text-xl sm:text-lg mb-4">
              {article.section2Title}
            </h2>
            {article.section2Image && (
              <div className="flex justify-center mb-6">
                <img
                  src={article.section2Image}
                  alt={article.section2Title || "Gambar Bagian 2"}
                  className="w-80 h-[200px] object-cover rounded shadow"
                />
              </div>
            )}
            <p className="text-slate-200 max-w-xl mx-auto text-left">
              {article.section2Content}
            </p>
          </div>
        )}

      {/* Bagian Artikel Rekomendasi */}
      <div className="relative z-10 max-w-screen-lg mx-auto mt-12">
        <h2 className="text-white font-semibold text-2xl mb-6 text-center">
          Rekomendasi Artikel Lainnya
        </h2>
        
        {loadingRecommendations && (
          <p className="text-center text-gray-300">Memuat rekomendasi...</p>
        )}
        {recommendationsError && (
          <p className="text-center text-red-400">Error: {recommendationsError}</p>
        )}
          </div>

        {!loadingRecommendations && !recommendationsError && (
          <div className="overflow-x-auto">
            <div className="flex gap-4 px-1 w-max">
              {recommended.length > 0 ? (
                recommended.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/10 backdrop-blur-md border border-slate-500 rounded shadow-md overflow-hidden flex flex-col min-w-[250px] max-w-[250px] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear hover:bg-slate-300/5"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-[160px] object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-white text-md mb-2 line-clamp-2 min-h-[48px]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white line-clamp-2 min-h-[40px]">
                        {item.excerpt}
                      </p>
                      <div className="mt-auto">
                        <Link to={`/article/${item.slug}`}>
                          <p className="text-blue-200 text-sm font-medium inline-block mt-2">
                            Baca Selengkapnya →
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400 w-full ">
                  Tidak ada rekomendasi artikel untuk ditampilkan.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentArticle;