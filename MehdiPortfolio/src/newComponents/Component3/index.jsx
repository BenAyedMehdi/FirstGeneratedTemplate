import React from "react";

import { Button, Img, Text, List } from "components";

const Component3 = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start max-w-[1200px] mx-auto w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[73%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img className="h-8" src="images/img_clock.svg" alt="clock" />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  $15.4M
                </Text>
                <Text
                  className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
                  size="txtManropeSemiBold20"
                >
                  <>
                    Owned from
                    <br />
                    Properties transactions
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img
                  className="h-8"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  25K+
                </Text>
                <Text
                  className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                  size="txtManropeSemiBold20"
                >
                  Properties for Buy & sell Successfully
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img className="h-8" src="images/img_reply.svg" alt="reply" />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  500
                </Text>
                <Text
                  className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                  size="txtManropeSemiBold20"
                >
                  <>
                    Daily completed <br />
                    transactions
                  </>
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
            <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
              <Img
                className="h-8"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </Button>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                size="txtManropeExtraBold46"
              >
                600+
              </Text>
              <Text
                className="text-bluegray-600 text-xl tracking-[-0.40px] w-full"
                size="txtManropeSemiBold20"
              >
                Reagular Clients
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component3;
