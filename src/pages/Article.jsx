import React from "react";
import ListArticle from "../components/ListArticle";
import { useState,useEffect } from "react";


const Article = () => {
  const [articles, setArticles] = useState([]);
   useEffect(()=>{
    const fetchArticles = async () =>{
      try{
        const response = await fetch("http://localhost:5000/articles");
        if(!response.ok){
        throw new Error("Gagal mengambil data");
      }
      const data = await response.json();
      setArticles(data)
      } catch(err){
        console.err("Terjadi kesalahan saat fetch:",err);
      }
    };
    fetchArticles();
   },[]);
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

      <ListArticle articles={articles} />
      {/* Section Atas End */}

      
    </>
  );
};

export default Article;
