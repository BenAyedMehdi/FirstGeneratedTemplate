import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Img, Text, List, Input } from "components";

const Component7 = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[80px] md:px-10 sm:px-5 w-full">
      <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
            <Text
              className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
              size="txtManropeExtraBold36WhiteA700"
            >
              News & Bolg
            </Text>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
              onClick={() => navigate("/listing")}
              rightIcon={
                <Img
                  className="h-6 mb-[3px] ml-2"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
            >
              <div className="font-bold text-left text-lg text-orange-A700">
                Explore All
              </div>
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
              <Img
                className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/generated/hackathonsgenerated.jfif"
                alt="image"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                  size="txtManropeBold24"
                >
                  9 Reason Why Hackathons are exactly what you need
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                  <Text
                    className="text-deep_orange-400 text-lg w-auto"
                    size="txtManropeBold18Deeporange400"
                  >
                    Read the Article
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_deep_orange_400.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
              <Img
                className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/generated/generated4.jfif"
                alt="image"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                  size="txtManropeBold24"
                >
                  Why You Shouldn't Be Afraid of living the life you deserve
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                  <Text
                    className="text-deep_orange-400 text-lg w-auto"
                    size="txtManropeBold18Deeporange400"
                  >
                    Read the Article
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_deep_orange_400.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
              <Img
                className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/generated/generated3.jfif"
                alt="image"
              />
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                  size="txtManropeBold24"
                >
                  MVP - How Ideas Are Turned into reality? 
                </Text>
                <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                  <Text
                    className="text-deep_orange-400 text-lg w-auto"
                    size="txtManropeBold18Deeporange400"
                  >
                    Read the Article
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_deep_orange_400.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </div>
    </>
  );
};

export default Component7;
