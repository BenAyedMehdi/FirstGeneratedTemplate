import React from "react";

import LandingPageCard from "components/LandingPageCard";
import { Button, Img, Text, List } from "components";

const Component16 = () => {
  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
  ];

  return (
    <>
    <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
      <div className="flex flex-col gap-10 items-center justify-center max-w-[1200px] mx-auto w-full">
        <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
          <Text
            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
            size="txtManropeExtraBold28"
          >
            Latest Property Listings
          </Text>
          <Button
            className="bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
            rightIcon={
              <Img
                className="h-6 mb-[3px] ml-2"
                src="images/img_arrowright.svg"
                alt="arrow_right"
              />
            }
          >
            <div className="font-bold text-left text-lg text-orange-A700">
              Explore All
            </div>
          </Button>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
          orientation="horizontal"
        >
          {landingPageCardPropList.map((props, index) => (
            <React.Fragment key={`LandingPageCard${index}`}>
              <LandingPageCard
                className="flex flex-1 flex-col h-full items-start justify-start w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
    </>
  );
};

export default Component16;
