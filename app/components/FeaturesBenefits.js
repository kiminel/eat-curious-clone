"use client";
import React from "react";
import Image from "next/image";
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
        <div className="col-span-1">
          {generateFeatBenefit(
            plantBased,
            "Plant Based",
            "Plant based",
            "Plant-protein yumminess, suitable for everyone."
          )}
        </div>
        <div className="col-span-1">
          {generateFeatBenefit(
            realIngredients,
            "Real ingredients",
            "Real ingredients",
            "If we don't know exactly what an ingredient is, we don't include it."
          )}
        </div>
        <div className="col-span-1">
          {generateFeatBenefit(
            unrealTexture,
            "Unreal texture",
            "Unreal texture",
            "It's not meat. No really, it's not!"
          )}
        </div>
        <div className="col-span-1">
          {generateFeatBenefit(
            blandBanned,
            "Bland is banned",
            "Bland is banned",
            "Foodies unite, because here flavour rules."
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBenefits;
