import React from "react";

import { Button,  Img, Input, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component14 from "newComponents/Component14";
import Component15 from "newComponents/Component15";
import Component4 from "newComponents/Component4";

const ProjectPage = () => {
  const project = {
    name: "Smart SMS",
    punchline: "Stay connected even when disconnected!",
    url: "https://smartsms.netlify.app/",
    type: "Website",
    tech: "Figma-React",
    description:
      "The project was developed by TakeOff to provide GPT support via SMS",
    about:
      "We bring the future to the past. The next-gen phone services. No Internet No problem!",
    highlights: {
      category: "MVP",
      duration: "3 days",
      state: "Completed",
      date: "Nov 2023",
      other: "No Info",
    },
    customer: {
      name: "Take Off",
      rating: "5",
      reviews: "5 review",
      email: "takeoff@gmail.com",
      phone: "+65 0231 965 965",
      img: "images/projects/takeoff.jpg",
    },
    images: {
      img1: "images/projects/12.jpg",
      img2: "images/projects/11.jpg",
      img3: "images/projects/14.jpg",
    }
  };

  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
            <Component14 item={project}/>
            <Component15 project={project} />
          </div>
          <Component4 />
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ProjectPage;
