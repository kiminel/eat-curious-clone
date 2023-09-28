"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-green text-white text-[16rem] font-anton text-center">
      <motion.h1
        className="uppercase"
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
        className="uppercase"
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
        Your mind
      </motion.h1>
    </div>
  );
};

export default Hero;
