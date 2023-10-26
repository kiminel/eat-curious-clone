"use client";
import React from "react";
import Image from "next/image";
import InfiniteMarquee from "../animations/InfiniteMarquee";
import * as logo from "../../icons/logo.svg";

const Header = () => {
  return (
    <nav className="w-full h-28 bg-green flex">
      <ul className="w-full flex justify-around items-center uppercase text-lg text-white">
        <li className="hover:cursor-pointer">
          <a className="font-narrow">About</a>
        </li>
        <li className="hover:cursor-pointer">
          <a className="font-narrow">Products</a>
        </li>

        <li className="hover:cursor-pointer">
          <a href="/">
            <Image
              src={logo}
              width={175}
              height={50}
              alt="Eat Curious"
              priority
            />
          </a>
        </li>

        <li className="hover:cursor-pointer">
          <a className="font-narrow">Recipes</a>
        </li>

        <li className="bg-pink p-2 rounded-[4px] text-green hover:cursor-pointer">
          <InfiniteMarquee text={"Contact us"} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
