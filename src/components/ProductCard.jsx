import React from "react";

const ProductCard = ({ title, description, image }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-96 h-80" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
