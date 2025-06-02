import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContentArticle = ({ slug }) => {
  const [article, setArticle] = useState(null);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/DetailArticles?slug=${slug}`
        );
        const data = await response.json();
        setArticle(data[0]); // Ambil artikel pertama yang cocok
      } catch (err) {
        console.error("Gagal mengambil artikel:", err);
      }
    };

    fetchArticle();
  }, [slug]);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const response = await fetch("http://localhost:5000/articles");
        const data = await response.json();

        // Filter agar tidak menyertakan artikel yang sedang dibuka
        const filtered = data.filter((item) => item.slug !== slug);
        setRecommended(filtered.slice(0, 7)); // tampilkan 4 rekomendasi
      } catch (err) {
        console.error("Gagal mengambil artikel rekomendasi:", err);
      }
    };

    fetchRecommended();
  }, [slug]);

  if (!article) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div
      className="relative bg-center bg-contain min-h-screen px-4 sm:px-8 py-12"
      style={{ backgroundImage: "url('/bg-riviw.svg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 max-w-screen-lg mx-auto p-6 rounded-lg">
        <h1 className="text-white font-semibold lg:text-3xl sm:text-xl md:text-2xl text-center mb-8 drop-shadow-md">
          {article.title}
        </h1>

        {/* Intro Section */}
        <div className="flex flex-wrap xl:flex-nowrap gap-8 mb-12">
          <div className="w-full xl:w-1/2 max-w-md mx-auto">
            <img
              src={article.image || "/placeholder.jpg"}
              alt={article.title}
              className="w-full h-[250px] object-cover rounded shadow-md"
            />
          </div>
          <div className="w-full xl:w-1/2 text-slate-200 text-base max-w-xl sm:mx-auto md:mx-auto">
            <p>{article.intro}</p>
          </div>
        </div>

        {/* Sub Section */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-white lg:text-2xl md:text-xl sm:text-lg mb-4">
            {article.subTitle}
          </h2>
          {article.subImage && (
            <div className="flex justify-center mb-6">
              <img
                src={article.subImage}
                alt="Sub Section"
                className="w-80 h-[200px] object-cover rounded shadow"
              />
            </div>
          )}
          <p className="text-slate-200 max-w-xl mx-auto text-left">
            {article.subContent}
          </p>

          {article.subTitle2 && (
            <>
              <div className="text-slate-200 text-base  max-w-xl mx-auto text-left">
                <h3 className="font-semibold text-white mt-6 mb-2">
                  {article.subTitle2}
                </h3>
                <p className="text-slate-200">{article.subContent2}</p>
              </div>
            </>
          )}
        </div>

        {/* Section 2 */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-white lg:text-2xl md:text-xl sm:text-lg mb-4">
            {article.section2Title}
          </h2>
          {article.section2Image && (
            <div className="flex justify-center mb-6">
              <img
                src={article.section2Image}
                alt="Section 2"
                className="w-80 h-[200px] object-cover rounded shadow"
              />
            </div>
          )}
          <p className="text-slate-200 max-w-xl mx-auto text-left">
            {article.section2Content}
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-screen-lg mx-auto mt-12">
        <h2 className="text-white font-semibold text-2xl mb-6 text-center">
          Rekomendasi Artikel Lainnya
        </h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 px-1 w-max ">
            {recommended.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800 border border-slate-500 rounded shadow-md overflow-hidden flex flex-col min-w-[250px] max-w-[250px] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear hover:bg-opacity-10 hover:bg-slate-300"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArticle;
