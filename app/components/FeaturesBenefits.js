"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import plantBased from "../../public/plantbased.png";
import realIngredients from "../../public/realingredients.png";
import unrealTexture from "../../public/unrealtexture.png";
import blandBanned from "../../public/blandbanned.png";

const FeaturesBenefits = () => {
  const generateFeatBenefit = (imgSrc, imgAlt, heading, description) => {
    return (
      <>
        <div className="flex justify-center px-12 py-28">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={175}
            height={175}
            className="w-auto h-auto"
          />
        </div>
        <div className="text-green text-center">
          <h1 className="uppercase font-narrow text-3xl">{heading}</h1>
          <p className="text-lg">{description}</p>
        </div>
      </>
    );
  };

  return (
    <div className="w-full min-h-screen px-24 bg-white">
      <h1 className="font-anton text-green text-5xl uppercase pt-24 flex items-center text-center w-full px-[40%]">
        Features & Benefits
      </h1>
      <div className="w-full grid grid-cols-4 gap-4">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.2,
            delay: 0.2,
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 180,
            },
          }}
        >
          {generateFeatBenefit(
            plantBased,
            "Plant Based",
            "Plant based",
            "Plant-protein yumminess, suitable for everyone."
          )}
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.2,
            delay: 0.4,
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 180,
            },
          }}
        >
          {generateFeatBenefit(
            realIngredients,
            "Real ingredients",
            "Real ingredients",
            "If we don't know exactly what an ingredient is, we don't include it."
          )}
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.2,
            delay: 0.6,
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 180,
            },
          }}
        >
          {generateFeatBenefit(
            unrealTexture,
            "Unreal texture",
            "Unreal texture",
            "It's not meat. No really, it's not!"
          )}
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.2,
            delay: 0.8,
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 180,
            },
          }}
        >
          {generateFeatBenefit(
            blandBanned,
            "Bland is banned",
            "Bland is banned",
            "Foodies unite, because here flavour rules."
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesBenefits;
