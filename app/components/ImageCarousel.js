"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: -1000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className="w-full bg-green py-8">
      {images.map((imageUrl, index) => (
        <div key={index} className="mx-2">
          <Image src={imageUrl} alt={"Carousel"} width={100} height={100} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
