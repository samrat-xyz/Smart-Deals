import React from "react";
import leftHero from "../../assets/bg-hero-left.png";
import rightHero from "../../assets/bg-hero-right.png";
import { FaSearch } from "react-icons/fa";

function Banner() {
  return (
    <div className="relative w-full h-[600px] sm:h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#9F62F2] to-[#E0F8F5]">
      {/* Left Image */}
      <img
        src={leftHero}
        alt="Left Decoration"
        className="absolute left-0 top-0 h-full object-contain opacity-90"
      />

      {/* Right Image */}
      <img
        src={rightHero}
        alt="Right Decoration"
        className="absolute right-0 top-0 h-full object-contain opacity-90"
      />

      {/* Text Overlay */}
      <div className="relative z-10 text-center max-w-6xl px-4 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold  drop-shadow-lg leading-snug">
          Deal your <span className="primary-color">Products</span> <br />
          in a <span className="primary-color">Smart</span> way!
        </h1>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search Box */}
        <div className="flex w-full max-w-2xl mx-auto  rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search for Products, Categories..."
            className="flex-grow px-4 py-3 focus:outline-none bg-white"
          />
          <button className="btn-primary text-white px-6 flex items-center justify-center  transition">
            <FaSearch />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button className="btn-primary text-white px-6 py-3 rounded-full cursor-pointer">
            Watch All Products
          </button>
          <button className="border border-btn-primery text-primary px-6 py-3 rounded-full cursor-pointer">
            Post a Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
