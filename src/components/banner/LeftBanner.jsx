import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaReact} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professioanl Coder.", "Web Developer.", "Freelance Trainer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-1/2 flex flex-col gap-24">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-red-700">Sadiq Agayev</span>
        </h1>
        <h2 className="text-4xl font-bold">
          a <span>{text}</span>
          <Cursor cursorColor="red" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime neque
          dolorum ab tempore, facere quam, in eius libero rem, aliquid
          voluptates consectetur laudantium saepe ullam obcaecati deserunt
          repellat corporis delectus.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
            <h2 className="text-base uppercase font-titleFont mb-4">Best skill on</h2>
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
  );
};

export default LeftBanner;
