import React from "react";
import "./hi.css";
import gif6 from "../images/gif6.webp";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";

const Hi = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <p
          className="w-60 text-lg font-medium text-center lg:text-left lg:w-40"
          id="bio2"
        >
          hi, im Arkan. UI/UX // Graphics // Motion // 3D Designer.
        </p>
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center flex-col z-20 -translate-y-20 lg:translate-y-0">
        <img
          src={gif6}
          alt="gif"
          className="flex items-center w-max"
          id="giff3"
        />
      </div>
      <p className="w-8/12 fixed z-30 translate-y-36 text-sm lg:text-base" id="bioku">
        i'm <strong>Arkan Aulia</strong>, Visual artist, graphic-motion
        designer, user interface designer and programmer from Indonesia with a
        demonstrated history of working in design industry. Skilled in Motion
        Design, User Interface Design, Graphic Design, Video Editing, and 3D
        Animation. Strong arts and design professional with a Bachelor of
        Informatics from Institut Teknologi Sepuluh Nopember Surabaya.
      </p>

        <div class="fixed text-gray-300 translate-y-3 lg:translate-y-56  w-max h-max z-50" id="imel">
          <a
            href="mailto:arkanaulia@gmail.com"
            class="button button--winona p-0 bg-gray-800 hover:bg-gray-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-xs text-center font-semibold uppercase tracking-widest align-middle overflow-hidden z-50"
            data-text="work with me."
          >
            <span class="align-middle block">work with me.</span>
          </a>
        </div>

      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <div
          className="w-max flex lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 text-gray-400 lg:text-3xl text-2xl"
          id="logoo2"
        >
          <BsLinkedin />
          <BsInstagram />
          <BsGithub />
          <BsBehance />
        </div>
      </div>
    </div>
  );
};

export default Hi;
