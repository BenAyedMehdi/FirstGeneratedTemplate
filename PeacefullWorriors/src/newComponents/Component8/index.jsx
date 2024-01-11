import React from "react";

import { Button, Img, Text, List } from "components";

const Component8 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="leading-[140.00%] sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-900 tracking-[-1.08px]"
              size="txtManropeExtraBold54"
            >
              <>
              Of course it's not only one problem <br />
              It's much more than what you can think of.
              </>
            </Text>
            <Text
              className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-lg"
              size="txtManropeRegular18Gray700"
            >
              <>
              Envision a world where the energy and ideas of young people drive solutions<br />
               for pressing global challenges. Our movement is a vibrant platform connecting youth across borders.<br />
                Volunteers collaborate to brainstorm, create, and put into action projects that tackle real-world issues.
                
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <Img
                className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/sittingman.jpg"
                alt="rectangle5592"
              />
              <Img
                className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/kidswaitingfood.jpg"
                alt="rectangle5593"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <Img
                className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/menhelpingwoman.jpg"
                alt="rectangle5595"
              />
              <Img
                className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/kidswithflag.jpg"
                alt="rectangle5594"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component8;
