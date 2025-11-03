import React from "react";
import { Link } from "react-router";

function ProductsCard({ product }) {
  return (
    <div className="card bg-base-100 w-96 shadow-md">
      <figure className="p-4">
        <img
          src={product.image}
          alt="Shoes"
          className="h-46 "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {product.description}
        </p>
       <Link to={`/products-details/${product._id}`} className="border p-2 border-primary-color primary-color font-semibold cursor-pointer">
        <span  >View Details</span>
       </Link>
      </div>
    </div>
  );
}

export default ProductsCard;
