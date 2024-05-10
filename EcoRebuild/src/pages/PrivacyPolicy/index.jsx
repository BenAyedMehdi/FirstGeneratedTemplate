import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import LandingPageFooter from "components/LandingPageFooter";
import Component0 from "newComponents/Component0";
import Component27 from "newComponents/Component27";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 py-[19px] w-full" />
          <Component27 />
        </div>
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
