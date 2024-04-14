import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import { servicesList } from "mock/services";

const Component22 = () => {
  
  const services = servicesList;

const dropdownlargeOptionsList = [
  { label: "Mobile App, Website", value: "option1" },
  { label: "UI/UX design", value: "option2" },
  { label: "Brand Care", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-start mb-[46px] md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
              size="txtManropeExtraBold36"
            >
              Our Services
            </Text>
            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col items-center justify-start px-4 py-3.5 rounded-[10px] w-full">
                <Input
                  name="frame1000001653"
                  placeholder="Keywords"
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
                className="bg-white-A700 border border-bluegray-100 border-solid flex-1 font-bold pb-3.5 pt-[18px] px-[15px] rounded-[10px] text-gray-600 text-left text-lg w-full"
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
                placeholder="Category"
              />
              <SelectBox
                className="bg-white-A700 border border-bluegray-100 border-solid flex-1 font-bold pb-3.5 pt-[18px] px-4 rounded-[10px] text-gray-600 text-left text-lg w-full"
                placeholderClassName="text-gray-600"
                indicator={
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_600_24x24.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="dropdownlarge_One"
                options={dropdownlargeOneOptionsList}
                isSearchable={false}
                placeholder="Popular"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {services.map((service, index) => (
                <React.Fragment key={`BlogPageColumnactive${index}`}>
                  <BlogPageColumnactive
                    service= {service}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component22;
