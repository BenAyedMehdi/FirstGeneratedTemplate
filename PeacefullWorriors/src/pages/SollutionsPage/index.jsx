import React from "react";

import { Button,  Img, Input, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component14 from "newComponents/Component14";
import Component15 from "newComponents/Component15";
import Component16 from "newComponents/Component16";
import SolutionsPrsentationBanner from "newComponents/PeacefullWorriorComponents/SolutionsPrsentationBanner";
import ExpertsReview from "newComponents/PeacefullWorriorComponents/ExpertsReview";

const SollutionsPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
            <SolutionsPrsentationBanner />
            <ExpertsReview />
            <Component14 />
            <Component15 />
          </div>
          <Component16 />
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default SollutionsPage;
