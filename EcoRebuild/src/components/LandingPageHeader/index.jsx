import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { general } from "general";

// Make it fixed

const LandingPageHeader = (props) => {
  return (
    <>
      <header className=" bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5  py-[19px] w-full z-50">
        <div className="flex md:flex-col flex-row md:gap-10 sm:gap-1 items-center justify-around w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              
            <Link to="/"> 
            <Img
                className="h-[60px] w-[70px]"
                src={general.logo}
                alt="home"
              /> </Link>
              <Text
                className="text-red-600 text-3xl w-auto"
                size="txtManropeExtraBold28"
              >
                <Link to="/"> {general.name} </Link>
              </Text>
            </div>
          </div>
          <nav className="flex flex-wrap justify-between md:justify-around gap-8 sm:gap-0  mx-2">
            <Link to="/">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                Home
              </Text>
            </Link>
            <Link to="/about">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                About
              </Text>
            </Link>
            <Link to="/portfolio">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                Projects
              </Text>
            </Link>
            <Link to="/faq">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                FAQ
              </Text>
            </Link>
            <Link to="/contactpage">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                Contact
              </Text>
            </Link>
            {/* <Link to="/dhiwise-dashboard">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                Dashboard
              </Text>
            </Link> */}
          </nav>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto items-center justify-start w-[128px] sm:hidden md:hidden">
            <Link to="/contactpage" className="w-full">
              <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full  hover:bg-gray-700 transition-colors duration-300 ">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
