import React from "react";
import { useParams } from "react-router-dom";
import ContentArticle from "../components/ContentArticle";

const DetailArticle = () => {
  const { slug } = useParams(); // Ambil slug dari URL

  return (
    <div>
      <ContentArticle slug={slug} />
    </div>
  );
};

export default DetailArticle;
