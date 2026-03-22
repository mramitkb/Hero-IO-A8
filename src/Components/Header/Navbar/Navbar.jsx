import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../assets/logo.png"
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const navLinks = <>
            <NavLink to="/" className={({isActive}) => isActive ? "bg-linear-to-r from-[#6F38E6] to-[#985CF0] bg-clip-text text-transparent font-semibold underline underline-offset-4": ""}>Home</NavLink>
            <NavLink to="/apps" className={({isActive}) => isActive ? "bg-linear-to-r from-[#6F38E6] to-[#985CF0] bg-clip-text text-transparent font-semibold underline underline-offset-4": ""}>Apps</NavLink>
            <NavLink to="/installation" className={({isActive}) => isActive ? "bg-linear-to-r from-[#6F38E6] to-[#985CF0] bg-clip-text text-transparent font-semibold underline underline-offset-4": ""}>Installation</NavLink>
    </>
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-36 p-4 shadow-lg border border-[#8C52ED] gap-3"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center justify-center gap-1">
            <img className="w-8 md:w-10" src={logo} alt="" />
            <h1 className="text-xl md:text-2xl font-bold bg-linear-to-r from-[#6F38E6] to-[#985CF0] bg-clip-text text-transparent">StoreFlow</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 [&_a.active]:bg-linear-to-r [&_a.active]:from-[#6F38E6] [&_a.active]:to-[#985CF0] [&_a.active]:bg-clip-text [&_a.active]:text-transparent [&_a.active]:font-semibold [&_a.active]:underline [&_a.active]:underline-offset-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="/installation">Installation</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/mramitkb" target="_blank" className="btn text-white bg-linear-to-r from-[#6F38E6] to-[#985CF0] border-none"><FaGithub/> Contribute</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
