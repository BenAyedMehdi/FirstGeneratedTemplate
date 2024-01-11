import React from "react";

import { Button, Img, Text, List } from "components";
import LandingPageCard from "components/LandingPageCard";

const Component18 = () => {
  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
  ];
  return (
    <>
      <div className="flex flex-col font-manrope md:px-5 relative w-full">
        <div className="flex flex-1 flex-col items-center justify-start mx-auto w-full">
          <Img
            className="h-[250px] sm:h-auto object-cover w-full"
            src="images/img_coverimage.png"
            alt="coverimage"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mt-[-46px] mx-auto w-full z-[1]">
          <div className="flex md:flex-col flex-row gap-[30px] items-end justify-start md:px-10 sm:px-5 px-[140px] w-full">
            <Img
              className="h-[150px] md:h-auto object-cover rounded-[10px] w-[150px]"
              src="images/img_rectangle5599_150x150.png"
              alt="rectangle5599"
            />
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex flex-1 md:flex-col flex-row gap-8 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    Bruno Fernandes
                  </Text>
                  <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-evenly w-1/4">
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
                        src="images/img_star_gray_600.svg"
                        alt="star_Four"
                      />
                    </div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      4.5 review
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_call_gray_900.svg"
                      alt="call"
                    />
                    <Text
                      className="flex-1 text-gray-900 text-lg w-auto"
                      size="txtManropeSemiBold18"
                    >
                      (123) 456-7890
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_mail_gray_900.svg"
                      alt="mail"
                    />
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtManropeSemiBold18"
                    >
                      bruno@relasto .com
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[112px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                Contact
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-12 items-center justify-center w-full">
              <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                <Button className="bg-gray-900 cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-white-A700 w-full">
                  For rent
                </Button>
                <Button className="border border-gray-600 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-gray-900 w-full">
                  For sale
                </Button>
                <Button className="border border-gray-600 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-gray-900 w-full">
                  About
                </Button>
                <Button className="border border-gray-600 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-gray-900 w-full">
                  Review
                </Button>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {landingPageCardPropList.map((props, index) => (
                    <React.Fragment key={`LandingPageCard${index}`}>
                      <LandingPageCard
                        className="flex flex-1 flex-col h-full items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                  <Button className="border border-gray-700 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    1
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    2
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    3
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    4
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    5
                  </Button>
                </div>
                <Button
                  className="border border-bluegray-102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[17px] py-[13px] rounded-[10px]"
                  rightIcon={
                    <Img
                      className="h-4 mt-px mb-[5px] ml-1"
                      src="images/img_arrowright_gray_900.svg"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-semibold text-base text-gray-900 text-left">
                    Next Page
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component18;
