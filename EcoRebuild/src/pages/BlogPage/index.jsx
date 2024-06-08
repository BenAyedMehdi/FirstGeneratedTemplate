import React from "react";

import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component1 from "newComponents/Component1";
import Component22 from "newComponents/Component22";

const BlogPagePage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
          <LandingPageHeader/>
          <Component22 />
        </div>
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default BlogPagePage;
