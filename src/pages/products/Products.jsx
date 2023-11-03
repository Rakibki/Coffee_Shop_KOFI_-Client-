import React, { useEffect, useState } from "react";
import Section_Title from "../../shared/section_title/Section_Title";
import useCustonAxios from "../../hooks/useCustonAxios";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
const Products = () => {
  const getAxios = useCustonAxios();
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/productcount")
    .then((res) => res.json())
    .then((data) => setTotalProduct(data.result))
  }, [])

  const [totalProducts, setTotalProduct] = useState(null)
  const [itemsPerPage, setItemPerPage] = useState(6)
  const pages = Math.ceil(totalProducts / itemsPerPage)
  const pagination = [...new Array(pages).keys()]
  const [cueentPage, setCurrent] = useState(0)

  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", cueentPage],
    queryFn: () => getAxios.get(`/api/v1/products?page=${cueentPage}&size=${itemsPerPage}`),
  });

  console.log(error);

  if (isPending) {
    return <p>loaddeing......</p>;
  }

  const handlePrev = () => {
   if(cueentPage>0) {
    setCurrent(cueentPage - 1)
   }
  }

  const handleNext = () => {
    if(cueentPage < pagination.length - 1) {
      setCurrent(cueentPage + 1)
    }
  }

  const activePageTyle = {
    backgroundColor: "#ff6162",
    color: "#fff"
  }

  return (
    <div>
      <Section_Title>Home / Products</Section_Title>

      <div className="grid grid-cols-4">
        <div>Filter Item</div>
        <div className="col-span-3">
          <div>Header.........</div>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.data.map((item) => (
              <Product key={item._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-10 mb-16">
            <div>
            <button onClick={handlePrev} className="btn hover:bg-[#ff6162] hover:text-white rounded-full bg-[#f6f6f6] mr-2"><BsChevronLeft /></button>
                {
                  pagination.map((item) => <button style={item === cueentPage ? activePageTyle : {}} onClick={() => setCurrent(item)} className="btn rounded-full bg-[#f6f6f6] mr-2">{item}</button>)
                }
                <button onClick={handleNext} className="btn hover:bg-[#ff6162] hover:text-white rounded-full bg-[#f6f6f6] mr-2"><BsChevronRight /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
