import React from "react";

const CategoryFilterButton = ({ categories, activeCategory, onClick }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-start my-4">
      <button
        className={` btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg  ${
          activeCategory === "All" ? "bg-blue-600 text-white" : ""
        }`}
        onClick={() => onClick("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={` btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg ${
            activeCategory === category ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterButton;
