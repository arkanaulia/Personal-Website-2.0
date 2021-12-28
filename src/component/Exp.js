import React from "react";
import "./exp.css";
// import { Link } from 'react-router-dom'
// import vid1 from '../images/secsatu.mp4'
import gif3 from "../images/gif3.webp";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";

const Exp = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <p className="w-60 text-lg font-medium text-center lg:text-left lg:w-40" id="bio">
          hi, im Arkan. UI/UX // Graphics // Motion // 3D Designer.
        </p>
        
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <img
          src={gif3}
          alt="gif"
          className="flex items-center w-max"
          id="giff2"
        />
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <div className="w-max flex lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 text-gray-400 lg:text-3xl text-2xl" id="logoo">
          <BsLinkedin />
          <BsInstagram />
          <BsGithub />
          <BsBehance />
        </div>

        <div className="flex w-full lg:flex-row flex-col justify-start items-center lg:items-end lg:mb-24 lg:-translate-x-80 md:translate-x-6 space-y-10 lg:space-y-20 -translate-y-24 lg:translate-y-0 -mt-96 lg:mt-0">
          <div className="flex-col text-left space-y-5 w-96" id="yuai">
            <h1 className="aaa lg:text-4xl text-3xl mb-8 font-semibold">2021</h1>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">IPL by Paragon<p className="text-sm">Production manager</p> </h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">IYSRE 2021<p className="text-sm">Production manager</p></h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">Schematics 2021<p className="text-sm">Design Coordinator</p></h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">SxCEOs League<p className="text-sm">UI Designer</p></h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">ITS EXPO 2021<p className="text-sm">Motion Designer</p></h3>
          </div>
          <div className="flex-col text-left space-y-5 lg:ml-10 w-96" id="mosien">
            <h1 className="aaa lg:text-4xl text-3xl mb-8 font-semibold">2020</h1>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">ILITS 2021<p className="text-sm">Docum Expert Staff</p></h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">Gerigi 2020<p className="text-sm">Motion Graphics Specialist</p></h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">XD Collective<p className="text-sm">3D Designer</p></h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">ITS Challenge<p className="text-sm">Design Conceptor</p></h3>
            <h3 className="aaa lg:text-xl link link-underline link-underline-black text-black w-max">ILITS 2020<p className="text-sm">Design Staff</p></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
