import React from "react";
import { FunnelX } from "lucide-react";

const ArticleFilter = ({
  kategoriOptions,
  selectedCategory,
  searchTerm,
  isFilterActive,
  onCategoryChange,
  onSearchChange,
  onResetFilters,
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
        placeholder="Cari artikel..."
        className="item-center bg-transparent text-white border border-white rounded-lg py-2 px-3 focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-80 w-full sm:w-1/2 "
      />
    </div>
  );
};

export default ArticleFilter;
