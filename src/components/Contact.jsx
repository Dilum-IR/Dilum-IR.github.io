import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-20 text-center text-4xl">
        Get in
        <span className="text-neutral-500"> Touch.</span>
      </h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="my-4 border-b">
          {CONTACT.email}
        </a>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-center tracking-tighter flex m-8 items-center justify-center  text-2xl"
      >
        <div style={{ width: "50px", height: "50px" }}>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/dilum-induwara-rathnayake-3933b3284"
            className="hover:text-3xl flex transition-all"
          >
            <FaLinkedin />
          </a>
        </div>
        
          <div style={{ width: "50px", height: "50px" }}>
            <a
              title="Github"
              href="https://github.com/LearnCsWithDIR"
              className="hover:text-3xl flex transition-all"
            >
              <FaGithub />
            </a>
          </div>
          <div style={{ width: "50px", height: "50px" }}>
            <a
              href="https://www.youtube.com/@CodeArtLK"
              title="YouTube"
              className="hover:text-3xl flex transition-all"
            >
              <FaYoutube />
            </a>
          </div>

          <div style={{ width: "50px", height: "50px" }}>
            <a
              title="Instagram"
              href="https://instagram.com/_dilum_induwara"
              className="hover:text-3xl flex transition-all"
            >
              <FaInstagram />
            </a>
          </div>
          <div style={{ width: "50px", height: "50px" }}>
            <a
              title="Facebook"
              href="https://www.facebook.com/diluminduwara.rathnayake"
              className="hover:text-3xl flex transition-all"
            >
              <FaFacebook />
            </a>
          </div>
       
      </motion.div>
    </div>
  );
}
