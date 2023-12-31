"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recipes = () => {
  const images = [
    { src: "/recipeMince.jpg", color: "mustardYellow", tag: "mince" },
    { src: "/recipeTenders.jpg", color: "lightGreen", tag: "tenders" },
    { src: "/recipeFillets.jpg", color: "lightGreen", tag: "fillets" },
    { src: "/recipeBangers.jpg", color: "pink", tag: "bangers" },

    { src: "/recipeWraps.jpg", color: "lightGreen", tag: "wraps" },
    { src: "/recipeFresh.jpg", color: "mustardYellow", tag: "fresh" },
    { src: "/recipeBurgers.jpg", color: "lightGreen", tag: "burgers" },
    { src: "/recipeSalads.jpg", color: "lightGreen", tag: "salads" },

    { src: "/recipeBakes.jpg", color: "mustardYellow", tag: "bakes" },
    { src: "/recipeSandwiches.jpg", color: "lightGreen", tag: "sandwiches" },
    { src: "/recipeBowls.jpg", color: "lightGreen", tag: "bowls" },
    { src: "/recipePatties.jpg", color: "pink", tag: "patties" },
  ];

  const [_sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true,
    afterChange: (index) => setSliderIndex(index),
  };

  return (
    <div className="w-full bg-green px-24 pb-28">
      <Slider {...settings} className="h=[700px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="rounded-md h-[600px] relative overflow-hidden cursor-pointer outline-none"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: 0.2,
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 180,
              },
            }}
          >
            <div
              className={`z-10 absolute right-5 top-5 bg-${image.color} text-green p-2 uppercase font-anton rotate-6 rounded-sm`}
            >
              {image.tag}
            </div>
            <Image
              className="absolute object-cover w-auto h-full rounded-md hover:scale-105 duration-100 brightness-75"
              src={image.src}
              alt={`Recipe ${index + 1}`}
              width={2500}
              height={2500}
              priority
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Recipes;
