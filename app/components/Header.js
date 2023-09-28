import React from "react";

const Header = () => {
  return (
    <nav className="w-full h-28 px-28 flex justify-between items-center bg-green">
      <ul
        id="menu-desktop-left"
        className="flex space-x-28 uppercase font-semibold text-lg text-white"
      >
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Products</a>
        </li>
      </ul>

      <a className="flex flex-col text-center text-white text-4xl font-extrabold">
        <p>Eat</p>
        <p>Curious</p>
      </a>

      <ul id="menu-desktop-right" className="flex space-x-28 uppercase">
        <li className="text-lg text-white font-semibold">
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
