"use client";
import Image from "next/image";
import React from "react";

const Intrigued = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <h1 className="flex justify-center text-8xl pt-28 font-anton text-green uppercase">
        Intrigued?
      </h1>
      <div className="flex justify-center pt-8">
        <button className="absolute z-10 uppercase bg-pink py-2 px-4 text-green text-xl font-anton rounded-sm">
          Let&apos;s chat
        </button>
        <Image src="/intrigued.svg" alt="Intrigued" height={550} width={550} />
      </div>
    </div>
  );
};

export default Intrigued;
