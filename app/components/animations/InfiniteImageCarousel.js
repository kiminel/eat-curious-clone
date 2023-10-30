"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const images = [
    "/bfb.png",
    "/brogs.png",
    "/burgerboi.png",
    "/collins.png",
    "/firstchoice.png",
    "/fripri.png",
    "/hopschops.jpg",
    "/mahirs.png",
    "/peepaluk.png",
    "/sfg.png",
    "/tcb.png",
    "/thehospitality.png",
    "/weetabix.png",
    "/yaus.png",
    "/supertiffin.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: -1000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className="w-full bg-green pt-2">
      {images.map((imageUrl, index) => (
        <div key={index} className="mx-2">
          <Image
            src={imageUrl}
            alt={"Client Carousel"}
            width={100}
            height={100}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
