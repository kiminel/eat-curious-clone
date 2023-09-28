"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-green text-white text-[16rem] font-anton text-center">
      <motion.h1
        className="uppercase relative z-10"
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

      <motion.div
        className="absolute top-[26%] left-[40%] z-20"
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
  );
};

export default Hero;
