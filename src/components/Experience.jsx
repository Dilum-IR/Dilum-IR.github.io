import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experince.</h1>

      <div className="">
        {EXPERIENCES.map((experince, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-3xl text-neutral-300">{experince.company}</p>
              <p className="mb-2 text-sm text-neutral-400">{experince.year}</p>
            
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experince.role}
              </h6>
              <p className="mb-4 text-neutral-400">{experince.description_1}</p>
              <p className="mb-4 text-neutral-400">{experince.description_2}</p>

              {experince.technologies.map((tech,index)=>(

              <span key={index} className="mr-2 mt-5 rounded bg-purple-900 px-2 py-1 text-sm font-medium text-neutral-100">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
