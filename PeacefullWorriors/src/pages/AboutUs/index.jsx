import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component8 from "newComponents/Component8";
import Component3 from "newComponents/Component3";
import Component1 from "newComponents/Component1";
import Component9 from "newComponents/Component9";
import Component10 from "newComponents/Component10";
import Component11 from "newComponents/Component11";
import Component7 from "newComponents/Component7";

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <Component8/>
        <Component10/>
        <Component9/>
        <Component7/>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
