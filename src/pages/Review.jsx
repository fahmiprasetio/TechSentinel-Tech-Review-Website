import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilterButton from "../components/ButtonFilter";

const Riview = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const result = await res.json();
        setData(result);
        setFilteredData(result); // default: semua
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === category));
    }
  };

  // Ambil daftar kategori unik dari data
  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="px-4">
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
          />
        ))}
      </div>
    </div>
  );
};

export default Riview;
