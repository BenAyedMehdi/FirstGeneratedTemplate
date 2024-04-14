import React from "react";

import { Button, Img, Text, CheckBox } from "components";
import Component502 from "newComponents/Component502";
import Component501 from "newComponents/Component501";

const Component5 = () => {
  return (
    <>
    <div className="bg-gray-51 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
      <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-center max-w-[1200px] mx-auto w-full">
        <Component501 />
        <Component502 />
      </div>
    </div>  
    </>
  );
};

export default Component5;
