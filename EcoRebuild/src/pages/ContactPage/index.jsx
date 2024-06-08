import React, { useEffect } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

import Component21 from "newComponents/Component21";
import Component26 from "newComponents/Component26";

const ContactPagePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-deep_orange-50 flex flex-col font-markoone items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 items-start justify-start w-full">
          <LandingPageHeader/>
          <Component21 />
          {/* <Component26 /> */}
        </div>
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default ContactPagePage;
