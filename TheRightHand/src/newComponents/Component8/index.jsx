import React from "react";

import { Button, Img, Text, List } from "components";

const Component8 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-[130px] items-center justify-center w-full">
              <Text
                className="leading-[140.00%] sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-900 tracking-[-1.08px]"
                size="txtManropeExtraBold54"
              >
                <>
                  How We Are? <br />
                  Mission, Vision & Values
                </>
              </Text>
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[10px] w-[182px]"
                src="righthandlogo.png"
                alt="rectangle5616"
              />
            </div>
            <Text
              className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-lg"
              size="txtManropeRegular18Gray700"
            >
              <>
                <b>The Right Hand</b> is more than just a team, we're
                innovators, thinkers, and change-makers. We're dedicated to
                making a <b>meaningful impact</b> in our community and beyond.
                Born from a desire to <b>break free</b> from colonial
                constraints and foster independent, free thought, our mission is
                to empower individuals and societies.
                <b> Join us on this journey</b> of creativity, liberation, and
                transformation. Together, we're not just dreaming of a better
                world – <b>we're building it.</b>
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <Img
                className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/generated/generated1.jfif"
                alt="rectangle5592"
              />
              <Img
                className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/generated/generatedvalues.jfif"
                alt="rectangle5593"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <Img
                className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/generated/missiongenerated.jfif"
                alt="rectangle5595"
              />
              <Img
                className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/websitemobile.png"
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
