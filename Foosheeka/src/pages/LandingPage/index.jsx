import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import CreateAccountModal from "modals/CreateAccount";
import Component1 from "newComponents/Component1";
import Component3 from "newComponents/Component3";
import Component2 from "newComponents/Component2";
import Component4 from "newComponents/Component4";
import Component5 from "newComponents/Component5";
import Component6 from "newComponents/Component6";
import Component7 from "newComponents/Component7";
import Component501 from "newComponents/Component501";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[40px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <Component1 />
        </div>
        <Component2 />
        <Component5 />
        <Component7 />
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default LandingPagePage;
