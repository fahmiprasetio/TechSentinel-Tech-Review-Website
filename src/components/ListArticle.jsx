import React from "react";
import { Link } from "react-router-dom";

const ListArticle = ({ articles }) => {
  return (
    <div>
      {articles.map((article) =>(
      <Link to={`/article/${article.slug}`} key={article.id} >
        <div className="w-full mt-3 mb-3">
          <div
            className="w-full border border-slate-400 shadow-lg flex mt-4 relative bg-white/10 backdrop-blur-none  rounded-md 
      hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-linear hover:bg-white/10 hover:backdrop-blur-md"
          >
            {/* Gambar */}
            <div className="w-[200px] sm:w-[220px] md:w-[250px] lg:w-[320px] aspect-[4/3] overflow-hidden flex-shrink-0 rounded-l-md">
              <img
                src={article.thumbnail} alt={article.title}
                className="w-full h-full object-cover"
                width="640"
                height="480"
              />
            </div>

            {/* Konten */}
            <div className="w-full ml-4 pr-2 py-2 relative">
              <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl font-poppins text-white">
                {article.title}
              </h2>
              <p className="text-slate-200 text-sm mt-2 max-w-[270px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-xl xl:max-w-2xl font-poppins ">
                {article.excerpt}
              </p>

              {/* Footer */}
              <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xs text-sky-400 font-semibold">
                <span className="hidden md:block">{article.author}</span>
                <span className="hidden md:block bg-green-600 text-white px-2.5 py-0.5 rounded-sm">
                  {article.category}
                </span>
              </div>
              <div className="hidden sm:block absolute bottom-2 right-2 text-xs text-gray-50 ">
                {article.date}
              </div>
            </div>
          </div>
        </div>
      </Link>
      )
    )}
    </div>
  );
};

export default ListArticle;
