import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Img, Text, List, Input } from "components";
import Component71 from "newComponents/Component71";
import { general } from "general";

const Component7 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[80px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
              <Text
                className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
                size="txtManropeExtraBold36WhiteA700"
              >
                News & Bolg
              </Text>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                onClick={() => navigate("/listing")}
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
              className="sm:flex-col flex-row gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <Component71
                article={{
                  name: "Why Gaza needs an enviromental renewal program? ",
                  image: general.images.img5,
                  link:"https://crafthub.events/from-not-knowing-hackathons-to-winning-one-in-just-a-month/",
                }}
              />
              <Component71
                article={{
                  name: "Partnerships: Collaborations That Amplify Impact",
                  image: general.images.img6,
                  date: "21 May 2024",
                  link: "https://www.linkedin.com/posts/ben-ayed-mehdi_hackathon-startup-smb-activity-6997563433390878720-oMTg?utm_source=share&utm_medium=member_desktop",
                }}
              />
              <Component71
                article={{
                  name: "Local lives Transformed by EcoRebuild Projects",
                  image: general.images.img7,
                  date: "27 June 2024",
                  link:"https://www.linkedin.com/posts/ben-ayed-mehdi_informationtechnology-engineering-university-activity-6904784362886553600-TSx7?utm_source=share&utm_medium=member_desktop",
                }}
              />
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component7;
