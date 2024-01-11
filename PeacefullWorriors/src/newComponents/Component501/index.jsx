import React from "react";

import { Button, Img, Text } from "components";

const Headline = () => {
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
                  Find any solution idea for any problem in Gaza
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[557px] md:max-w-full text-gray-700 text-lg"
                  size="txtManropeRegular18Gray700"
                >
                  Envision a world where the energy and ideas of young people
                  drive solutions for pressing global challenges. Our movement
                  is a vibrant platform connecting youth across borders.
                  Volunteers collaborate to brainstorm, create, and put into
                  action projects that tackle real-world issues.
                </Text>
              </div>
              <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                Join us
              </Button>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Img
                  className="h-[327px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/sittingman.jpg"
                  alt="rectangleEighteen"
                />
                <Img
                  className="h-[218px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/kidswaitingfood.jpg"
                  alt="rectangleTwentyOne"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Img
                  className="h-[218px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/menhelpingwoman.jpg"
                  alt="rectangleNineteen"
                />
                <Img
                  className="h-[327px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/kidswithflag.jpg"
                  alt="rectangleTwenty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headline;
