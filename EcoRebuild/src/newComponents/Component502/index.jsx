import React from "react";

import { Button, Img, Text, CheckBox } from "components";
import { general } from "general";

const Component502 = () => {
  return (
    <>
      <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-center justify-start w-full">
        <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                size="txtManropeExtraBold36"
              >
                What is EcoRebuild?
              </Text>
              <Text
                className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-2xl"
                size="txtManropeRegular18Gray700"
              >
                EcoRebuild is an ambitious program initiated to foster
                ecological resilience and sustainable development in Gaza, a
                region profoundly affected by conflict and environmental
                degradation.
              </Text>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
              <Text
                className=" text-lg w-auto"
                size="txtManropeSemiBold18Gray600"
              >
                Environmental Sustainability
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
              <Text
                className=" text-lg w-auto"
                size="txtManropeSemiBold18Gray600"
              >
                Economic Development
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
              <Text
                className=" text-lg w-auto"
                size="txtManropeSemiBold18Gray600"
              >
                Community Empowerment
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="flex-1 md:flex-none h-[489px] sm:h-auto max-h-[489px] object-cover rounded-[10px] sm:w-[] md:w-[]"
          src={general.images.img3}
          alt="rectangleTwenty_One"
        />
      </div>
    </>
  );
};

export default Component502;
