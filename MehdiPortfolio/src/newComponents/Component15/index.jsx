import React from "react";

import { Button, Img, Text, List, Input, GoogleMap } from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { projectsList } from "mock/projects";

const Component15 = ({ project }) => {
  const projectDetails = project?? projectsList[0];

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
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:pr-10 sm:pr-5 pr-[180px] w-full">
                    <div className="bg-white-A700 border border-gray-600 border-solid flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-full">
                        <Button
                          className="bg-white-A700 bottom-[0] cursor-pointer flex items-center justify-center min-w-[122px] px-4 py-[9px] right-[0] rounded-[10px]"
                        >
                          <div className="font-bold text-gray-900 text-left text-lg">
                            <a href={projectDetails?.url}>
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                                size="txtManropeBold24Gray900"
                              >
                                PREVIEW
                              </Text>
                              <Text
                                className="text-gray-600 text-xs w-full"
                                size="txtManropeSemiBold12"
                              >
                                click here
                              </Text>
                            </a>
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                          size="txtManropeBold24Gray900"
                        >
                          {projectDetails?.type}
                        </Text>
                        <Text
                          className="text-gray-600 text-xs w-full"
                          size="txtManropeSemiBold12"
                        >
                          {projectDetails?.tech}
                        </Text>
                      </div>
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
                  Customer
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
          <div className="bg-white-A700 border border-bluegray-100 border-solid flex sm:flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-auto sm:w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-[336px]">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  Get in touch!
                </Text>
                <div className="flex flex-col gap-3 h-[440px] md:h-auto items-start justify-start w-full">
                  <Input
                    name="textfieldlarge"
                    placeholder="Full Name"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    type="text"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    }
                  ></Input>
                  <Input
                    name="textfieldlarge_One"
                    placeholder="Email Address"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    type="email"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_mail_gray_600_24x24.svg"
                        alt="mail"
                      />
                    }
                  ></Input>
                  <Input
                    name="textfieldlarge_Two"
                    placeholder="Phone Number"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    type="number"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    }
                  ></Input>
                  <Input
                    name="textfieldlarge_Three"
                    placeholder="Date"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                    }
                  ></Input>
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col h-[152px] md:h-auto items-start justify-start px-[19px] py-3.5 rounded-[10px] w-full">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Message
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-gray-900 cursor-pointer font-semibold py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                SEND
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component15;
