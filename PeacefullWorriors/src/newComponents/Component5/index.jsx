import React from "react";

import { Button, Img, Text, CheckBox } from "components";

const Component5 = () => {
  return (
    <>
    <div className="bg-gray-51 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
      <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-center max-w-[1200px] mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start w-full">
          <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="leading-[140.00%] max-w-[557px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                size="txtManropeExtraBold36"
              >
                Simple & easy way to find your dream Appointment
              </Text>
              <Text
                className="leading-[180.00%] max-w-[557px] md:max-w-full text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. In a free hour, when our power of
                choice is untrammelled and when nothing prevents our being
                able to do what we like best, every pleasure is to be
                welcomed.
              </Text>
            </div>
            <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
              Get Started
            </Button>
          </div>
          <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <Img
                className="h-[327px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle18.png"
                alt="rectangleEighteen"
              />
              <Img
                className="h-[218px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_rectangle21.png"
                alt="rectangleTwentyOne"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <Img
                className="h-[218px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle19.png"
                alt="rectangleNineteen"
              />
              <Img
                className="h-[327px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_rectangle20.png"
                alt="rectangleTwenty"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-center justify-start w-full">
          <Img
            className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
            src="images/img_rectangle20_589x521.png"
            alt="rectangleTwenty_One"
          />
          <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                  size="txtManropeExtraBold36"
                >
                  Best rated host on popular rental sites
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18Gray700"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, when our power of
                  choice is untrammelled.
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
        </div>
      </div>
    </div>  
    </>
  );
};

export default Component5;
