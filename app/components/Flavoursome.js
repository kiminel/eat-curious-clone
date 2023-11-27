"use client";
import React from "react";
import Image from "next/image";
import * as eatTogether from "../icons/eat-together.svg";
import * as rightSwirly from "../icons/right-swirly.svg";

const Flavoursome = () => {
  return (
    <div>
      <div className="absolute right-[11%] mt-[27rem]">
        <Image src={rightSwirly} alt="Right swirly" width={100} height={100} />
      </div>

      <div className="min-h-screen w-full bg-green px-28 grid grid-cols-2 justify-center items-center">
        <div className="col-span-1 flex justify-center">
          <Image
            src={eatTogether}
            alt="eat together"
            width={600}
            height={600}
            className="w-auto h-auto"
          />
        </div>
        <div className="col-span-1 text-white">
          <h1 className="pr-16 text-[6.5rem] leading-none uppercase font-anton">
            Flavoursome food for everyone
          </h1>

          <p className="pr-48 text-lg py-6">
            Our curious creations are made for vegans and meat-eaters alike.
            Because meat-free doesn&apos;t mean flavour free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flavoursome;
