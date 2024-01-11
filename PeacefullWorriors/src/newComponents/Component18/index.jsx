import React from "react";

import { Button, Img, Text, List } from "components";
import LandingPageCard from "components/LandingPageCard";
import Component181 from "newComponents/Component181";
import Component182 from "newComponents/Component182";

const Component18 = () => {
  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
  ];
  return (
    <>
      <div className="flex flex-1 flex-col gap-[58px] items-center justify-start mx-auto w-full z-[1]">
        <Component181 />
        <Component182 />
      </div>
    </>
  );
};

export default Component18;
