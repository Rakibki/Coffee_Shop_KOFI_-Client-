import React from "react";
import client from "../../assets/imges/client.avif";

const Client_section = () => {
  return (
    <div className="carousel flex justify-center h-screen w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="p-16">
          <h2 className="text-3xl text-center">What Client Says</h2>
          <p className="text-center mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="flex justify-center">
            <img className="rounded-full mb-6" src={client} alt="" />
          </div>
          <div>
            <p className="text-center">
              I've been drinking coffee for years and I can honestly say that
              coffee is the best product out there. <br /> Coffee has a perfect taste
              and it wakes me up in the morning. It's also really affordable.
            </p>
            <h2 className="text-base text-center mt-10 font-semibold uppercase text-[#333333]">Hester Perkins</h2>
          </div>
        </div>
        <div className="absolute flex flex-col transform -translate-y-1/2 gap-4 right-5 top-1/2">
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

export default Client_section;
