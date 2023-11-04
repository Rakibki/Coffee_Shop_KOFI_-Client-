import React from "react";
import { Link, NavLink } from "react-router-dom";



const Product = ({ item }) => {
  return (
    <div className="card-compact border-2">
      <figure>
        <img src={item.img} alt="coffee" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <NavLink to={`/productDetails/${item._id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
