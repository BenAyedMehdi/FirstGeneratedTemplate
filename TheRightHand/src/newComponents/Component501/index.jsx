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
              We analyse problems and find relavant solutions
            </Text>
            <Text
              className="leading-[180.00%] max-w-[557px] md:max-w-full text-gray-700 text-lg"
              size="txtManropeRegular18Gray700"
            >
              We invite individuals worldwide to join this movement, whether as
              volunteers, ambassadors, or contributors. Together, let's shape a
              brighter future and make a meaningful impact on our planet.
              🌍🚀✨.
            </Text>
          </div>
          <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default Component501;
