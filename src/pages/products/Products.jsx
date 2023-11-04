import React, { useEffect, useState } from "react";
import Section_Title from "../../shared/section_title/Section_Title";
import useCustonAxios from "../../hooks/useCustonAxios";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import Loadding from "../../shared/Loadding/Loadding";
const Products = () => {
  const getAxios = useCustonAxios();
  const [totalProducts, setTotalProduct] = useState(null)

  useEffect(() => {
    getAxios.get("/api/v1/productcount/")
    .then((data) => setTotalProduct(data.data.result))
  }, [])

  const [itemsPerPage, setItemPerPage] = useState(6)
  const pages = Math.ceil(totalProducts / itemsPerPage)
  const [cueentPage, setCurrent] = useState(0)


  const pagination = [...new Array(pages).keys()]


  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", cueentPage],
    queryFn: () => getAxios.get(`/api/v1/products?page=${cueentPage}&size=${itemsPerPage}`),
  });


  if (isPending) {
    return <Loadding />
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
            {products.data.map((item, index) => (
              <Product key={index} item={item} />
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
