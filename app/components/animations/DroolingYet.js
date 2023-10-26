"use client";
import React from "react";
import Image from "next/image";
import * as droolingYet from "app/icons/drooling-yet.svg";

const DroolingYet = () => {
  return (
    <div className="green-shape min-h-[60vh] bg-white flex justify-center relative z-10 pt-12">
      <Image
        className="z-20"
        src={droolingYet}
        alt="drooling yet"
        width={1500}
        height={500}
      />
    </div>
  );
};

export default DroolingYet;
