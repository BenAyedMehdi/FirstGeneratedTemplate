import React from "react";

import { Button, Img, Text, CheckBox } from "components";
import Component502 from "newComponents/Component502";
import Component501 from "newComponents/Component501";
import Component10 from "newComponents/Component10";

const Component5 = () => {
  return (
    <>
    <div className="bg-deep_orange-50 flex flex-col font-manrope items-center justify-center p-[10px] py-[40px] md:px-10 sm:px-5 w-full">
      <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-center max-w-[1200px] mx-auto w-full">
        <Component502 />
        {/* <Component501 /> */}
      </div>
    </div>  
    </>
  );
};

export default Component5;
