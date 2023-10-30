"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Farms = () => {
  return (
    <div className="w-full min-h-screen bg-green px-24 flex items-center">
      <div className="grid grid-cols-2 gap-20">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.2,
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 180,
            },
          }}
        >
          <Image
            className="w-auto h-auto rounded-md"
            src="/farm.jpg"
            alt="Farm plants"
            width={800}
            height={800}
          />
        </motion.div>

        <div className="col-span-1 text-white">
          <motion.h1
            className="text-7xl font-anton leading-none uppercase"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.2,
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 180,
              },
            }}
          >
            We&apos;re growing more than plants...
          </motion.h1>

          <motion.p
            className="py-6 pr-20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.2,
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 180,
              },
            }}
          >
            We&apos;re here to grow a positive, curious and thoughtful attitude
            to plant-based food. Which is why we put curiosity at the heart of
            everything we do. So much so, we&apos;ve built our own vertical farm
            &dash; a near-off-grid, plant playground where we&apos;re
            researching how to add even more flavour, nutrition and
            sustainability to the way we all eat.
          </motion.p>

          <motion.button
            className="bg-pink text-green font-anton uppercase text-xl mt-8 py-2 px-4 rounded-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.2,
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 180,
              },
            }}
          >
            Visit syan farms
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Farms;
