import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-[#111827] text-white shadow-md sticky top-0 left-0 z-30 flex items-center justify-between px-6">
      {/* Logo Section */}
      <div>
        <Link to="/dashboard">
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">MSASTORE</h1>
        </Link>
      </div>
  
      {/* Navigation Icons */}
      <div className="flex items-center">
        <div className="flex items-center space-x-5">
          {/* Coupon Icon */}
          <Link to="/dashboard-coupouns" className="hidden 800px:block">
            <AiOutlineGift
              color="#fff"
              size={30}
              className="mx-3 cursor-pointer hover:text-red-500 transition-colors duration-300"
            />
          </Link>
          
          {/* Offer Icon */}
          <Link to="/dashboard-events" className="hidden 800px:block">
            <MdOutlineLocalOffer
              color="#fff"
              size={30}
              className="mx-3 cursor-pointer hover:text-red-500 transition-colors duration-300"
            />
          </Link>
          
          {/* Shopping Bag Icon */}
          <Link to="/dashboard-products" className="hidden 800px:block">
            <FiShoppingBag
              color="#fff"
              size={30}
              className="mx-3 cursor-pointer hover:text-red-500 transition-colors duration-300"
            />
          </Link>
          
          {/* Orders Icon */}
          <Link to="/dashboard-orders" className="hidden 800px:block">
            <FiPackage
              color="#fff"
              size={30}
              className="mx-3 cursor-pointer hover:text-red-500 transition-colors duration-300"
            />
          </Link>
          
          {/* Messages Icon */}
          <Link to="/dashboard-messages" className="hidden 800px:block">
            <BiMessageSquareDetail
              color="#fff"
              size={30}
              className="mx-3 cursor-pointer hover:text-red-500 transition-colors duration-300"
            />
          </Link>
          
          {/* Seller Avatar */}
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt="Seller Avatar"
              className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer border-2 border-white hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
  
};

export default DashboardHeader;
