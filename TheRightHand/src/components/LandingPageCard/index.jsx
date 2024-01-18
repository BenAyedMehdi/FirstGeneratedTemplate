import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const LandingPageCard = ({ project }) => {

  const projectChoice = () => {
    console.log(project.id);
    localStorage.setItem("projectId", project.id);
  };

  return (
    <>
      <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
        <Img
          className="h-[260px] sm:h-auto object-cover w-full"
          alt="image"
          src={project?.images.img1}
        />
        <div className="bg-gray-51 border border-red-101 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img className="h-6 w-6" src="images/img_eye.svg" alt="eye" />
              <Text
                className="flex-1 text-base text-gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                {project?.name}
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start w-full">
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {project?.highlights.category}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {project?.highlights.state}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {project?.highlights.duration}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {project?.highlights.date}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[31px] items-center justify-start w-full">
              <Button onClick={projectChoice} className="bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] text-base text-center text-white-A700 w-full">
                <Link to="/projectdetails">View Details</Link>
              </Button>
              <Text
                className="flex-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                size="txtManropeBold24Gray900"
              >
                {project?.type}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageCard;
