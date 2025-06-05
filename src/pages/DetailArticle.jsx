// src/pages/DetailArticle.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContentArticle from '../components/ContentArticle'; // Sesuaikan path jika perlu

const DetailArticle = () => {
  const { slug } = useParams();
  const [articleId, setArticleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const API_URL = import.meta.env.VITE_API_URL;
    const fetchArticleIdBySlug = async () => {
      if (!slug) {
        setError("Slug artikel tidak ditemukan di URL.");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        // Fetch ini hanya untuk menemukan ID artikel saat ini
        const response = await fetch(`${API_URL}/articles`);
        if (!response.ok) {
          throw new Error(`Gagal mengambil daftar artikel (status: ${response.status})`);
        }
        const articlesData = await response.json();
        if (!articlesData.success || !Array.isArray(articlesData.data)) {
          throw new Error("Format data daftar artikel tidak sesuai dari API.");
        }
        
        const foundArticle = articlesData.data.find(art => art.slug === slug);

        if (foundArticle && foundArticle.id) {
          setArticleId(foundArticle.id);
        } else {
          setError(`Artikel dengan slug "${slug}" tidak ditemukan.`);
        }
      } catch (err) {
        console.error("Error fetching article ID by slug:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleIdBySlug();
  }, [slug]);

  if (loading) {
    return <div className="text-white text-center mt-10 p-6">Mencari artikel...</div>;
  }

  if (error) {
    return <div className="text-white text-center mt-10 p-6">Error: {error}</div>;
  }

  if (!articleId) {
    return <div className="text-white text-center mt-10 p-6">Artikel utama tidak dapat ditemukan.</div>;
  }

  // ContentArticle hanya menerima slug dan id
  return <ContentArticle slug={slug} id={articleId} />;
};

export default DetailArticle;