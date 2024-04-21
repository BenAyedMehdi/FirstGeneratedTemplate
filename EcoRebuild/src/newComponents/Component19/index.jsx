import React from "react";

import { Button, Img, Text } from "components";
import { general } from "general";

const Component19 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
        <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-center justify-center max-w-[1200px] mx-auto p-[42px] md:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-start justify-center w-full">
              <div className="flex flex-1 flex-col gap-[57px] items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-full">
                    <Img
                      className="h-[182px] md:h-auto object-cover rounded-[10px] w-[182px]"
                      src="images/generated/foosheekalogo.png"
                      alt="rectangle5616"
                    />
                    <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                        size="txtManropeBold24Gray900"
                      >
                        {general.name}
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-[55%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Five"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Six"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Seven"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Eight"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Eight"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Eight"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call_gray_900.svg"
                          alt="call_One"
                        />
                        <Text
                          className="flex-1 text-gray-900 text-lg w-auto"
                          size="txtManropeSemiBold18"
                        >
                          {general.phone}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_mail_gray_900.svg"
                          alt="mail_One"
                        />
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtManropeSemiBold18"
                        >
                          {general.email}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                      I am an engine designed to activate the full potential of a
                      team, a company, or a project. Specialized in websites
                      development, wired to create solutions and implement
                      creative ideas. Our passion for innovation is what drives
                      us to build scalable and maintainable solutions to deliver
                      the best performance and value.
                      <br />
                    </>
                  </Text>
                </div>
                <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[525px] sm:min-w-full py-[13px] rounded-[10px] text-base text-center text-white-A700">
                  Contact
                </Button>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                <br />
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Experiences
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeSemiBold18Gray600"
                  >
                    +3 years of experience in software development.
                    <br />
                    Worked with startups and for Fortune 500 companies.
                    <br />
                    Advanced in C# and ASP.Net development.
                  </Text>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Services
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeSemiBold18Gray600"
                  >
                    Websites, Mobile Apps, Desktop apps
                  </Text>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                    size="txtManropeSemiBold20Gray900"
                  >
                    Area
                  </Text>
                  <Text
                    className="text-gray-900 text-lg w-full"
                    size="txtManropeSemiBold18"
                  >
                    {general.address}
                  </Text>
                </div>
                <br />
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-start justify-start w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Social
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <a target="_blank" href={general.facebook}>
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_clock_gray_600.svg"
                          alt="clock"
                        />
                      </a>
                      <a target="_blank" href={general.linkedin}>
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_linkedin_gray_600.svg"
                          alt="linkedin"
                        />
                      </a>
                      <a target="_blank" href={general.youtube}>
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_play.svg"
                          alt="play"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Website
                    </Text>
                    <Text
                      className="common-pointer text-gray-600 text-lg underline w-full"
                      size="txtManropeSemiBold18Gray600"
                    >
                      {general.website}
                    </Text>
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

export default Component19;
