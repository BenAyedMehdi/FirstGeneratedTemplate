import React from "react";

import { Button, Img, List, Text } from "components";
import { Link } from "react-router-dom";

const LandingPageHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img
                className="h-10 w-10"
                src="images/generated/foosheekalogo.png"
                alt="home"
              />
              <Text
                className="text-orange-A700 text-xl w-auto"
                size="txtMarkoOneRegular20"
              >
                <Link to="/">Mehdi Ben Ayed </Link>
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row items-center justify-between w-[492px] ">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/dhiwise-dashboard">Dashboard</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/services">News</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/portfolio">Portfolio</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/about">Who am I</Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link to="/contactpage">Contact</Link>
            </Text>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full">
              Contact
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
