import React from "react";

import { Button, Img, List, Text } from "components";
import LandingPageHeader from "components/LandingPageHeader";
import Component25 from "newComponents/Component25";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[116px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <LandingPageHeader/>
        <Component25 />
      </div>
    </>
  );
};

export default ErrorPage;
