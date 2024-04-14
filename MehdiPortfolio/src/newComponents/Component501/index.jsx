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
              My mission
            </Text>
            <Text
              className="leading-[180.00%] max-w-[557px] md:max-w-full text-gray-700 text-lg"
              size="txtManropeRegular18Gray700"
            >
              Looking ahead, I aim to empower more startups and businesses,
              transforming their visionary ideas into digital success stories
            </Text>

            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <CheckBox
                className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                inputClassName="mr-[5px]"
                name="findexcellentde_One"
                id="findexcellentde_One"
                label="UI/UX Design"
              ></CheckBox>
              <CheckBox
                className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                inputClassName="mr-[5px]"
                name="friendlyhost"
                id="friendlyhost"
                label="Website Development"
              ></CheckBox>
              <CheckBox
                className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                inputClassName="mr-[5px]"
                name="securepaymentsy_One"
                id="securepaymentsy_One"
                label="mobile app development"
              ></CheckBox>
              <CheckBox
                className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                inputClassName="mr-[5px]"
                name="securepaymentsy_One"
                id="securepaymentsy_One"
                label="Branding & Marketing"
              ></CheckBox>
            </div>
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
