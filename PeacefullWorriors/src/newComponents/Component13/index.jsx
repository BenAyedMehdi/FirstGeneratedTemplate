import React from "react";

import LandingPageCard from "components/LandingPageCard";
import {
  Button,
  GoogleMap,
  Img,
  Input,
  List,
  SelectBox,
  Text,
} from "components";
import Component12 from "newComponents/Component12";
const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const Component13 = () => {
  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_2.png" },
  ];
  return (
    <>
    <Component12/>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {landingPageCardPropList.map((props, index) => (
                <React.Fragment key={`LandingPageCard${index}`}>
                  <LandingPageCard
                    className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full"
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
    </>
  );
};

export default Component13;
