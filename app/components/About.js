"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as wavy from "../icons/wavy.svg";
import * as aboutSquiggle from "../icons/about-squiggle.svg";
import * as pizzaMan from "../icons/pizza-man.svg";

const About = () => {
  return (
    <div>
      <Image
        src={wavy}
        alt="wavy"
        className="w-full h-auto bg-green"
        width={"auto"}
        height={"auto"}
      />
      <motion.div
        className="absolute left-1/2 mt-24"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 180,
          },
        }}
      >
        <Image
          src={aboutSquiggle}
          width={60}
          height={60}
          alt="About Squiggle"
          className="w-auto h-auto transform rotate-12"
        />
      </motion.div>

      <div className="min-h-screen w-full bg-pink px-28 flex items-center">
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-2 text-green">
            <motion.h1
              className="text-[6.5rem] leading-none uppercase font-anton pr-40"
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
              Curious... By name, by nature
            </motion.h1>

            <div className="grid grid-cols-3 py-6">
              <motion.p
                className="col-span-1 text-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ ease: "easeIn", opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.2,
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 180,
                  },
                }}
              >
                It&apos;s what inspires us to whip up, throw together, tear,
                shake, and break the rules – on a mission to redefine food for a
                new generation.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="col-span-1 -ml-20"
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
              src={pizzaMan}
              alt="pizza man"
              width={600}
              height={600}
              className="w-auto h-auto "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
