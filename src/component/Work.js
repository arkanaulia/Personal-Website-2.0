import React from "react";
import "./work.css";
// import { Link } from 'react-router-dom'
// import vid1 from '../images/secsatu.mp4'
import gif2 from "../images/gif2.webp";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";

const Work = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
      <div className="flex w-full lg:w-1/3 items-center justify-center sp">
        <p
          className="w-60 text-lg font-medium text-center lg:text-left lg:w-40 opacity-0 lg:opacity-100 fixed"
          id="bio"
        >
          hi, im Arkan. UI/UX // Graphics // Motion // 3D Designer.
        </p>
        <div className="flex w-full lg:flex-row flex-col justify-end items-center lg:items-end lg:mb-24 lg:translate-x-80 md:translate-x-6 space-y-10 lg:space-y-20 translate-y-4 mt-96 lg:mt-0">
          <div className="flex-col text-left space-y-5 w-96" id="yuai">
            <h1 className="aaa lg:text-4xl text-3xl mb-8 font-semibold">
              UI Design
            </h1>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              StudentXCEOs League
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Barunastra
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Krealogi
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Lestari
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Tridi.in
            </h3>
          </div>
          <div
            className="flex-col text-left space-y-5 lg:ml-10 w-96"
            id="mosien"
          >
            <h1 className="aaa lg:text-4xl text-3xl mb-8 font-semibold">
              Motion & Artwork
            </h1>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Si Cepat for XD Kreativ
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Holywings for XD Kreativ
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Yarsi’s Event Bumper
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              BYJA Perfume Advertisement
            </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">
              Sanitizer Case by C.S.
            </h3>
          </div>
        </div>
        <a href="https://arkanaulia.wixsite.com/portofolio">
          <h1
            className="fixed right-16 bottom-36 text-lg text-gray-500 lg:left-20 lg:bottom-60 hover:underline hover:text-black"
            id="simor"
          >
            see more.
          </h1>
        </a>
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center translate-x-20 lg:translate-x-0 -z-50">
        <img
          src={gif2}
          alt="gif"
          className="flex items-center w-max opacity-0 lg:opacity-100"
          id="giff"
        />
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <div
          className="w-max flex lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 text-gray-400 lg:text-3xl text-2xl  opacity-0 lg:opacity-100"
          id="logoo"
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

export default Work;
