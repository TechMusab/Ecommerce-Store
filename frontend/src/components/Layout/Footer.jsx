import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Subscription Section */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-800 py-8">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-bold md:w-2/5">
          Stay Updated with <span className="text-teal-400">Our Latest News</span>{" "}
          <br />
          and Exclusive Offers!
        </h1>
        <div>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="text-gray-800
                  sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-3 rounded px-3 focus:outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-6 py-3 rounded-md text-white md:w-auto w-full font-semibold">
            Subscribe Now
          </button>
        </div>
      </div>
  
      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:px-8 px-5 py-16 sm:text-center">
        {/* Branding Section */}
        <div className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="logo.svg"
            alt="Brand Logo"
            style={{ filter: "brightness(0) invert(1)", maxWidth: "150px" }}
          />
          <p className="mt-4 text-gray-400">
            Discover the tools and resources you need to create remarkable
            products and experiences.
          </p>
          <div className="flex items-center mt-4">
            <AiFillFacebook size={25} className="cursor-pointer hover:text-teal-400 transition" />
            <AiOutlineTwitter size={25} className="ml-4 cursor-pointer hover:text-teal-400 transition" />
            <AiFillInstagram size={25} className="ml-4 cursor-pointer hover:text-teal-400 transition" />
            <AiFillYoutube size={25} className="ml-4 cursor-pointer hover:text-teal-400 transition" />
          </div>
        </div>
  
        {/* Company Links */}
        <div>
          <h1 className="mb-4 font-bold text-lg text-teal-400">About Us</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index} className="list-none">
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                     text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </div>
  
        {/* Shop Links */}
        <div>
          <h1 className="mb-4 font-bold text-lg text-teal-400">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index} className="list-none">
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                     text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </div>
  
        {/* Support Links */}
        <div>
          <h1 className="mb-4 font-bold text-lg text-teal-400">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index} className="list-none">
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                     text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
  
      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-6 text-gray-400 text-sm pb-8 border-t border-gray-700">
        <span>© 2024 MSASTORE. All rights reserved.</span>
        <span>
          <Link to="/terms" className="hover:text-teal-400 transition">
            Terms
          </Link>{" "}
          ·{" "}
          <Link to="/privacy" className="hover:text-teal-400 transition">
            Privacy Policy
          </Link>
        </span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment Methods"
            className="w-full max-w-[200px]"
          />
        </div>
      </div>
    </div>
  );
  
};

export default Footer;
