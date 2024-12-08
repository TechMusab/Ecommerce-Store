import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const {allProducts} = useSelector((state) => state.products);
   
  return (
    <div className="w-full py-12 bg-gray-900">
    <div className={`${styles.section}`}>
      <div className={`${styles.heading} text-center`}>
        <h1 className=" text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Featured Products</h1>
      </div>
      <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[25px] mt-8">
        {allProducts && allProducts.length !== 0 ? (
          allProducts.map((i, index) => <ProductCard data={i} key={index} />)
        ) : (
          <p className="text-white text-center col-span-full">No featured products available at the moment.</p>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default FeaturedProduct;
