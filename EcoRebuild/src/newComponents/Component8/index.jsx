import React from "react";

import { Img, Text } from "components";
import { general } from "general";

const Component8 = () => {
  return (
    <>
      <div className="bg-deep_orange-50 flex flex-col font-manrope items-center justify-center py-[40px] md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-[130px] items-center justify-center w-full">
              <Text
                className="leading-[140.00%] sm:text-[40px] md:text-[46px] my-8 text-[54px] text-center text-gray-900 tracking-[-1.08px]"
                size="txtManropeExtraBold54"
              >
                <>
                  What's our Vision? 
                </>
              </Text>
              {/* <Img
                className="h-[300px] md:h-auto object-cover rounded-[10px] w-[300px]"
                src="ecorebuild_images/ecorebuild.png"
                alt="rectangle5616"
              /> */}
            </div>
            <Text
              className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-700 text-2xl"
              size="txtManropeBold24"
            >
              <>
                A future where Gaza is ahub of social innovation,characterized
                by strongcommunities, robustinfrastructure, and aresilient
                society, all driven by the collective genius oflocal and
                globalchangemakers.
                {/* <li>
                  <mark>Environmental Sustainability:</mark> Developing and
                  promoting practices that help restore and protect the
                  environment, addressing issues such as soil degradation,
                  energy scarcity, and waste management.
                </li>
                <br />
                <li>
                  <mark>Economic Development:</mark> Encouraging the growth of
                  green businesses and sustainable entrepreneurship to stimulate
                  local economies and provide new opportunities for residents.
                </li>
                <br />
                <li>
                  <mark>Community Empowerment:</mark> Engaging local communities
                  in the planning and implementation of projects to ensure that
                  initiatives meet their needs and harness local knowledge and
                  skills.
                </li> */}
              </>
            </Text>
          </div>
          {/* //TODO: commented to be considered and compared with the carousel in the design & discuss the responsiveness of this section*/}
          {/* Placeholder for the 4 projects   */}
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <Img
                className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src={general.images.img3}
                alt="rectangle5592"
              />
              <Img
                className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src={general.images.img9}
                alt="rectangle5593"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
              <Img
                className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src={general.images.img5}
                alt="rectangle5595"
              />
              <Img
                className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src={general.images.img6}
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
