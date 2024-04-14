import React from "react";

import { Button, Img, Text, List } from "components";
import { Link } from "react-router-dom";

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
                  A full-stack web developer<br />
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[488px] md:max-w-full text-gray-900 text-lg"
                  size="txtManropeRegular18"
                >
                  I am an experienced Software Engineer. I can build great websites and apps, and help anyone stand out
                  online. Join me and let's make something amazing together!{" "}
                </Text>
              </div>
              <Button className="bg-gray-900 cursor-pointer font-semibold ml-4 py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                <Link to="/contactpage">Contact</Link>
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
                      I make <br />
                      Websites
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
                      Scrum <br />
                      Framework
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
                      I work at <br />
                      #Bosch
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
                      Trainings <br />& Events
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
