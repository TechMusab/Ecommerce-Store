import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-md">
    {categoriesData &&
      categoriesData.map((i, index) => (
        <div
          key={index}
          className="flex items-center p-2 hover:bg-[#f7f7f7] cursor-pointer rounded-md transition-all duration-300"
          onClick={() => submitHandle(i)}
        >
          <img
            src={i.image_Url}
            alt={i.title}
            className="w-[25px] h-[25px] object-contain mr-3"
            style={{ userSelect: "none" }}
          />
          <h3 className="m-0 select-none text-[#333] text-[16px] font-medium hover:text-[#f63b60]">
            {i.title}
          </h3>
        </div>
      ))}
  </div>
  
  );
};

export default DropDown;
