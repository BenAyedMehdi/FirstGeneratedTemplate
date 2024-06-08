import React from "react";

import { Button, Img, Text, List, Input, GoogleMap } from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { projectsList } from "mock/projects";

const Component15 = ({ project }) => {
  const projectDetails = project ?? projectsList[0];

  const openYoutubeVideo = () => {
    window.open(project.url, "_blank"); // replace with your YouTube video URL
  };
  
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1200px] mx-auto w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-11 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] max-w-[712px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      {projectDetails?.name}
                    </Text>
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      {projectDetails?.punchline}
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <Button
                        className="common-pointer bg-gray-900 cursor-pointer gap-[10px] flex items-center rounded-[10px] py-[13px] justify-center w-[100%] hover:bg-gray-700 transition-colors duration-300"
                        onClick={openYoutubeVideo}
                        rightIcon={
                          <Img src="images/img_play.svg" alt="Video" />
                        }
                      >
                        <div className="font-manrope text-left font-semibold text-lg text-white-A700">
                          Video
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    {projectDetails?.description}
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[712px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>{projectDetails?.about}</>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                  size="txtManropeExtraBold28"
                >
                  Highlights
                </Text>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[150px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-[55px] items-start justify-start w-full">
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                        <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeRegular18Gray600"
                        >
                          Type
                        </Text>
                      </div>
                      <Text
                        className="flex-1 text-gray-900 text-lg text-right w-auto"
                        size="txtManropeSemiBold18"
                      >
                        {projectDetails?.type}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[47px] items-start justify-start w-full">
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                        <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeRegular18Gray600"
                        >
                          Category
                        </Text>
                      </div>
                      <Text
                        className="flex-1 text-gray-900 text-lg text-right w-auto"
                        size="txtManropeSemiBold18"
                      >
                        {projectDetails?.highlights.category}
                      </Text>
                    </div>
                    <div className="flex items-start justify-start w-full">
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                        <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeRegular18Gray600"
                        >
                          Duration
                        </Text>
                      </div>
                      <Text
                        className="text-lg text-right "
                        size="txtManropeSemiBold18"
                      >
                        {projectDetails?.highlights.duration}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-20 items-start justify-start w-full">
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                        <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeRegular18Gray600"
                        >
                          State
                        </Text>
                      </div>
                      <Text
                        className="flex-1 text-gray-900 text-lg text-right w-auto"
                        size="txtManropeSemiBold18"
                      >
                        {projectDetails?.highlights.state}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-8 items-start justify-start w-full">
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                        <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeRegular18Gray600"
                        >
                          Date
                        </Text>
                      </div>
                      <Text
                        className="flex-1 text-gray-900 text-lg text-right w-auto"
                        size="txtManropeSemiBold18"
                      >
                        {projectDetails?.highlights.date}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[66px] items-start justify-start w-full">
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                        <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeRegular18Gray600"
                        >
                          Other
                        </Text>
                      </div>
                      <Text
                        className="flex-1 text-gray-900 text-lg text-right w-auto"
                        size="txtManropeSemiBold18"
                      >
                        {projectDetails?.highlights.other}
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  Team
                </Text>
                <div className="flex flex-row gap-6 items-center justify-start w-full">
                  <Img
                    className="h-[150px] md:h-auto object-cover rounded-[10px] w-[150px]"
                    src={projectDetails?.customer.img}
                    alt="rectangle5599"
                  />
                  <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                      size="txtManropeSemiBold20Gray900"
                    >
                      {projectDetails?.customer.name}
                    </Text>
                    <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                      <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                        <Img
                          className="h-4 w-4"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                      </div>
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        {projectDetails?.customer.reviews}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_mail_gray_600.svg"
                        alt="mail"
                      />
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtManropeMedium16"
                      >
                        {projectDetails?.customer.email}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtManropeMedium16"
                      >
                        {projectDetails?.customer.phone}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component15;
