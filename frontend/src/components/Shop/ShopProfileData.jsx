import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import Ratings from "../Products/Ratings";
import { getAllEventsShop } from "../../redux/actions/event";

const ShopProfileData = ({ isOwner }) => {
  const { products } = useSelector((state) => state.products);
  const { events } = useSelector((state) => state.events);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    dispatch(getAllEventsShop(id));
  }, [dispatch]);

  const [active, setActive] = useState(1);

  const allReviews =
    products && products.map((product) => product.reviews).flat();

    return (
      <div className="w-full bg-[#111827] text-white p-5">
        {/* Navigation Tabs */}
        <div className="flex w-full items-center justify-between mb-4">
          <div className="flex">
            {/* Shop Products Tab */}
            <div className="flex items-center" onClick={() => setActive(1)}>
              <h5
                className={`font-semibold text-lg ${active === 1 ? "text-red-500" : "text-[#ccc]"} cursor-pointer pr-6 hover:text-white transition-all duration-300`}
              >
                Shop Products
              </h5>
            </div>
    
            {/* Running Events Tab */}
            <div className="flex items-center" onClick={() => setActive(2)}>
              <h5
                className={`font-semibold text-lg ${active === 2 ? "text-red-500" : "text-[#ccc]"} cursor-pointer pr-6 hover:text-white transition-all duration-300`}
              >
                Running Events
              </h5>
            </div>
    
            {/* Shop Reviews Tab */}
            <div className="flex items-center" onClick={() => setActive(3)}>
              <h5
                className={`font-semibold text-lg ${active === 3 ? "text-red-500" : "text-[#ccc]"} cursor-pointer pr-6 hover:text-white transition-all duration-300`}
              >
                Shop Reviews
              </h5>
            </div>
          </div>
    
          {/* Go to Dashboard Button (for owners) */}
          <div>
            {isOwner && (
              <Link to="/dashboard">
                <div className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded-md cursor-pointer text-center text-white font-semibold">
                  Go to Dashboard
                </div>
              </Link>
            )}
          </div>
        </div>
    
        {/* Content Based on Active Tab */}
        <br />
        {active === 1 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
            {products &&
              products.map((i, index) => (
                <ProductCard data={i} key={index} isShop={true} />
              ))}
          </div>
        )}
    
        {active === 2 && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
              {events &&
                events.map((i, index) => (
                  <ProductCard
                    data={i}
                    key={index}
                    isShop={true}
                    isEvent={true}
                  />
                ))}
            </div>
            {events && events.length === 0 && (
              <h5 className="w-full text-center py-5 text-lg">No Events for this shop!</h5>
            )}
          </div>
        )}
    
        {active === 3 && (
          <div className="w-full">
            {allReviews &&
              allReviews.map((item, index) => (
                <div className="w-full flex my-5 py-3 px-4 bg-[#333] rounded-md shadow-md">
                  <img
                    src={`${item.user.avatar?.url}`}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  <div className="pl-3">
                    <div className="flex w-full items-center">
                      <h1 className="font-semibold text-lg pr-2">{item.user.name}</h1>
                      <Ratings rating={item.rating} />
                    </div>
                    <p className="font-medium text-[#ccc]">{item?.comment}</p>
                    <p className="text-[#aaa] text-sm">{"2 days ago"}</p>
                  </div>
                </div>
              ))}
            {allReviews && allReviews.length === 0 && (
              <h5 className="w-full text-center py-5 text-lg">No Reviews for this shop!</h5>
            )}
          </div>
        )}
      </div>
    );
    
};

export default ShopProfileData;
