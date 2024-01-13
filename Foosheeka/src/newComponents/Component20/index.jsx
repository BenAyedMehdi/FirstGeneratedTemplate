import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const buttonmediumOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Component20 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
        <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start max-w-[1200px] mx-auto md:px-5 py-[30px] rounded-[10px] w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-between md:px-10 sm:px-5 px-[42px] w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                    size="txtManropeExtraBold28"
                  >
                    Clients Review
                  </Text>
                  <Button
                    className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[190px] px-4 py-[17px] rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-5 mt-px mb-[3px] ml-2.5"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    }
                  >
                    <div className="font-bold text-left text-lg text-white-A700">
                      Write a Reveiw
                    </div>
                  </Button>
                </div>
                <Line className="bg-bluegray-100 h-px w-full" />
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-center sm:px-5 px-[25px] w-full">
                <List
                  className="flex flex-col gap-[25px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-[39px] rounded-[20px] w-full">
                    <div className="flex flex-col gap-10 items-start justify-start w-full">
                      <Text
                        className="leading-[165.00%] max-w-[1090px] md:max-w-full text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                        size="txtManropeSemiBold24Gray600"
                      >
                        I am ver satisfied with the end result. The project was
                        delived with the ensured quality.{" "}
                      </Text>
                      <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-start md:pr-10 sm:pr-5 pr-[552px] w-full">
                          <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-2 items-center justify-between w-1/2">
                              <Img
                                className="h-6 w-6"
                                src="images/img_star_gray_900.svg"
                                alt="star"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_star_gray_900.svg"
                                alt="star_One"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_star_gray_900.svg"
                                alt="star_Two"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_star_gray_900.svg"
                                alt="star_Two"
                              />
                            </div>
                            <Text
                              className="flex-1 text-gray-600 text-xl tracking-[-0.40px] w-auto"
                              size="txtManropeSemiBold20Gray600"
                            >
                              5 review
                            </Text>
                          </div>
                          <Text
                            className="flex-1 text-gray-600 text-xl tracking-[-0.40px] w-auto"
                            size="txtManropeSemiBold20Gray600"
                          >
                            02 Dec 2023
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                          <Img
                            className="h-20 md:h-auto rounded-[50%] w-20"
                            src="images/img_ellipse2695.png"
                            alt="ellipse2695"
                          />
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                              size="txtManropeExtraBold28"
                            >
                              Engine Connect
                            </Text>
                            <Text
                              className="text-gray-900 text-lg w-full"
                              size="txtManropeSemiBold18"
                            >
                              Product Manager
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 border border-gray-600 border-solid flex flex-1 flex-col  justify-center sm:px-5 px-6 py-[7px] rounded-[10px]">
                  <Button className="bg-white-A700 bottom-[0] cursor-pointer flex items-center justify-center min-w-[122px] px-4 py-[9px] right-[0] rounded-[10px]">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                      size="txtManropeBold24Gray900"
                    >
                      Read more
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component20;
