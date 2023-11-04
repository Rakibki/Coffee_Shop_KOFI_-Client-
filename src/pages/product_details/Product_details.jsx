import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Section_Title from "../../shared/section_title/Section_Title";
import { AiOutlineHeart } from "react-icons/ai";

const Product_details = () => {
  const [count, setCount] = useState(1);
  const product = useLoaderData();
  return (
    <div>
      <Section_Title>Home / {product.title}</Section_Title>
      <div className="flex gap-5">
        <div className="flex-1 border-2">
          <div>
            <img src={product.img} alt="" />
          </div>
        </div>
        <div className="flex-1 p-6">
          <div>
            <h1 className="text-2xl">{product.title}</h1>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-[#c7a17a]">
                {product.discount_Price}
              </h2>
              <h2 className="text-xl line-through	 font-semibold">
                {product.regulaer_price}
              </h2>
            </div>
            <p>SKU: 1510</p>
            <p>Availability: {product.Availability} left in stock</p>
            <p>Manufacturing: 2021 / 11 / 11</p>
            <div>
              <p>{product.description}</p>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <div className="flex items-center gap-2 px-4 py-3 border-2">
                <h1>+</h1>
                <p>{count}</p>
                <h1>-</h1>
              </div>
              <div>
                <button className="px-5 font-semibold bg-[#1f2226] hover:bg-[#c7a17a] text-white py-4">
                  ADD TO CARD
                </button>
              </div>
              <div>
                <AiOutlineHeart className="text-3xl" />
              </div>
            </div>
            <div className="mt-6">
              <Link to={`/check_out/${product._id}`}>
                <button className="px-16 text-lg font-semibold  bg-[#1f2226] hover:bg-[#c7a17a] text-white py-4">
                  Buy it now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_details;
