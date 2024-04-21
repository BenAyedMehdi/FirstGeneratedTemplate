import React from "react";


import LandingPageHeader from "components/LandingPageHeader";
import Component8 from "newComponents/Component8";
import Component10 from "newComponents/Component10";
import Component4 from "newComponents/Component4";
import Component21 from "newComponents/Component21";
import Component9 from "newComponents/Component9";
import LandingPageFooter from "components/LandingPageFooter";
import Component7 from "newComponents/Component7";

const AboutUsPage = ({ projects }) => {

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <Component8 />
        <Component4 projects={projects} />
        <Component9 />
        <Component10 />
        <Component7 />
        <Component21 />
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
