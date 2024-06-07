import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import Component8 from "newComponents/Component8";
import Component10 from "newComponents/Component10";
import Component4 from "newComponents/Component4";
import Component21 from "newComponents/Component21";
import Component9 from "newComponents/Component9";
import LandingPageFooter from "components/LandingPageFooter";
// import DemoCarousel from "components/DemoCarousel";
import Component7 from "newComponents/Component7";
// import Component3 from "newComponents/Component3";
import Component5 from "newComponents/Component5";
import { Img } from "components";
import { general } from "general";

const AboutUsPage = ({ projects }) => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone items-center justify-start mx-auto w-auto sm:w-full md:w-full ">
        
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 py-[19px] w-full" />
          <div className="flex flex-1 flex-col items-center justify-start mx-auto w-full">
            <Img
              className="h-[450px] sm:h-auto object-cover w-full"
              src={general.images.img2}
              alt="coverimage"
            />
          </div>
        </div>

        <Component5 />
        <Component10 />
        <Component8 />
        <Component9 />
        {/* <div className="w-[40rem] md:w-[35] sm:w-full">
          <DemoCarousel />
        </div> */}
        <div className="bg-gray-51 flex flex-col font-manrope items-center justify-center p-[40px] md:px-10 sm:px-5 w-full">
          <Component4 projects={projects} />
        </div>
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default AboutUsPage;
