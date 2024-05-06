import React, { Component } from "react";

// import Header from "components/Header";
import LandingPageHeader from "components/LandingPageHeader";
import LandingPageFooter from "components/LandingPageFooter";
import Component26 from "newComponents/Component26";

const FAQPage = () => {


  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 py-[19px] w-full" />
        <Component26 />
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />

      </div>
    </>
  );
};

export default FAQPage;
