import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import LandingPageCard from "components/LandingPageCard";

const landingPageCardPropList = [
  {},
  { image: "images/img_image_1.png" },
  { image: "images/img_image_2.png" },
  { image: "images/img_image_3.png" },
  { image: "images/img_image_4.png" },
  { image: "images/img_image_5.png" },
];

const Component4 = ({projects}) => {
  const navigate = useNavigate();
  return (
    <>
    
    <div className="flex flex-col font-manrope items-center justify-center py-6 md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] md:h-auto items-start justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                  size="txtManropeExtraBold36"
                >
                  Featured Projects
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                  onClick={() => navigate("/portfolio")}
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
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {projects.map((project, index) => ( index<3 &&
                  <React.Fragment key={`LandingPageCard${index}`}>
                    <LandingPageCard
                      className="flex flex-1 flex-col h-full items-start justify-start w-full"
                      project={project}
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

export default Component4;
