import React from "react";

const ProductCard = ({ title, description, image, category, date }) => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-md">
      <figure className="w-full h-64 rounded-t-lg">
        <img className=" w-full h-full object-fill " src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {title}
          <span className="badge badge-secondary ">NEW</span>
        </h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-between items-center mt-2">
          <div className="font-poppins">{date}</div>
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
