import React from "react";

import { Button, Img, Text, List } from "components";
import LandingPageCard from "components/LandingPageCard";
import Component181 from "newComponents/Component181";
import Component182 from "newComponents/Component182";

const Component18 = () => {
  
  const projectsList = [
    {
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
      },
    },
    {
      name: "Menja",
      punchline: "Building a better future for food with IoT!",
      url: "https://menjateam.netlify.app/",
      type: "Website",
      tech: "MUI-React",
      description:
        "The project was developed by Menja to provide a smart farming solution",
      about:
        "Our mission is to give you full control over your food. We are here to help you growing your own fruits and vegetables. Now you can choose to decide, plant, monitor and eat the products you grow!",
      highlights: {
        category: "MVP",
        duration: "2 days",
        state: "Completed",
        date: "Oct 2022",
        other: "No Info",
      },
      customer: {
        name: "Menja team",
        rating: "5",
        reviews: "5 review",
        email: "menja@gmail.com",
        phone: "+65 0231 965 965",
        img: "images/projects/takeoff.jpg",
      },
      images: {
        img1: "images/projects/menja1.jpg",
        img2: "images/projects/menja2.jpg",
        img3: "images/projects/menja3.jpg",
      },
    },
  ];

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
