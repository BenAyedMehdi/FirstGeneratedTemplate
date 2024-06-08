import React from "react";

import { Text, Img } from "components";
import LandingPageCard from "components/LandingPageCard";

const Component182 = ({ projects }) => {
  const PROJECTS = projects ?? [];
  return (
    <>
      <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex sm:flex-col flex-row gap-[130px] items-center justify-center w-full">
          <Text
            className="leading-[140.00%] sm:text-[40px] md:text-[46px] my-8 text-[54px] text-center text-gray-900 tracking-[-1.08px]"
            size="txtManropeExtraBold54"
          >
            <>Our current projects</>
          </Text>
        </div>
        <div className=" flex flex-col gap-12 items-center justify-center w-full">
          <>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {PROJECTS.map((project) => (
                  <React.Fragment key={`LandingPageCard${project.id}`}>
                    <LandingPageCard
                      className="flex flex-1 flex-col h-full items-start justify-start w-full"
                      project={project}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Component182;
