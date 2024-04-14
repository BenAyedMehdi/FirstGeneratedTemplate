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
import Component5 from "newComponents/Component5";
import Component6 from "newComponents/Component6";
import Component7 from "newComponents/Component7";
import Component8 from "newComponents/Component8";
import Component9 from "newComponents/Component9";
import Component10 from "newComponents/Component10";
import Component11 from "newComponents/Component11";
import Component13 from "newComponents/Component13";
import Component14 from "newComponents/Component14";
import Component15 from "newComponents/Component15";
import Component16 from "newComponents/Component16";
import Component17 from "newComponents/Component17";
import Component18 from "newComponents/Component18";
import Component19 from "newComponents/Component19";
import Component20 from "newComponents/Component20";
import Component21 from "newComponents/Component21";
import Component22 from "newComponents/Component22";
import Component23 from "newComponents/Component23";
import Component25 from "newComponents/Component25";
import Component26 from "newComponents/Component26";
import Component27 from "newComponents/Component27";
import Component28 from "newComponents/Component28";
import Component29 from "newComponents/Component29";

const ComponentsPage = () => {
  const navigate = useNavigate();


  
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <Component1/>
        </div>
        <Component2/>
        <Component3/>
        <Component5/>
        <Component7/>
        <Component8/>
        <Component9/>
        <Component10/>
        <Component11/>
        <Component6/>
        <Component16/>
        <Component13/>
        <Component14/>
        <Component15/>
        <Component17/>
        <Component18/>
        <Component19/>
        <Component20/>
        <Component21/>
        <Component22/>
        <Component23/>
        <Component25/>
        <Component26/>
        <Component27/>
        <Component28/>
        <Component29/>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ComponentsPage;
