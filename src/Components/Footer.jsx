import React from "react";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import Uniswap from "../assets/uniswap.png";
import Des from "../assets/des.png";

const Footer = () => {
  return (
    <footer className="py-[20px] w-full bg-black">
      <div className="container flex justify-center items-center">
        <div className="flex mx-auto mt-4 gap-4 flex-wrap justify-center items-center">
          <a href="">
            <img
              src={Telegram}
              alt=""
              className="max-w-[3rem] bg-white p-3 rounded-full"
            />
          </a>
          <a href="">
            <img
              src={Twitter}
              alt=""
              className="max-w-[3rem]  bg-white p-3 rounded-full"
            />
          </a>
          <a href="">
            <img
              src={Uniswap}
              alt=""
              className="max-w-[3rem]  bg-white p-3 rounded-full"
            />
          </a>
          <a href="">
            <img src={Des} alt="" className="max-w-[3rem] rounded-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
