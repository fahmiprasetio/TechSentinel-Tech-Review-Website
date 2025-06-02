import React from "react";
import { FunnelX } from "lucide-react";

const ArticleFilter = ({
  kategoriOptions,
  selectedCategory,
  searchTerm,
  isFilterActive,
  onCategoryChange,
  onSearchChange,
  onSearchKeyDown,
  onResetFilters,
  onSearchSubmit,
}) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-6 w-full">
      <div className="flex flex-wrap gap-2">
        {kategoriOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onCategoryChange(option.value)}
            className={`px-4 py-2 rounded-md border text-sm transition ${
              selectedCategory === option.value
                ? "bg-green-500 border-green-400 text-white"
                : "bg-transparent border-white text-white hover:bg-green-600"
            }`}
          >
            {option.name}
          </button>
        ))}

        {isFilterActive && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-red-400 text-red-400 hover:bg-red-600 hover:text-white text-sm"
            title="Reset Filter"
          >
            <FunnelX size={16} />
            Reset
          </button>
        )}
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyDown={onSearchKeyDown}
        placeholder="Cari artikel..."
        className="item-center bg-transparent text-white border border-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-80 w-full sm:w-1/2 "
      />
      <button onClick={onSearchSubmit}  className="flex items-center gap-2 px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black text-sm">
             
        {/* SVG Ikon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Cari
      </button>
    </div>
  );
};

export default ArticleFilter;
