import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { general } from "general";


const LandingPageHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-around w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img
                className="h-10 w-10"
                src={general.logo}
                alt="home"
              />
              <Text
                className="text-green-600 text-xl w-auto"
                size="txtManropeExtraBold28"
              >
                <Link to="/"> {general.name} </Link>
              </Text>
            </div>
          </div>
          <nav className="flex flex-wrap justify-between md:justify-start gap-6 mx-4">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/about">About</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/portfolio">Projects</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/services">Get involved</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/contactpage">Contact</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/faq">FAQ</Link>
            </Text>
             <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/dhiwise-dashboard">Dashboard</Link>
            </Text>
          </nav>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto items-center justify-start w-[228px]">
            <Link to="/contactpage" className="w-full">
              <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-4/5">
                Donate
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
