import React from "react";
import ListArticle from "../components/ListArticle";


const Article = () => {
  return (
    <>
      {/* Section Atas Start */}
      <div className="w-full pt-14 flex flex-col items-center justify-center">
        <div className="text-center font-bold text-white lg:text-4xl text-xl sm:text-2xl md:text-3xl shadow-sm">
          Article Technology
        </div>

        <p
          className="text-white mt-4 mb-8 text-xs md:text-base lg:text-base shadow-sm "
        >
          <div
            className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white 
          inline-block text-center w-[20ch] px-5 "
          >
            Read and Review Technology Information Right Now!!
          </div>
        </p>
      </div>

      <ListArticle />
      {/* Section Atas End */}

      
    </>
  );
};

export default Article;
