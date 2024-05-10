import React from "react";

import { Button, Img, Text, CheckBox } from "components";
import Component502 from "newComponents/Component502";

const Component501 = () => {
  return (
    <>
      <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start w-full">
        <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <Img
              className=" md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
              src="images/computerphoneicon.png"
              alt="rectangleEighteen"
            />
            <Img
              className="md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
              src="images/connectionicon.png"
              alt="rectangleTwentyOne"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <Img
              className="md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
              src="images/ideaicon.png"
              alt="rectangleNineteen"
            />
            <Img
              className="md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
              src="images/cloudnetworkicon.png"
              alt="rectangleTwenty"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Text
              className="leading-[140.00%] max-w-[557px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
              size="txtManropeExtraBold36"
            >
              The mission of EcoRebuild
            </Text>
            <Text
              className="leading-[180.00%] max-w-[557px] md:max-w-full text-gray-700 text-2xl"
              size="txtManropeRegular18Gray700"
            >
              Our mission is to create a vibrant community of high-impact innovators dedicated
              to regeneration of conflicted effected areas, transforming ideas
              into the sustainable development and impactful realities.
            </Text>

            <div className="flex flex-col gap-3 items-start justify-start w-full">
             
              <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5  w-2.5"></div>
                    <Text
                      className=" text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Repair and enhance the ecological health of Gaza.
                    </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5  w-2.5"></div>
                    <Text
                      className=" text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Provide sustainable economic opportunities to its residents.
                    </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <div className="bg-gray-600 h-2.5  w-2.5"></div>
                    <Text
                      className=" text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Empower local communities by involving them directly in resilience-building initiatives.
                    </Text>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component501;
