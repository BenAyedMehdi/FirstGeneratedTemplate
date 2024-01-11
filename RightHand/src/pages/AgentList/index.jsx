import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component10 from "newComponents/Component10";
import Component17 from "newComponents/Component17";


const AgentListPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-14 items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <Component17 />
          <div className="flex flex-col font-manrope md:gap-10 gap-[60px] items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5615.png"
                    alt="rectangle5615"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5616.png"
                    alt="rectangle5616"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5614.png"
                    alt="rectangle5614"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5614_282x282.png"
                    alt="rectangle5614"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5617.png"
                    alt="rectangle5617"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5618.png"
                    alt="rectangle5618"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5619.png"
                    alt="rectangle5619"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5620.png"
                    alt="rectangle5620"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5621.png"
                    alt="rectangle5621"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5622.png"
                    alt="rectangle5622"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5623.png"
                    alt="rectangle5623"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5615_282x282.png"
                    alt="rectangle5615"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
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
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between max-w-[1200px] mx-auto w-full">
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
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AgentListPage;
