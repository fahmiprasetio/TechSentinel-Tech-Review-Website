import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryFilterButton from "../components/ButtonFilter";

const Riview = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const [searchParams, setSearchParams] = useSearchParams();

  // Ambil data produk sekali
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchData();
  }, []);

  // Jalankan filtering setiap kali data atau query berubah
  useEffect(() => {
    const categoryParam = searchParams.get("category") || "All";
    setActiveCategory(categoryParam);

    if (categoryParam === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === categoryParam));
    }
  }, [data, searchParams]);

  const handleFilter = (category) => {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="py-14 px-4 min-h-screen bg-fixed  bg-center" style={{ backgroundImage: "url('/bg-riviw.svg')" }}>
      <CategoryFilterButton
        categories={categories}
        activeCategory={activeCategory}
        onClick={handleFilter}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredData.map((item, index) => (
          <ProductCard
            key={index}
            title={item.name}
            description={item.description}
            image={item.image}
            category={item.category}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Riview;
