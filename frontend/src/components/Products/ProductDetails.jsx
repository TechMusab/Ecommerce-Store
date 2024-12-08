import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg =  totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);


  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  return (
    <div className="bg-[#111827] text-white min-h-screen m-10">
    {data ? (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="space-y-4">
            <img
              src={`${data && data.images[select]?.url}`}
              alt={data.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="flex space-x-2 overflow-x-auto">
              {data?.images.map((i, index) => (
                <img
                  key={index}
                  src={`${i?.url}`}
                  alt={`Product variant ${index + 1}`}
                  className={`h-20 w-20 object-cover rounded cursor-pointer transition-all duration-300 ${
                    select === index ? 'border-2 border-white' : 'opacity-70'
                  }`}
                  onClick={() => setSelect(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
              <h1 className="text-3xl font-bold text-white mb-2">{data.name}</h1>
              <p className="text-gray-300">{data.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h4 className="text-2xl font-semibold text-emerald-400">
                  ${data.discountPrice}
                </h4>
                {data.originalPrice && (
                  <h3 className="text-lg line-through text-gray-500">
                    ${data.originalPrice}
                  </h3>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-800 text-white p-2 rounded-l hover:bg-gray-700 transition"
                  onClick={decrementCount}
                >
                  -
                </button>
                <span className="bg-gray-700 text-white px-4 py-2">{count}</span>
                <button
                  className="bg-gray-800 text-white p-2 rounded-r hover:bg-gray-700 transition"
                  onClick={incrementCount}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition flex items-center"
                onClick={() => addToCartHandler(data._id)}
              >
                Add to Cart <AiOutlineShoppingCart className="ml-2" />
              </button>

              <div onClick={() => click ? removeFromWishlistHandler(data) : addToWishlistHandler(data)}>
                {click ? (
                  <AiFillHeart 
                    size={30} 
                    className="text-red-500 cursor-pointer" 
                    title="Remove from wishlist" 
                  />
                ) : (
                  <AiOutlineHeart 
                    size={30} 
                    className="text-white cursor-pointer hover:text-red-500 transition" 
                    title="Add to wishlist" 
                  />
                )}
              </div>
            </div>

            {/* Shop Information */}
            <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to={`/shop/preview/${data?.shop._id}`}>
                  <img
                    src={`${data?.shop?.avatar?.url}`}
                    alt="Shop Avatar"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </Link>
                <div>
                  <Link to={`/shop/preview/${data?.shop._id}`}>
                    <h3 className="text-xl font-semibold text-white">
                      {data.shop.name}
                    </h3>
                  </Link>
                  <h5 className="text-gray-400">
                    ({averageRating}/5) Ratings
                  </h5>
                </div>
              </div>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center"
                onClick={handleMessageSubmit}
              >
                Message <AiOutlineMessage className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Info Section */}
        <ProductDetailsInfo
          data={data}
          products={products}
          totalReviewsLength={totalReviewsLength}
          averageRating={averageRating}
        />
      </div>
    ) : null}
  </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#111827] rounded-lg p-6 mt-8">
      <div className="flex justify-between border-b border-gray-700 pb-4">
        {['Product Details', 'Product Reviews', 'Seller Information'].map((tab, index) => (
          <div 
            key={index} 
            className="relative cursor-pointer"
            onClick={() => setActive(index + 1)}
          >
            <h5 className={`text-xl font-semibold ${active === index + 1 ? 'text-white' : 'text-gray-500'}`}>
              {tab}
            </h5>
            {active === index + 1 && (
              <div className="absolute bottom-[-10px] left-0 w-full h-1 bg-emerald-500 rounded" />
            )}
          </div>
        ))}
      </div>

      {/* Existing tab content with dark theme styling */}
      {active === 1 && (
        <p className="text-gray-300 py-6 text-lg leading-relaxed">
          {data.description}
        </p>
      )}

      {active === 2 && (
        <div className="space-y-4 py-6">
          {data.reviews.length > 0 ? (
            data.reviews.map((review, index) => (
              <div key={index} className="flex space-x-4 bg-black/30 p-4 rounded-lg">
                <img
                  src={`${review.user.avatar?.url}`}
                  alt={review.user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-white">{review.user.name}</h4>
                    <Ratings rating={review.rating} />
                  </div>
                  <p className="text-gray-300 mt-2">{review.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No reviews for this product</p>
          )}
        </div>
      )}

      {active === 3 && (
        <div className="grid md:grid-cols-2 gap-6 py-6">
          <div>
            <Link to={`/shop/preview/${data.shop._id}`} className="flex items-center space-x-4">
              <img
                src={`${data?.shop?.avatar?.url}`}
                alt="Shop Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">{data.shop.name}</h3>
                <h5 className="text-gray-400">({averageRating}/5) Ratings</h5>
              </div>
            </Link>
            <p className="text-gray-300 mt-4">{data.shop.description}</p>
          </div>
          <div className="bg-black/30 p-6 rounded-lg">
            <div className="space-y-3">
              <h5 className="text-white">Joined on: <span className="text-gray-400">{data.shop?.createdAt?.slice(0, 10)}</span></h5>
              <h5 className="text-white">Total Products: <span className="text-gray-400">{products?.length || 0}</span></h5>
              <h5 className="text-white">Total Reviews: <span className="text-gray-400">{totalReviewsLength}</span></h5>
              <Link to="/" className="block mt-4">
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition">
                  Visit Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
