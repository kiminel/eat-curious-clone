"use client";
import React from "react";
import Image from "next/image";

const products = [
  {
    name: "Curious Pieces",
    imageSrc: "/curiousPieces.png",
    bg: "bg-lightGreen",
  },
  {
    name: "Curious Mince",
    imageSrc: "/curiousMince.png",
    bg: "bg-mustardYellow",
  },
  {
    name: "Curious Negg",
    imageSrc: "/curiousNegg.png",
    bg: "bg-lightGreen",
  },
  {
    name: "Curious Tenders",
    imageSrc: "/curiousTenders.png",
    bg: "bg-lightGreen",
  },
  {
    name: "Curious Bangers",
    imageSrc: "/curiousBangers.png",
    bg: "bg-red",
  },
  {
    name: "Curious Fillets",
    imageSrc: "/curiousFillets.png",
    bg: "bg-lightGreen",
  },
];

const Products = () => {
  return (
    <div className="w-full bg-green min-h-screen px-24 py-12">
      <div className="grid grid-cols-3 pt-4 gap-4 text-center">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${product.bg} p-4 rounded-md uppercase overflow-hidden relative h-[500px]`}
          >
            <h1 className="text-[7rem] leading-none text-green font-anton py-2">
              {product.name}
            </h1>
            <Image
              className="w-auto h-auto absolute"
              src={product.imageSrc}
              width={400}
              height={400}
              alt={product.name}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-pink text-green font-anton uppercase mt-12 text-2xl py-2 px-4 rounded-sm">
          View all
        </button>
      </div>
    </div>
  );
};

export default Products;
