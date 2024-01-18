import React from "react";

import Component181 from "newComponents/Component181";
import Component182 from "newComponents/Component182";
import { projectsList } from "mock/projects";

const Component18 = ({projects}) => {
  

  return (
    <>
      <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mx-auto w-full z-[1]">
        <Component181 />
        <Component182 projects={projectsList}/>
      </div>
    </>
  );
};

export default Component18;
