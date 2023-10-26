"use client";
import React from "react";
import Image from "next/image";

const Farms = () => {
  return (
    <div className="w-full min-h-screen bg-green px-24 flex items-center">
      <div className="grid grid-cols-2 gap-20">
        <div className="col-span-1">
          <Image
            className="w-auto h-auto rounded-md"
            src="/farm.jpg"
            alt="Farm plants"
            width={800}
            height={800}
          />
        </div>
        <div className="col-span-1 text-white">
          <h1 className="text-7xl font-anton leading-none uppercase">
            We&apos;re growing more than plants...
          </h1>
          <p className="py-6 pr-20">
            We&apos;re here to grow a positive, curious and thoughtful attitude
            to plant-based food. Which is why we put curiosity at the heart of
            everything we do. So much so, we&apos;ve built our own vertical farm
            &dash; a near-off-grid, plant playground where we&apos;re
            researching how to add even more flavour, nutrition and
            sustainability to the way we all eat.
          </p>

          <button className="bg-pink text-green font-anton uppercase text-xl mt-8 py-2 px-4 rounded-sm">
            Visit syan farms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Farms;
