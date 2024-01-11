import React, { Component } from "react";

import Header from "components/Header";

import Component26 from "newComponents/Component26";

const FAQPage = () => {


  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <Component26 />
      </div>
    </>
  );
};

export default FAQPage;
