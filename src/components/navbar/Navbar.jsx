import React, { useState } from "react";
import { logo } from "../../assets";
import { navLinksData } from "../../constants";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-6 mdl:px-10 lg:px-16">
      <div className="h-[100%] flex items-center">
        <img src={logo} alt="logo" className="h-[70%] rounded-[50%]" />
        <span className="pl-3">AGHAYEV</span>
      </div>
      <div>
        <RxHamburgerMenu
          onClick={() => setShowMenu(!showMenu)}
          size={30}
          className="text-red-700 lg:hidden hover:cursor-pointer"
        />
        <ul className="hidden lg:flex lg:items-center lg:gap-10">
          {navLinksData.map((navLink) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-red-700 duration-300"
              key={navLink._id}
            >
              <Link
                to={navLink.link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } w-[100%] duration-500 h-screen fixed top-0 left-0 bg-gray-900 font-titleFont px-5 lg:px-16`}
        >
          <div>
            <div>
              <div className="h-24 flex justify-between items-center border-b border-b-gray-600">
                <div className="h-full flex items-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-[70%] rounded-[50%]"
                  />
                  <span className="pl-3">AGHAYEV</span>
                </div>
                <div>
                  <IoCloseSharp
                    onClick={() => setShowMenu(!showMenu)}
                    size={30}
                    className="text-red-700 hover:cursor-pointer"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                illum laudantium, voluptatem aliquam harum, nesciunt vitae
                impedit, aperiam aliquid voluptate totam commodi assumenda
                excepturi placeat!
              </p>
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinksData.map(({_id,title,link}) => (
                <li
                  className="text-lg font-normal text-gray-400 tracking-wide cursor-pointer hover:text-red-700 duration-300 relative group"
                  key={_id}
                >
                  <Link
                    to={link}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setShowMenu(false)}
                  >
                    {title}
                  </Link>
                  <span className="absolute top-[100%] left-0 bg-red-700 h-[2px] w-0 group-hover:w-full duration-300"></span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



