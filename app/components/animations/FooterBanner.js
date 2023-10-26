"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import footerFlowerSquiggle from "app/icons/footer-banner-flower-squiggle.svg";

const FooterBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: -1000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  const flowerImage = (
    <Image
      src={footerFlowerSquiggle}
      alt="Footer Flower Squiggle"
      width={20}
      height={20}
    />
  );

  return (
    <Slider
      {...settings}
      className="w-full -mt-20 pt-7 z-50 bg-yellow uppercase text-green text-xl font-lilita"
    >
      <span>100% plant based</span>
      <span>{flowerImage}</span>
      <span>dairy free</span>
      <span>{flowerImage}</span>
      <span>packed with flavor</span>
      <span>{flowerImage}</span>
      <span>100% plant based</span>
      <span>{flowerImage}</span>
      <span>dairy free</span>
      <span>{flowerImage}</span>
      <span>packed with flavor</span>
      <span>{flowerImage}</span>
    </Slider>
  );
};

export default FooterBanner;
