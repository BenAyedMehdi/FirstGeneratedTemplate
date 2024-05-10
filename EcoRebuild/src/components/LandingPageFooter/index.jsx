import React from "react";

import { Img, Text } from "components";
import { Link } from "react-router-dom";
import { general } from "general";

const LandingPageFooter = () => {
  return (
    <>
      <footer className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-6 w-full">
        <div className="flex flex-col md:gap-10 gap-[20px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[23px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] md:h-auto items-center justify-start w-[341px]">
                <Img className="h-[60px] w-[70px]" src={general.logo} alt="home_One" />
                <Text
                  className="text-red-600 text-3xl w-auto"
                  size="txtManropeExtraBold28"
                >
                  <Link to="/">{general.name}</Link>
                </Text>
              </div>
              <div className="flex flex-col gap-7 md:h-auto items-start justify-start w-full">
                <Text
                  className="leading-[160.00%] text-base text-gray-900"
                  size="txtManropeSemiBold16"
                >
                  <>Rebuilding Gaza, Restoring Hope</>
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    {general.phone}
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    {general.email}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full ml-20">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  <Link to="/">Home</Link>
                </Text>
              </div>
              {/* About section */}
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  <Link to="/about">About</Link>
                </Text>
                {/* <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Blogs
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    <Link to="/about">Adventures</Link>
                  </Text>
                </div> */}
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  <Link to="/contactpage">Contact</Link>
                </Text>
                {/* <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Partnership
                  </Text>
                </div> */}
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  <Link to="/faq">FAQ</Link>
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full"></div>
              </div>
            </div>
          </div>
          <Text
            className="text-base text-gray-900 text-center w-full"
            size="txtManropeSemiBold16"
          >
            © 2024 All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;
