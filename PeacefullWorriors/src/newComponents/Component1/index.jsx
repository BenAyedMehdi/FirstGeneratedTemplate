import React from "react";

import { Button, Img, Text, Input } from "components";

const Component1 = () => {
  return (
    <>
                <div className="bg-yellow-50 flex flex-col font-manrope items-start justify-start md:pl-10 sm:pl-5 pl-[120px] py-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px]"
                    size="txtManropeExtraBold46"
                  >
                    <>
                      Find a perfect property
                      <br />
                      Where you&#39;ll love to live
                    </>
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-xl"
                    size="txtManropeRegular20"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
                      <Button className="bg-gray-900 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-lg text-white-A700 w-full">
                        Buy
                      </Button>
                      <Button className="bg-gray-300 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
                        Sell
                      </Button>
                      <Button className="bg-gray-300 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
                        Rent
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Input
                          name="textfieldlarge"
                          placeholder="City/Street"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          }
                        ></Input>
                        <Input
                          name="textfieldlarge_One"
                          placeholder="Property Type"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_sort.svg"
                              alt="sort"
                            />
                          }
                        ></Input>
                        <Input
                          name="textfieldlarge_Two"
                          placeholder="Price Range"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_sort.svg"
                              alt="sort"
                            />
                          }
                        ></Input>
                      </div>
                      <Button className="bg-gray-900 cursor-pointer font-bold py-[17px] rounded-[10px] text-center text-lg text-white-A700 w-full">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[503px] md:h-auto object-cover w-full"
                  src="images/img_image.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
    </>
  );
};

export default Component1;
