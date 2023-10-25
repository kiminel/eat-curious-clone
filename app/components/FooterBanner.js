"use client";
import Image from "next/image";
import React from "react";
import * as footerSquiggle from "app/icons/banner-squiggle.svg";

const FooterBanner = () => {
  return (
    <div className="w-full h-20 z-50 -mt-20 relative flex items-center bg-pink uppercase text-green text-xl font-lilita gap-14">
      <span>100% plant based </span>
      <span>
        <Image
          src={footerSquiggle}
          alt="Footer squiggle"
          width={20}
          height={20}
        />{" "}
      </span>
      <span>dairy free</span>
      <span>
        <Image
          src={footerSquiggle}
          alt="Footer squiggle"
          width={20}
          height={20}
        />{" "}
      </span>
      <span>packed with flavour</span>
      <span>
        <Image
          src={footerSquiggle}
          alt="Footer squiggle"
          width={20}
          height={20}
        />{" "}
      </span>
      <span>100% plant based</span>
      <span>
        <Image
          src={footerSquiggle}
          alt="Footer squiggle"
          width={20}
          height={20}
        />{" "}
      </span>
      <span>dairy free</span>
      <span>
        <Image
          src={footerSquiggle}
          alt="Footer squiggle"
          width={20}
          height={20}
        />{" "}
      </span>
      <span>packed with flavour</span>
      <span>
        <Image
          src={footerSquiggle}
          alt="Footer squiggle"
          width={20}
          height={20}
        />{" "}
      </span>
    </div>
  );
};

export default FooterBanner;
