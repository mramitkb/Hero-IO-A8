import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import {
  FaFacebook,
  FaGithubAlt,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content p-10 md:p-20">
      <footer className="footer sm:footer-horizontal w-11/12 mx-auto">
        <div className="w-full flex items-center justify-center">
          <Link to="/" className="flex items-center justify-center gap-1">
            <img className="w-12" src={logo} alt="" />
            <h1 className="text-2xl font-bold bg-linear-to-r from-[#6F38E6] to-[#985CF0] bg-clip-text text-transparent">
              HERO.IO
            </h1>
          </Link>
        </div>
        <div>
          <h1 className="footer-title text-base">LEGAL</h1>
          <ul className="space-y-2">
            <li>
              <a href="" className="link link-hover">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="link link-hover">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="link link-hover">
                Contact Us
              </a>
            </li>
            <li>
              <a href="" className="link link-hover">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="link link-hover">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <h6 className="footer-title text-base text-center">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter Your Email</label>
            <div className="join mt-2">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered join-item text-black outline-none border-none"
              />
              <button className="btn join-item border-none bg-linear-to-r from-[#6F38E6] to-[#985CF0] text-white">Subscribe</button>
            </div>
          </fieldset>
          <div className="mt-3 w-full text-center md:text-start">
            <h1 className="footer-title text-base">SOCIAL LINKS</h1>
            <div className="flex items-center justify-center md:justify-start gap-5 text-3xl mt-4 ">
              <Link>
                <FaFacebook />
              </Link>
              <Link>
                <FaXTwitter />
              </Link>
              <Link>
                <FaInstagramSquare />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaGithubAlt />
              </Link>
            </div>
          </div>
        </form>
      </footer>
      <hr className=" my-10 border-gray-600 border-dashed"/>
      <p className="text-[12px] text-center text-gray-300"> <span className="bg-linear-to-r from-[#6F38E6] to-[#985CF0] bg-clip-text text-transparent font-semibold">HERO.IO</span> &copy; {new Date().getFullYear()} - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
