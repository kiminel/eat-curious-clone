import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="w-full bg-green min-h-screen px-24 py-12">
      <div className="grid grid-cols-3 pt-4 gap-4 text-center">
        <div className="bg-lightGreen p-4 rounded-md uppercase overflow-hidden relative h-[500px]">
          <h1 className="text-[7rem] leading-none text-green font-anton py-2">
            Curious Pieces
          </h1>
          <Image
            className="absolute"
            src="/curiousPieces.png"
            width={400}
            height={400}
            alt="Curious Pieces"
          />
        </div>

        <div className="bg-mustardYellow p-4 rounded-md uppercase overflow-hidden relative h-[500px]">
          <h1 className="text-[7rem] leading-none text-green font-anton py-2">
            Curious Mince
          </h1>
          <Image
            className="absolute"
            src="/curiousMince.png"
            width={400}
            height={400}
            alt="Curious Mince"
          />
        </div>

        <div className="bg-lightGreen  p-4 rounded-md uppercase overflow-hidden relative h-[500px]">
          <h1 className="text-[7rem] leading-none text-green font-anton py-2">
            Curious Negg
          </h1>
          <Image
            className="absolute"
            src="/curiousNegg.png"
            width={400}
            height={400}
            alt="Curious Negg"
          />
        </div>

        <div className="bg-lightGreen p-4  rounded-md uppercase overflow-hidden relative h-[500px]">
          <h1 className="text-[7rem] leading-none text-green font-anton py-2">
            Curious Tenders
          </h1>
          <Image
            className="absolute"
            src="/curiousTenders.png"
            width={400}
            height={400}
            alt="Curious Tenders"
          />
        </div>

        <div className="bg-red p-4  rounded-md uppercase overflow-hidden relative h-[500px]">
          <h1 className="text-[7rem] leading-none text-green font-anton py-2">
            Curious Bangers
          </h1>
          <Image
            className="absolute"
            src="/curiousBangers.png"
            width={400}
            height={400}
            alt="Curious Bangers"
          />
        </div>

        <div className="bg-lightGreen p-4  rounded-md uppercase overflow-hidden relative h-[500px]">
          <h1 className="text-[7rem] leading-none text-green font-anton py-2">
            Curious Fillets
          </h1>
          <Image
            className="absolute"
            src="/curiousFillets.png"
            width={400}
            height={400}
            alt="Curious Fillets"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-pink text-green font-anton uppercase my-12 text-2xl py-2 px-4 rounded-sm">
          View all
        </button>
      </div>
    </div>
  );
};

export default Products;
