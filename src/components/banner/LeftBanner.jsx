import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import {DiJavascript1} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si' 
import {BsGithub} from 'react-icons/bs'

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Web Developer.", "Freelance Trainer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-24">
    <div className="flex flex-col gap-5">
      <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className="text-6xl font-bold text-white">
        Hi, I'm <span className="text-red-700">Sadiq Aghayev</span>
      </h1>
      <h2 className="text-4xl font-bold text-white">
        a <span>{text}</span>
        <Cursor cursorColor="#ff014f" />
      </h2>
      <p className="text-base font-bodyFont leading-6 tracking-wide">
        I use animation as a third dimension by which to simplify
        experiences and kuiding thro each and every interaction. I'm not
        adding motion just to spruce things up, but doing it in ways that.
      </p>
    </div>
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-3 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best skills on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <DiJavascript1 />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <BsGithub />
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftBanner