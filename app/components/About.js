"use client";
import React from "react";
import Image from "next/image";
import * as wavy from "../icons/wavy.svg";

const About = () => {
  return (
    <div>
      <Image src={wavy} alt="wavy" className="w-full bg-green" />
      <div className="text-white bg-pink">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p>This is the about page content...</p>
      </div>
    </div>
  );
};

export default About;
