import React from "react";

import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component0 from "newComponents/Component0";
import Component23 from "newComponents/Component23";
import Component7 from "newComponents/Component7";

const BlogDetailsPage = () => {

  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[111px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <LandingPageHeader />
        <Component23 />
        <Component7 />
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default BlogDetailsPage;
