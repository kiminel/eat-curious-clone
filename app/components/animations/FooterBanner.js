"use client";
import React from "react";
import Image from "next/image";
import footerFlowerSquiggle from "app/icons/footer-banner-flower-squiggle.svg";

const FooterBanner = () => {
  const flowerImage = (
    <Image
      src={footerFlowerSquiggle}
      alt="Footer Flower Squiggle"
      width={20}
      height={20}
    />
  );

  return (
    <div className="w-full h-20 z-50 -mt-20 relative flex items-center bg-pink uppercase text-green text-xl font-lilita gap-14">
      <span>100% plant based</span>
      {flowerImage}
      <span>dairy free</span>
      {flowerImage}
      <span>packed with flavor</span>
      {flowerImage}
      <span>100% plant based</span>
      {flowerImage}
      <span>dairy free</span>
      {flowerImage}
      <span>packed with flavor</span>
      {flowerImage}
    </div>
  );
};

export default FooterBanner;
