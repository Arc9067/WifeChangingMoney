import React from "react";
import Buy from "../assets/buy.gif";

const Roadmap = () => {
  return (
    <section className="py-[50px] w-full roadmap">
      <div className="container flex justify-center flex-col items-center">
        <h1 className="font-Sigmar text-5xl md:text-6xl text-center uppercase bg-black p-3">
          roadmap
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <article className="flex flex-col gap-2 bg-black p-7 text-center">
            <h1 className="text-3xl font-Sigmar">PAMP! PAMP!! PAMP!!!</h1>
          </article>
        </div>
        <img src={Buy} alt="" className="block mt-5 w-full lg:w-6/12" />
      </div>
    </section>
  );
};

export default Roadmap;
