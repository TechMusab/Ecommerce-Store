import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

    return (
      <div className="w-full h-[80px] bg-[#1a1a1a] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
        <div>
          <Link to="/">
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">MSASTORE</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Link to="/dashboard/coupons" className="800px:block hidden">
              <AiOutlineGift
                color="#fff"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-events" className="800px:block hidden">
              <MdOutlineLocalOffer
                color="#fff"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-products" className="800px:block hidden">
              <FiShoppingBag
                color="#fff"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-orders" className="800px:block hidden">
              <FiPackage
                color="#fff"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <Link to="/dashboard-messages" className="800px:block hidden">
              <BiMessageSquareDetail
                color="#fff"
                size={30}
                className="mx-5 cursor-pointer"
              />
            </Link>
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover border-2 border-[#555]"
            />
          </div>
        </div>
      </div>
    );
}

export default AdminHeader