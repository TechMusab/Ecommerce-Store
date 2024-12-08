import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-[#111827] text-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* Single Item */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      {/* Orders */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      {/* Products */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage
            size={30}
            color={`${active === 3 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      {/* Create Product */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-create-product" className="w-full flex items-center">
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 4 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      {/* Events */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>

      {/* Create Event */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            color={`${active === 6 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div>

      {/* Withdraw Money */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-withdraw-money" className="w-full flex items-center">
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>

      {/* Shop Inbox */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            color={`${active === 8 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>

      {/* Discount Codes */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            color={`${active === 9 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>

      {/* Refunds */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 10 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>

      {/* Settings */}
      <div className="w-full flex items-center p-4 hover:bg-gray-800 transition duration-200 ease-in-out">
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings
            size={30}
            color={`${active === 11 ? "crimson" : "#fff"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-crimson" : "text-[#ddd]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};


export default DashboardSideBar;
