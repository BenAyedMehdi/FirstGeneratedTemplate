import React from "react";

import { Button, Img, Text, CheckBox } from "components";

const Component502 = () => {
  return (
    <>
      <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-center justify-start w-full">
        <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                size="txtManropeExtraBold36"
              >
                We can't just watch and do nothing
              </Text>
              <Text
                className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                 Our mission is to empower the youth, providing a platform for
                  them to contribute ideas, efforts, and creativity towards
                  building a better world. It's more than an organization; it's
                  a global movement for positive change, one innovative idea at
                  a time.
              </Text>
            </div>
          </div>
          <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
            Learn more
          </Button>
        </div>
        <Img
          className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
          src="images/creativesoftwareicon.png"
          alt="rectangleTwenty_One"
        />
      </div>
    </>
  );
};

export default Component502;
