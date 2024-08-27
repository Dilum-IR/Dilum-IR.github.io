import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconVarinets = (duration) => ({
  hidden: { y: -10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
});

export default function Technologies() {
  return (
    <div className="border-b border-r-neutral-800  pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies.</h2>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVarinets(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div variants={iconVarinets(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJava className="text-7xl"/>
        </motion.div>

        <motion.div 
        variants={iconVarinets(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconVarinets(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiBootstrap className="text-7xl text-purple-700"/>
        </motion.div>

        <motion.div 
        variants={iconVarinets(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500"/>
        </motion.div>

        <motion.div variants={iconVarinets(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlutter className="text-7xl text-cyan-600"/>
        </motion.div>

      </motion.div>
    </div>
  );
}
