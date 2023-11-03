import React from "react";
import banner1 from "../../assets/imges/slider_1.webp";
import banner2 from "../../assets/imges/slider_2.webp";
import banner3 from "../../assets/imges/slider_3.webp";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="carousel bg-[#f1f1f1] h-screen w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="absolute top-3 right-8 w-[600px]" />
        <div className="mt-24 ml-24">
          <p className="text-[#333333] mb-4 text-2xl">Black coffee is awesome.</p>
          <h2 className="text-[#323232] mb-6 font-bold text-6xl">TIME DISCOVER <br /> COFFEE HOUSE</h2>
          <p className="text-[#333333] text-lg mb-4">
            Experience the decibels like your ears deserve to. Safe for <br />{" "}
            the ears, very for the heart. A treat to your ears.
          </p>
          <button className="bg-[#c7a17a] text-white gap-2 text-xl px-6 py-3 rounded-full flex items-center capitalize">
            <p>Explore More</p>
            <AiOutlineShoppingCart className="text-2xl" />
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
