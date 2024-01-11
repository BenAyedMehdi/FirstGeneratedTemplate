import React from "react";

import { Button, Img, Text, List } from "components";

const Component10 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[170px] pr-[120px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[158px] items-center justify-between max-w-[1150px] mx-auto w-full">
          <Img
            className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
            src="images/protestflags.jpg"
            alt="rectangleTwenty_One"
          />
          <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                Our mission is simple.
              </Text>
              <Text
                className="leading-[180.00%] text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                <>
                  Our mission is to empower the youth, providing a platform for
                  them to contribute ideas, efforts, and creativity towards
                  building a better world. It's more than an organization; it's
                  a global movement for positive change, one innovative idea at
                  a time.
                  <br />
                  In a free hour, On the other hand, we denounce with righteous
                  indignation and dislike men .
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component10;
