import Image from "next/image";
import React from "react";
import * as peaWoman from "../icons/pea-woman.svg";
import * as leftSquiggle from "../icons/left-squiggle.svg";

const Inspiring = () => {
  return (
    <div>
      <div className="absolute left-[85%] mt-40">
        <Image
          src={leftSquiggle}
          alt="inspiring squiggle"
          width={60}
          height={60}
          className="transform rotate-45"
        />
      </div>
      <div className="min-h-screen w-full bg-white grid grid-cols-2 justify-center items-center">
        <div className="col-span-1 flex justify-center">
          <Image src={peaWoman} alt="pea woman" width={600} height={600} />
        </div>
        <div className="col-span-1 text-green space-y-6">
          <h1 className=" text-8xl uppercase font-lilita">
            Inspiring good through tasty goodness
          </h1>

          <div className="grid grid-cols-2">
            <p className="col-span-1">
              We&apos;re here to inspire discovery and tempt everyone to eat
              more plants. Because we care about the future - yours, ours and
              the planet&apos;s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiring;
