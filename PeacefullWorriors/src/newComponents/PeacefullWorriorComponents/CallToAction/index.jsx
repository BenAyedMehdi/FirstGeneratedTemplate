import React from "react";

import { Button, Img, Text, List } from "components";

const Component2 = () => {
  return (
    <>

      <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
          <div className="bg-red-100 flex flex-1 flex-col h-[424px] md:h-auto items-start justify-center md:px-10 sm:px-5 px-[50px] py-[46px] rounded-[20px] w-full">
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[140.00%] max-w-[488px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                  size="txtManropeExtraBold36"
                >
                  Find any solution idea for any problem in Gaza
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[488px] md:max-w-full text-gray-900 text-lg"
                  size="txtManropeRegular18"
                >
                  A network of enthusiastic individuals globally working on impactful projects..{" "}
                </Text>
              </div>
              <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                About us
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <Text
                    className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                    size="txtManropeExtraBold28"
                  >
                    <>
                      Innovative <br />
                      ideas
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                  <Text
                    className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                    size="txtManropeExtraBold28"
                  >
                    <>
                      Creative  <br />
                      solutions
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                  <Text
                    className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                    size="txtManropeExtraBold28"
                  >
                    <>
                      International <br />
                      projects
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_instagram_orange_a700.svg"
                    alt="instagram"
                  />
                  <Text
                    className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                    size="txtManropeExtraBold28"
                  >
                    <>
                      Deep <br />
                      impact
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component2;
