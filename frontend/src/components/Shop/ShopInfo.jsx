import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ShopInfo = ({ isOwner }) => {
  const [data,setData] = useState({});
  const {products} = useSelector((state) => state.products);
  const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
     setData(res.data.shop);
     setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [])
  

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings = products && products.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full py-5 bg-[#111827] text-white">
          {/* Profile Picture and Name */}
          <div className="w-full flex item-center justify-center mb-4">
            <img
              src={`${data.avatar?.url}`}
              alt="Profile"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
          </div>
          <h3 className="text-center py-2 text-[24px] font-semibold">{data.name}</h3>
          <p className="text-[16px] text-[#ffffffb3] p-[10px] flex items-center">
            {data.description}
          </p>
  
          {/* Address Section */}
          <div className="p-3 mt-4 border-t border-[#ffffff1a]">
            <h5 className="font-semibold text-[18px]">Address</h5>
            <h4 className="text-[#ffffffb3]">{data.address}</h4>
          </div>
  
          {/* Phone Number Section */}
          <div className="p-3 mt-4 border-t border-[#ffffff1a]">
            <h5 className="font-semibold text-[18px]">Phone Number</h5>
            <h4 className="text-[#ffffffb3]">{data.phoneNumber}</h4>
          </div>
  
          {/* Total Products Section */}
          <div className="p-3 mt-4 border-t border-[#ffffff1a]">
            <h5 className="font-semibold text-[18px]">Total Products</h5>
            <h4 className="text-[#ffffffb3]">{products && products.length}</h4>
          </div>
  
          {/* Shop Ratings Section */}
          <div className="p-3 mt-4 border-t border-[#ffffff1a]">
            <h5 className="font-semibold text-[18px]">Shop Ratings</h5>
            <h4 className="text-[#ffffffb3]">{averageRating}/5</h4>
          </div>
  
          {/* Joined On Section */}
          <div className="p-3 mt-4 border-t border-[#ffffff1a]">
            <h5 className="font-semibold text-[18px]">Joined On</h5>
            <h4 className="text-[#ffffffb3]">{data?.createdAt?.slice(0, 10)}</h4>
          </div>
  
          {isOwner && (
            <div className="py-3 px-4 mt-6">
              <Link to="/settings">
                <div className="w-full py-2 px-4 bg-[#3a24db] rounded-[5px] text-center cursor-pointer mb-3">
                  <span className="text-white">Edit Shop</span>
                </div>
              </Link>
              <div
                className="w-full py-2 px-4 bg-[#db243a] rounded-[5px] text-center cursor-pointer"
                onClick={logoutHandler}
              >
                <span className="text-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
  
};

export default ShopInfo;
