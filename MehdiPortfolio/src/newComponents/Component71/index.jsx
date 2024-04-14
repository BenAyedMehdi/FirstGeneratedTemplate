import React from "react";

import { useNavigate } from "react-router-dom";
import { Img, Text } from "components";

const Component71 = ({ article }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
        <Img
          className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
          src={article.image}
          alt="image"
        />
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <Text
            className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
            size="txtManropeBold24"
          >
            {article.name}
          </Text>
          <a
            className="flex flex-row gap-2 items-center justify-start w-full sm:w-full"
            target="_blank"
            href={article.link}
          >
            <Text
              className="text-deep_orange-400 text-lg w-auto"
              size="txtManropeBold18Deeporange400"
            >
              Read the Article
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright_deep_orange_400.svg"
              alt="arrowright"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Component71;
