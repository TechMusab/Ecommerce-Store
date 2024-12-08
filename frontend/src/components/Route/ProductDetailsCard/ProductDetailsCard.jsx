import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";

const ProductDetailsCard = ({ setOpen, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  //   const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <div className="bg-gray-900 text-white">
      {data ? (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-auto 800px:h-[75vh] bg-gray-800 rounded-lg shadow-2xl relative p-6">
            {/* Close Button */}
            <RxCross1
              size={30}
              className="absolute right-4 top-4 cursor-pointer text-gray-300 hover:text-gray-100 transition-colors"
              onClick={() => setOpen(false)}
            />
  
            <div className="flex flex-col 800px:flex-row gap-6">
              {/* Product Image Section */}
              <div className="w-full 800px:w-1/2">
                <img
                  src={`${data.images && data.images[0]?.url}`}
                  alt="Product"
                  className="w-full h-auto rounded-md shadow-md"
                />
  
                <div className="flex items-center mt-5 gap-3">
                  <Link
                    to={`/shop/preview/${data.shop._id}`}
                    className="flex items-center"
                  >
                    <img
                      src={`${data.images && data.images[0]?.url}`}
                      alt="Shop Logo"
                      className="w-[50px] h-[50px] rounded-full shadow-md"
                    />
                    <div className="ml-3">
                      <h3 className="text-teal-400 font-semibold text-lg">
                        {data.shop.name}
                      </h3>
                      <h5 className="text-sm text-gray-400">
                        {data?.ratings} Ratings
                      </h5>
                    </div>
                  </Link>
                </div>
  
                <button
                  className="mt-5 bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300"
                  onClick={handleMessageSubmit}
                >
                  <span className="flex items-center">
                    Send Message <AiOutlineMessage className="ml-2" />
                  </span>
                </button>
  
                <p className="text-red-400 text-sm mt-4">(50) Sold out</p>
              </div>
  
              {/* Product Details Section */}
              <div className="w-full 800px:w-1/2">
                <h1 className="text-2xl font-bold text-teal-400 mb-3">
                  {data.name}
                </h1>
                <p className="text-gray-300 mb-4">{data.description}</p>
  
                {/* Pricing */}
                <div className="flex items-center mb-4">
                  <h4 className="text-2xl font-bold text-teal-400">
                    {data.discountPrice}$
                  </h4>
                  {data.originalPrice && (
                    <h4 className="text-lg text-gray-400 line-through ml-4">
                      {data.originalPrice}$
                    </h4>
                  )}
                </div>
  
                {/* Quantity Selector */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <button
                      className="bg-gray-700 text-white px-4 py-2 rounded-l-md hover:bg-gray-600 transition duration-300"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-800 text-white px-6 py-2">
                      {count}
                    </span>
                    <button
                      className="bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-gray-600 transition duration-300"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
  
                  {/* Wishlist */}
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer text-red-500"
                        onClick={() => removeFromWishlistHandler(data)}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                        onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
  
                {/* Add to Cart */}
                <button
                  className="bg-teal-500 text-white font-bold py-2 px-6 rounded-md hover:bg-teal-600 transition duration-300 w-full"
                  onClick={() => addToCartHandler(data._id)}
                >
                  <span className="flex items-center justify-center">
                    Add to Cart <AiOutlineShoppingCart className="ml-2" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
  
  
};

export default ProductDetailsCard;
