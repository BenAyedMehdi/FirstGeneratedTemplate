import React, { useEffect }  from "react";

import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component18 from "newComponents/Component18";
import Component19 from "newComponents/Component19";
import Component20 from "newComponents/Component20";
import Component7 from "newComponents/Component7";

// TODO: Implement Projects and Project pages

const PortfolioPage = ({projects}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-deep_orange-50 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader/>
          <Component18 projects={projects} />
        </div>
        {/* <Component19 />
        <Component20 />  Client review */}
        
        <Component7 />
        <LandingPageFooter/>
      </div>
    </>
  );
};

export default PortfolioPage;
