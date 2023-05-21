import React from "react";

const Chart = () => {
  return (
    <section className="py-[50px] w-full chart">
      <div className="container flex justify-center flex-col items-center">
        <h1 className="font-Sigmar text-5xl md:text-6xl text-center uppercase">
          tokenomics
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <article className="flex flex-col gap-2 bg-black p-7 text-center">
            <h1 className="text-3xl font-Sigmar">1,000,000,000</h1>
            <h2 className="font-Sigmar capitalize text-2xl">supply</h2>
          </article>
          <article className="flex flex-col gap-2 bg-black p-7 text-center">
            <h1 className="text-3xl font-Sigmar">0% </h1>
            <h2 className="font-Sigmar capitalize text-2xl">buy tax</h2>
          </article>
          <article className="flex flex-col gap-2 bg-black p-7 text-center">
            <h1 className="text-3xl font-Sigmar">0%</h1>
            <h2 className="font-Sigmar capitalize text-2xl">sell tax</h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Chart;
