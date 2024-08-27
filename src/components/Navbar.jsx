import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="mb-6 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14 rounded-full" src={logo} alt="logo" />
        <h6>Code Art | Dilum Induwara</h6>
      </div>
      <div className=" flex m-8 items-center justify-center gap-4 text-2xl">
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/dilum-induwara-rathnayake"
        >
          <FaLinkedin />
        </a>
        <span className="md:flex gap-4 hidden">
        <a title="Github" href="https://github.com/LearnCsWithDIR">
          <FaGithub />
        </a>

          <a href="https://www.youtube.com/@CodeArtLK" title="YouTube">
            <FaYoutube />
          </a>

          <a title="Instagram" href="https://instagram.com/_dilum_induwara">
            <FaInstagram />
          </a>
          <a
            title="Facebook"
            href="https://www.facebook.com/diluminduwara.rathnayake"
          >
            <FaFacebook />
          </a>
        </span>
      </div>
    </nav>
  );
}
