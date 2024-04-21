import React from "react";

import { Button, Img, Text, List } from "components";
import { general } from "general";

const Component10 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[170px] pr-[120px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-center justify-between max-w-[1150px] mx-auto w-full">
          <Img
            className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
            src={general.images.img7}
            alt="rectangleTwenty_One"
          />
          <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                My mission is simple.
              </Text>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                size="txtManropeSemiBold20Gray900"
              >
                Looking ahead, I aim to empower more businesses,
                transforming their visionary ideas into digital success stories
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component10;
