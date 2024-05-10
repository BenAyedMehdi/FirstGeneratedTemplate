import React from "react";

import { Button, Img, Text, List, Input, SelectBox, } from "components";

const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Component17 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
            size="txtManropeExtraBold36"
          >
            Some Nearby Good Agents
          </Text>
          <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
            <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col items-start justify-start px-4 py-3.5 rounded-[10px] w-full">
              <Input
                name="frame1000001612"
                placeholder="Enter your address"
                className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                wrapClassName="flex pt-1 w-full"
                suffix={
                  <Img
                    className="mt-auto mb-[3px] h-6 ml-3"
                    src="images/img_search_gray_600.svg"
                    alt="search"
                  />
                }
              ></Input>
            </div>
            <SelectBox
              className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold pl-5 pr-4 py-[17px] rounded-[10px] text-gray-600 text-left text-lg w-[12%] md:w-full"
              placeholderClassName="text-gray-600"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_600_24x24.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="dropdownlarge"
              options={dropdownlargeOptionsList}
              isSearchable={false}
              placeholder="Review"
            />
            <Button
              className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[128px] pl-5 pr-4 py-[17px] rounded-[10px]"
              rightIcon={
                <Img
                  className="h-5 mt-px mb-[3px] ml-2.5"
                  src="images/img_search_white_a700.svg"
                  alt="search"
                />
              }
            >
              <div className="font-bold text-left text-lg text-white-A700">
                Search
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component17;
