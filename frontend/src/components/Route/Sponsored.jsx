import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
    className={`${styles.section} hidden sm:block bg-black-900 py-10 px-5 mb-12 cursor-pointer rounded-xl shadow-lg`}
  >
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md hover:shadow-xl transition-shadow">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
          alt="Sony Logo"
          style={{ width: "150px", objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md hover:shadow-xl transition-shadow">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
          alt="Dell Logo"
          style={{ width: "150px", objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md hover:shadow-xl transition-shadow">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png"
          alt="LG Logo"
          style={{ width: "150px", objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md hover:shadow-xl transition-shadow">
        <img
          src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
          alt="Apple Logo"
          style={{ width: "150px", objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md hover:shadow-xl transition-shadow">
        <img
          src="bg.jpg"
          alt="Custom Logo"
          style={{ width: "150px", objectFit: "contain" }}
        />
      </div>
    </div>
  </div>
  
  );
};

export default Sponsored;
