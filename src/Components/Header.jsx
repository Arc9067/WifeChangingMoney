import React from "react";
import Logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header className=" w-full py-2 absolute top-0 z-50">
      <div className="container font-Sigmar ">
        <div className="head flex items-center justify-between">
          <a href="" className="flex items-center text-white">
            <img src={Logo} alt="logo" className="w-[5rem] " />
            <h1 className="flex items-center text capitalize text-xl">
              WifeChanging
              <br />
              Money
            </h1>
          </a>
          <a
            href=""
            className="bg-secondary hidden md:block duration-150 hover:bg-primary py-3 px-5 rounded-full capitalize"
          >
            buy now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
