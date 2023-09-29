"use client";
import React from "react";
import Image from "next/image";
import * as wavy from "../icons/wavy.svg";
import * as aboutSquiggle from "../icons/about-squiggle.svg";
import * as pizzaMan from "../icons/pizza-man.svg";

const About = () => {
  return (
    <div>
      <Image src={wavy} alt="wavy" className="w-full bg-green" />
      <div className="absolute left-1/2 mt-16">
        <Image
          src={aboutSquiggle}
          width={60}
          height={60}
          alt="About Squiggle"
        />
      </div>

      <div className="min-h-screen w-full text-white bg-pink px-36 flex items-center">
        <div className="grid-cols-2 w-full flex justify-evenly">
          <div className="col-span-1 text-green space-y-6">
            <h1 className=" text-8xl uppercase font-lilita">
              Curious... By name, by nature
            </h1>

            <p className="pr-96">
              It&apos;s what inspires us to whip up, throw together, tear,
              shake, and break the rules – on a mission to redefine food for a
              new generation.
            </p>
          </div>
          <div className="col-span-1">
            <Image src={pizzaMan} alt="pizza man" width={900} height={900} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
