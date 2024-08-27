import React from "react";
import { HERO_CONTENT } from "../constants/index.js";
import profileImg from "../assets/dilum.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export default function Hero() {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Dilum Induwara Rathnayake
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-4xl tracking-tight text-transparent"
            >
              Computer Science Undergraduate
            </motion.span>
            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl  md:text-3xl  tracking-tight text-transparent"
            >
              Mobile Dev | ML Enthusiast
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-lg font-mono tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 lg:mt-14 ">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full"
              width={400}
              height={400}
              src={profileImg}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
