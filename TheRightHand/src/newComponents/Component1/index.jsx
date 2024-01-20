import React from "react";

import { Button, Img, Text, Input } from "components";

const Component1 = () => {
  return (
    <>
      <div className="bg-yellow-50 flex flex-col font-manrope items-start justify-start md:pl-10 sm:pl-5 pl-[120px] py-[50px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="leading-[140.00%] sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px]"
                size="txtManropeExtraBold46"
              >
                <>
                  A Helping Hand
                  <br />
                  For Our Brothers and Sisters
                </>
              </Text>
              <Text
                className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-xl"
                size="txtManropeRegular20"
              >
                A network of enthusiastic individuals globally working on
                impactful projects..
                <br />
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Button className="bg-gray-900 cursor-pointer font-bold py-[17px] rounded-[10px] text-center text-lg text-white-A700 w-full">
                    JOIN US
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
            <Img
              className="h-[503px] rounded-[30px] md:h-auto object-cover w-full"
              src="images/generated/generated2.jfif"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
