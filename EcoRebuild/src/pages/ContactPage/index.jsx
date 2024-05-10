import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

import Component21 from "newComponents/Component21";
import Component26 from "newComponents/Component26";

const ContactPagePage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 py-[19px] w-full" />
          <Component21 />
          {/* <Component26 /> */}
        </div>
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default ContactPagePage;
