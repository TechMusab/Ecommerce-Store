import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);
  

  return (
<div>
  <div className={`${styles.section} bg-gray-900 p-6 rounded-lg`}>
    {/* Heading Section */}
    <div className={`${styles.heading} mb-8 text-center`}>
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Best Deals
      </h1>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
      {data && data.length !== 0 ? (
        data.map((i, index) => (
          <ProductCard
            data={i}
            key={index}
            className="bg-gray-800 rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))
      ) : (
        <div className="text-center text-gray-400 font-medium">
          No products available.
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default BestDeals;
