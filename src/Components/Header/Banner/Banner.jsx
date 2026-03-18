import React from "react";
import playStore from "../../../assets/playStore.png";
import appStore from "../../../assets/appStore.png";
import hero from "../../../assets/hero.png";
import { Link } from "react-router";

export default function Banner() {
  return (
    <div className="w-11/12 mx-auto pt-12 text-center space-y-5">
      <h1 className="font-extrabold text-4xl">
        We Build <br />{" "}
        <span className="bg-linear-to-r from-[#6F38E6] to-[#985CF0] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter and more exciting. <br /> Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex items-center justify-center gap-5">
        <Link
          to="https://play.google.com/store/apps?hl=en"
          className="flex items-center gap-2 btn w-fit bg-white hover:border-[#7A43E9] hover:border"
          target="_blank"
        >
          <img src={playStore} className="w-6" alt="" />
          <span> Google Play</span>
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          className="flex items-center gap-2 btn w-fit bg-white hover:border-[#7A43E9] hover:border"
          target="_blank"
        >
          <img src={appStore} className="w-6" alt="" />
          <span> App Store</span>
        </Link>
      </div>
      <div>
        <img className="w-fit mx-auto" src={hero} alt="" />
      </div>
    </div>
  );
}
