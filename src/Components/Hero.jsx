import React from "react";
import Logo from "../assets/logo.png";
import Telegram from "../assets/telegram.png";
import Twitter from "../assets/twitter.png";
import Des from "../assets/des.png";
import Uniswap from "../assets/uniswap.png";

const Hero = () => {
  function Copy() {
    navigator.clipboard.writeText("00000000000000000000000000");
    alert("Contract Copied");
  }
  return (
    <section className="min-h-screen flex justify-center items-center w-full bg-white text-black hero pt-[100px]">
      <div className="container grid justify-center items-center flex-col h-full gap-8">
        <div className="z-10 text-center flex flex-col gap-3 justify-center">
          <h1 className="text-7xl font-Sigmar stroke-1 capitalize max-w-xl text-center mx-auto">
            Wife Changing Money $WCM
          </h1>
          <h2 className="font-Gurajada  text-2xl text-center max-w-md mx-auto">
            Step aside, boring finance! Say hello to "Wife Changing Money"
            (WCM), the coolest token on the Ethereum block.
          </h2>
          <h2 className="font-Sigmar text-3xl break-words " onClick={Copy}>
            Contract
            <span className="block font-Gurajada">
              00000000000000000000000000
            </span>
          </h2>
          <div className="flex mx-auto mt-4 gap-4 flex-wrap justify-center items-center">
            <a href="">
              <img
                src={Telegram}
                alt=""
                className="max-w-[5rem] bg-white p-3 rounded-full"
              />
            </a>
            <a href="">
              <img
                src={Twitter}
                alt=""
                className="max-w-[5rem]  bg-white p-3 rounded-full"
              />
            </a>
            <a href="">
              <img
                src={Uniswap}
                alt=""
                className="max-w-[5rem]  bg-white p-3 rounded-full"
              />
            </a>
            <a href="">
              <img src={Des} alt="" className="max-w-[5rem] rounded-full" />
            </a>
          </div>
        </div>

        {/* <img
          src={Logo}
          alt="logo"
          className="absolute max-w-full right-0 bottom-0 opacity-50"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
