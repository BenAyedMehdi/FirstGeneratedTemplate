import React from "react";

import { Button, Img, Text, List } from "components";
import { projectsList } from "mock/projects";

const Component14 = ({item}) => {
  const project = item?? projectsList[0];
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <Img
              className="h-[550px] md:h-auto object-cover rounded-[10px] w-full"
              src={project?.images.img1}
              alt="rectangle5610"
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-6 h-[550px] md:h-auto items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[263px] sm:h-auto object-cover rounded-[10px] w-full"
              src={project?.images.img2}
              alt="rectangle5611"
            />
            <div className="h-[263px] relative w-96 sm:w-full">
              <Img
                className="h-[263px] m-auto object-cover rounded-[10px] w-full"
                src={project?.images.img3}
                alt="rectangle5612"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component14;
