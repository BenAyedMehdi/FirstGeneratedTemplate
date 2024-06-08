import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import { CloseSVG } from "../../assets/images";

const Component26 = () => {
  const [searchonevalue, setSearchonevalue] = React.useState("");
  function handleNavigate1() {
    window.location.href = "https://relasto.com";
  }
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
          <Text
            className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-900 tracking-[-0.92px] w-full"
            size="txtManropeExtraBold46"
          >
            Frequently asked questions
          </Text>
          <div className="flex flex-col gap-[25px] items-start justify-start w-full">
            <Input
              name="search_One"
              placeholder="Search about EcoRebild"
              value={searchonevalue}
              onChange={(e) => setSearchonevalue(e)}
              className="font-semibold p-0 placeholder:text-gray-600 sm:px-5 text-gray-600 text-left text-lg w-full"
              wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-[18px] px-[26px] rounded-[10px] w-full"
              prefix={
                <Img
                  className="mt-auto mb-[3px] cursor-pointer h-6 mr-3.5"
                  src="images/img_search_gray_600.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  className="cursor-pointer h-6 my-auto"
                  onClick={() => setSearchonevalue("")}
                  fillColor="#6e6e6e"
                  style={{
                    visibility:
                      searchonevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
            ></Input>
            <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] py-7 rounded-[10px] w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-2xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Can I volunteer with EcoRebuild? How do I apply?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtManropeSemiBold16Gray600"
                      >
                       Yes, we welcome volunteers! You can apply through our
                        website by filling out the volunteer application form
                        under the 'Get Involved' section.
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-bluegray-100 w-full" />
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-2xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      {/* <>You&#39;re viewing sample results.</> */}
                      Are there opportunities for corporate partnerships with
                      EcoRebuild?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtManropeSemiBold16Gray600"
                      >
                        Absolutely, we value corporate partnerships and offer
                        several collaboration options, including project
                        sponsorship, in-kind donations, and employee volunteer
                        programs. Please contact our partnership team for more
                        information.
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-bluegray-100 w-full" />
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-2xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      {/* <>You&#39;re viewing sample results.</> */}
                      How does EcoRebuild choose its projects?
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtManropeSemiBold16Gray600"
                      >
                      Projects are selected based on community needs
                      assessments, sustainability potential, and their
                      alignment with our core mission. We engage with local
                      stakeholders and experts to ensure that our projects
                      address the most pressing needs effectively.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component26;
