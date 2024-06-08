import React from "react";

import { Img, Text, List } from "components";
import { general } from "general";

const Component9 = () => {
  return (
    <>
      <div className="bg-green-50 flex flex-col font-manrope items-center justify-center py-[40px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1147px] mx-auto w-full">
          <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                How we started
              </Text>
              <Text
                className="leading-[180.00%] max-w-[531px] md:max-w-full text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                EcoRebuild emerged in response to the profound challenges of
                conflict and environmental degradation in Gaza.
              </Text>
            </div>
            <List
              className="flex flex-col gap-8 items-start w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                <Text
                  className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                  size="txtManropeExtraBold20"
                >
                  1
                </Text>
                <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                    size="txtManropeBold22"
                  >
                    Exploration phase
                  </Text>
                  <Text
                    className="text-gray-700"
                    size="txtManropeRegular18Gray700"
                  >
                    Participants engage in workshops designed to deepen their
                    understanding of the unique challenges faced within Gaza.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                <Text
                  className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                  size="txtManropeExtraBold20"
                >
                  2
                </Text>
                <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                    size="txtManropeBold22"
                  >
                    Creation phase
                  </Text>
                  <Text
                    className="text-gray-700"
                    size="txtManropeRegular18Gray700"
                  >
                    Guided by experienced mentors, participants transformed
                    their understanding and insights into actionable ideas.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-0 w-full">
                <Text
                  className="border-2 border-gray-900 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-gray-900 text-xl tracking-[-0.40px] w-[35px]"
                  size="txtManropeExtraBold20"
                >
                  3
                </Text>
                <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.44px] w-full"
                    size="txtManropeBold22"
                  >
                    Implementation phase
                  </Text>
                  <Text
                    className="text-gray-700"
                    size="txtManropeRegular18Gray700"
                  >
                    Teams transition from ideation to action, working closely
                    with local communities to bring their solutions to life.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Img
            className="flex-1 md:flex-none h-[25rem] sm:h-auto object-cover rounded-[10px] w-[20rem]"
            src="ecorebuild_images/Hope-lamp.jpeg"
            alt="Hope-lamp"
          />
        </div>
      </div>
    </>
  );
};

export default Component9;
