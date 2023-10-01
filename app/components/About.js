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
      <div className="absolute left-1/2 mt-24">
        <Image
          src={aboutSquiggle}
          width={60}
          height={60}
          alt="About Squiggle"
          className="transform rotate-12"
        />
      </div>

      <div className="min-h-screen w-full bg-pink px-28 flex items-center">
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-2 text-green">
            <h1 className="text-8xl uppercase font-lilita">
              Curious... By name, by nature
            </h1>

            <div className="grid grid-cols-3">
              <p className="col-span-1">
                It&apos;s what inspires us to whip up, throw together, tear,
                shake, and break the rules – on a mission to redefine food for a
                new generation.
              </p>
            </div>
          </div>

          <div className="col-span-1 -ml-20">
            <Image src={pizzaMan} alt="pizza man" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
