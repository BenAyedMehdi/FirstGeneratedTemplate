import React from "react";

import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";
import { general } from "general";

const Component9_1 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1147px] mx-auto w-full">
          <div className="flex flex-1 flex-col gap-11 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                Hello, I am Mehdi
              </Text>
              <Text
                className="leading-[180.00%] max-w-[531px] md:max-w-full text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                Specialized in <strong>backend </strong>development, wired to
                create solutions and implement <strong>creative</strong> ideas,{" "}
                designed to unlock the potential of a <strong>team</strong> , a
                company, or a project. With my <strong>technical</strong>{" "}
                background, strong <strong>communication</strong> skills, and{" "}
                passion for <strong>innovation,</strong> I am aiming to build{" "}
                <strong>scalable</strong> and maintainable solutions to deliver
                the best <strong>performance</strong> and{" "}
                <strong>value.</strong>
              </Text>
            </div>

            <div className="bg-white-A700 border border-gray-600 border-solid flex flex-1 flex-col  justify-center sm:px-5 text-base text-center px-6 py-[7px] rounded-[10px] w-full">
              <Button className="bg-white-A700 bottom-[0] cursor-pointer flex items-center justify-center min-w-[122px] px-4 py-[9px] right-[0] rounded-[10px]">
                <Link to="/about">
                  <Text
                    className="text-xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    More about me
                  </Text>
                </Link>
              </Button>
            </div>

            <div className="flex flex-row gap-4 items-start justify-start w-full">
              <a target="_blank" href={general.facebook}>
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_clock_gray_600.svg"
                  alt="clock"
                />
              </a>
              <a target="_blank" href={general.linkedin}>
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_linkedin_gray_600.svg"
                  alt="linkedin"
                />
              </a>
              <a target="_blank" href={general.youtube}>
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_play.svg"
                  alt="play"
                />
              </a>
              <Button className="bg-gray-900 cursor-pointer font-semibold ml-4 py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                <Link to="/contactpage">Contact</Link>
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
            <Img
              className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
              src={general.images.img1}
              alt="rectangleTwenty"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component9_1;
