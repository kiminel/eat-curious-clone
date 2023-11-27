"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as topSquiggle from "../../icons/top-squiggle.svg";
import * as leftSquiggle from "../../icons/left-squiggle.svg";
import * as rightSquiggle from "../../icons/right-squiggle.svg";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen bg-green text-white text-[8rem] md:text-[12rem] xl:text-[16rem] font-anton text-center overflow-hidden">
      <div>
        <motion.h1
          className="uppercase relative md:z-10 z-30"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 180,
            },
          }}
        >
          Meat-free
        </motion.h1>
        <motion.h1
          className="uppercase relative z-30"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: 0.4,
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 180,
            },
          }}
        >
          Your mind
        </motion.h1>
      </div>

      <div>
        <motion.div
          className="absolute md:top-[26%] md:left-[40%] top-[15%] z-20"
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
          <Image
            src="/Afro-Fusion-Spice-Bowl.png"
            width={400}
            height={400}
            alt="Afro Fusion Spice Bowl"
          />
        </motion.div>

        <motion.div
          className="absolute top-[15%] left-[51%] z-20"
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
          <Image src={topSquiggle} width={40} height={40} alt="Top Squiggle" />
        </motion.div>
        <motion.div
          className="absolute top-[40%] left-[39%] z-20"
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
          <Image
            src={leftSquiggle}
            width={45}
            height={45}
            alt="Left Squiggle"
          />
        </motion.div>
        <motion.div
          className="absolute top-[45%] left-[61%] z-20"
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
          <Image
            src={rightSquiggle}
            width={70}
            height={70}
            alt="Right Squiggle"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
