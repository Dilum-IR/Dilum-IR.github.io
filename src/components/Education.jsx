import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education.</h1>

      <div className="">
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
              <p className="mb-2 text-sm text-neutral-400">{education.address}</p>
            
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <p className="mb-2 text-2xl text-neutral-300">{education.school}</p>
              <h6 className="mb-2 font-semibold">
                {education.role_1}
              </h6>
              <p className="mb-4 text-neutral-400">{education.academic_1}</p>
              <h6 className="mb-2 font-semibold">
                {education.role_2}
              </h6>
              <p className="mb-4 text-neutral-400">{education.academic_2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
