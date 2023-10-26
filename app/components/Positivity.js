"use client";
import React from "react";
import Image from "next/image";
import * as positivitySquiggle from "../icons/positivity-squiggle.svg";
import * as happyGroup from "../icons/happy-group.svg";

const Positivity = () => {
  return (
    <div>
      <div className="absolute left-[28%] mt-24">
        <Image
          src={positivitySquiggle}
          width={145}
          height={145}
          alt="positivity Squiggle"
          className="w-auto h-auto"
        />
      </div>

      <div className="min-h-screen w-full bg-yellow px-28 flex">
        <div className="grid grid-cols-2 items-center">
          <div className="col-span-1 text-green">
            <h1 className="text-[6.5rem] leading-none uppercase font-anton">
              Powered by positivity
            </h1>

            <div className="grid grid-cols-2 py-6">
              <p className="col-span-1 text-lg">
                We&apos;re not crusading or going up against an industry.
                We&apos;re for flavour, for fun, for what&apos;s possible.
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <Image
              src={happyGroup}
              alt="happy group"
              width={600}
              height={600}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positivity;
