"use client";
import React from "react";
import Image from "next/image";
import * as logo from "../icons/logo.svg";

const Header = () => {
  return (
    <nav className="w-full h-32 bg-green flex">
      <ul className="w-full flex justify-around items-center uppercase font-semibold text-md text-white">
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Products</a>
        </li>

        <li>
          <a>
            <Image
              src={logo}
              width={175}
              height={50}
              alt="Eat Curious"
              priority
            />
          </a>
        </li>

        <li>
          <a>Recipes</a>
        </li>
        <li className="bg-pink p-2 rounded-md text-green font-extrabold">
          <a>Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
