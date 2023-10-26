"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as intrigued from "app/icons/intrigued.svg";

const Intrigued = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col py-16">
      <motion.h1
        className="flex justify-center text-8xl font-anton text-green uppercase"
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
        Intrigued?
      </motion.h1>
      <div className="flex justify-center pt-8">
        <motion.button
          className="absolute z-10 uppercase bg-pink py-2 px-4 text-green text-xl font-anton rounded-sm"
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
          Let&apos;s chat
        </motion.button>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: 0.6,
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 180,
            },
          }}
        >
          <Image
            src={intrigued}
            alt="Intrigued"
            height={550}
            width={550}
            className="w-auto h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Intrigued;
