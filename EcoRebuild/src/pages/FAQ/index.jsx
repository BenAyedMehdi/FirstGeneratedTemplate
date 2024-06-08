import React, { Component, useEffect } from "react";

// import Header from "components/Header";
import LandingPageHeader from "components/LandingPageHeader";
import LandingPageFooter from "components/LandingPageFooter";
import Component26 from "newComponents/Component26";

const FAQPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
      <LandingPageHeader/>
        <Component26 />
        <LandingPageFooter />

      </div>
    </>
  );
};

export default FAQPage;
