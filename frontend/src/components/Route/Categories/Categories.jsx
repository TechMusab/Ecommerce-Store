import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
    {/* Branding Section */}
    <div className={`${styles.section} hidden sm:block`}>
      <div
        className={`branding my-12 flex justify-between w-full shadow-lg  p-5 rounded-md`}
      >
        {brandingData &&
          brandingData.map((i, index) => (
            <div className="flex items-start text-white" key={index}>
              {i.icon}
              <div className="px-3">
                <h3 className="font-extrabold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {i.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {i.Description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  
    {/* Categories Section */}
    <div
      className={`${styles.section} bg-gray-900 p-6 rounded-lg mb-12`}
      id="categories"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 my-4 mx-auto">
        Explore Categories
      </h2>
      <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
        {categoriesData &&
          categoriesData.map((i) => {
            const handleSubmit = (i) => {
              navigate(`/products?category=${i.title}`);
            };
            return (
              <div
                className="w-full h-[120px] flex items-center justify-between cursor-pointer overflow-hidden bg-gray-800 rounded-md p-4 hover:scale-105 hover:shadow-lg transition-transform duration-300"
                key={i.id}
                onClick={() => handleSubmit(i)}
              >
                <h5 className="text-[20px] leading-[1.3] font-bold text-gray-300 hover:text-white">
                  {i.title}
                </h5>
                <img
                  src={i.image_Url}
                  className="w-[100px] object-cover rounded-md"
                  alt={i.title}
                />
              </div>
            );
          })}
      </div>
    </div>
  </>
  
  
  );
};

export default Categories;
