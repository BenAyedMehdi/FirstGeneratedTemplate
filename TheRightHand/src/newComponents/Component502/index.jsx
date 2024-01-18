import React from "react";

import { Button, Img, Text, CheckBox } from "components";

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
                We are a Creative Designers & Software Experts
              </Text>
              <Text
                className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                We are your best choice!
              </Text>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <CheckBox
                className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                inputClassName="mr-[5px]"
                name="findexcellentde_One"
                id="findexcellentde_One"
                label="Find excellent deals"
              ></CheckBox>
              <CheckBox
                className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                inputClassName="mr-[5px]"
                name="friendlyhost"
                id="friendlyhost"
                label="Friendly host & Fast support"
              ></CheckBox>
              <CheckBox
                className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                inputClassName="mr-[5px]"
                name="securepaymentsy_One"
                id="securepaymentsy_One"
                label="Secure payment system"
              ></CheckBox>
            </div>
          </div>
          <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
            Learn more
          </Button>
        </div>
        <Img
          className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
          src="images/creativesoftwareicon.png"
          alt="rectangleTwenty_One"
        />
      </div>
    </>
  );
};

export default Component502;
