import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
  className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-opacity-80 bg-no-repeat ${styles.noramlFlex}`}
  style={{
    backgroundColor: "#111827",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
  }}
>
  <div className={`${styles.section} w-[90%] 800px:w-[60%] text-white`}>
    <h1
      className={`text-[35px] leading-[1.2] 800px:text-[60px] font-[600] capitalize`}
    >
      Transform Your Living Space <br /> with Elegance and Style
    </h1>
    <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffffcc]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
      assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
      quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
      <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
    </p>
    <Link to="/products" className="inline-block">
      <div
        className={`${styles.button} mt-5 bg-white text-black py-2 px-5 rounded-md hover:bg-gray-300`}
      >
        <span className="text-black font-[Poppins] text-[18px]">
          Shop Now
        </span>
      </div>
    </Link>
  </div>
</div>

  );
};

export default Hero;
