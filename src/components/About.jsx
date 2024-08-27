import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h2 className="my-20 text-center text-4xl">
      Who 
        <span className="text-neutral-500"> I am.</span>
      </h2>

      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1,delay:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1,delay:0.5}}
        className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-start">
            <p className="text-start my-2 max-w-xl text-2xl py-8">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
