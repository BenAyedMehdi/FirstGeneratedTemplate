import React from "react";

import { Slider, Img, Text, List } from "components";

const Component6 = () => {
  
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
    <div className="flex flex-col font-manrope gap-6 items-start justify-start w-full">
      <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[215px] w-full">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          className="max-w-[1010px] mx-auto w-full"
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start mx-2.5">
                <Img
                  className="flex-1 md:flex-none h-[344px] sm:h-auto object-cover rounded-lg w-full"
                  src="images/img_rectangle5591.png"
                  alt="rectangle5591"
                />
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-center justify-start w-full">
                      <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                          size="txtManropeExtraBold28"
                        >
                          Taylor Wilson
                        </Text>
                        <Text
                          className="text-gray-900 text-lg w-full"
                          size="txtManropeSemiBold18"
                        >
                          Product Manager - Static Mania
                        </Text>
                      </div>
                      <Img
                        className="h-[51px] max-h-[51px] sm:w-[]"
                        src="images/img_shape.svg"
                        alt="shape"
                      />
                    </div>
                    <Text
                      className="leading-[165.00%] max-w-[455px] md:max-w-full text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                      size="txtManropeSemiBold24"
                    >
                      Eget eu massa et consectetur. Mauris donec. Leo a, id
                      sed duis proin sodales. Turpis viverra diam porttitor
                      mattis morbi ac amet. Euismod commodo. We get you
                      customer relationships that last.{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
      <div className="flex flex-row gap-[30px] items-start justify-between pl-[770px] pr-[215px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <Text
            className="text-gray-604 text-lg w-auto"
            size="txtManropeBold18"
          >
            Previews
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Text
            className="text-lg text-orange-A700 w-auto"
            size="txtManropeBold18OrangeA700"
          >
            Next
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Component6;
