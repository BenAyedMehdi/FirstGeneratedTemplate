import React from "react";

import { Button, Img, Text, List } from "components";

const Component9 = () => {
  return (
    <>
    <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
      <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1147px] mx-auto w-full">
        <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
              size="txtManropeExtraBold36"
            >
              Innovation and change roadmap.
            </Text>
            <Text
              className="leading-[180.00%] max-w-[531px] md:max-w-full text-gray-700 text-lg"
              size="txtManropeRegular18Gray700"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. In a free hour,
            </Text>
          </div>
          <List
            className="flex flex-col gap-8 items-start w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
              <Text
                className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                size="txtManropeExtraBold20"
              >
                1
              </Text>
              <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                  size="txtManropeBold22"
                >
                  Idea Generation
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[470px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18Gray700"
                >
                  Volunteers contribute diverse ideas inspired by the sustainable development goals.
                </Text>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
              <Text
                className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                size="txtManropeExtraBold20"
              >
                2
              </Text>
              <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                  size="txtManropeBold22"
                >
                  Global Collaboration
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[470px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18Gray700"
                >
                 The best ideas transcend borders, with teams from different countries collaborating to bring them to life.
                </Text>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
              <Text
                className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                size="txtManropeExtraBold20"
              >
                3
              </Text>
              <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                  size="txtManropeBold22"
                >
                  Implementation
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[470px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18Gray700"
                >
                  Selected ideas become tangible solutions, from digital platforms to events and more.
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Img
          className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
          src="images/koufiyapeople.jpg"
          alt="rectangleTwenty"
        />
      </div>
    </div>
    </>
  );
};

export default Component9;
