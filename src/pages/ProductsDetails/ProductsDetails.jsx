import React, { use, useState } from "react";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function ProductsDetails() {
  const productDetail = useLoaderData();
  
  const { user } = use(AuthContext);
 
  const handleBid = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const email = e.target.email.value
    const price = e.target.price.value
    const bid = {
      product : productDetail._id,
      buyer_name:name,
      buyer_email:email,
      bid_price:price,
      status : "Pending"

    }
    fetch("http://localhost:3030/bids",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bid)
    })
    .then(res => res.json())
    .then(data =>console.log("After Submite Data",data))

  };
  return (
    <div className="max-w-6xl mx-auto py-10 px-5 grid md:grid-cols-2 gap-8">
      {/* Left Section: Image + Description */}
      <div>
        {/* Product Image */}
        <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Description */}
        <div className="bg-white shadow-md rounded-xl mt-6 p-5">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2 text-gray-800">
            Product Description
          </h3>

          <div className="flex justify-between text-sm text-purple-600 mb-2">
            <p>
              <span className="font-semibold text-gray-800">Condition:</span>{" "}
              {productDetail.condition}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Usage Time:</span>{" "}
              {productDetail.usage}
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            {productDetail.description}
          </p>
        </div>
      </div>

      {/* Right Section: Product Info + Seller Info */}
      <div>
        {/* Back Button */}
        <Link
          to="/products"
          className="text-sm text-gray-500 hover:text-purple-600 flex items-center mb-4"
        >
          ← Back To Products
        </Link>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {productDetail.title}
        </h2>

        {/* Category tag */}
        <div className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full mb-4">
          {productDetail.category}
        </div>

        {/* Price Card */}
        <div className="bg-white shadow-md rounded-xl p-5 mb-5">
          <p className="text-2xl font-bold text-green-600 mb-1">
            ৳{productDetail.price_min} - {productDetail.price_max}
          </p>
          <p className="text-gray-500 text-sm">Price starts from</p>
        </div>

        {/* Product Details */}
        <div className="bg-white shadow-md rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-gray-800 mb-2">Product Details</h3>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Product ID:</span>{" "}
            {productDetail._id}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Posted:</span>{" "}
            {new Date(productDetail.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Seller Info */}
        <div className="bg-white shadow-md rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-gray-800 mb-3">
            Seller Information
          </h3>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={productDetail.seller_image}
              alt={productDetail.seller_name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <h4 className="font-semibold text-gray-800">
                {productDetail.seller_name}
              </h4>
              <p className="text-sm text-gray-500">{productDetail.email}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Location:</span>{" "}
            {productDetail.location}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Contact:</span>{" "}
            {productDetail.seller_contact}
          </p>
          <p className="text-sm mt-2">
            <span className="font-medium text-gray-800">Status:</span>{" "}
            <span
              className={`${
                productDetail.status === "sold"
                  ? "text-red-500"
                  : "text-yellow-500"
              } font-semibold`}
            >
              {productDetail.status}
            </span>
          </p>
        </div>

        {/* Buy Button */}
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600 transition-all"
        >
          I Want Buy This Product
        </button>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* Modal */}
        {/* Modal */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Give Seller Your Offered Price
            </h3>

            {/* Offer Form */}
            <form onSubmit={handleBid} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Buyer Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Buyer Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    defaultValue={user.displayName}
                    className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Buyer Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Buyer Email
                  </label>
                  <input
                  name="email"
                    type="email"
                    defaultValue={user.email}
                    className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Offer Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Place your Price
                </label>
                <input
                name="price"
                  type="text"
                  placeholder="e.g. 25000"
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end items-center gap-3 mt-6">
                {/* Cancel button closes modal */}
                <button
                  type="button"
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className="px-5 py-2 rounded-lg border border-purple-500 text-purple-600 font-semibold hover:bg-purple-50 transition"
                >
                  Cancel
                </button>

                {/* Submit button (auto closes via method="dialog") */}
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-500 font-semibold hover:from-purple-700 hover:to-indigo-600 transition"
                >
                  Submit Bid
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default ProductsDetails;
