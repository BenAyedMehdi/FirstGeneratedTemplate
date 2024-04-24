import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button, Img, Text, Line, Input } from "components";
import { general } from "general";
import { toast } from 'react-toastify';

const Component21 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      //! to be implemented in .env in production once we link the EmailJs service with Ecorebuild email 
      // SERVICE_ID:service_38xdw0x
      // TEMPLATE_ID:template_to9p96q
      .sendForm("service_38xdw0x", "template_to9p96q", form.current, {
        // PUBLIC_KEY:oh5f-_PYYg0KKG4ua
        publicKey: "oh5f-_PYYg0KKG4ua",
      })
      .then(
        () => {
          toast.success("Email sent successfully!", {
            theme: "colored"
          });
        },
        (error) => {
          toast.error("Failed to send email!", {
            theme: "colored"
          })
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col gap-11 items-center justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-900 tracking-[-1.08px] w-full"
              size="txtManropeExtraBold54"
            >
              Let's Rebuild an Eco-friendly environment together!
            </Text>
            <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-center w-full">
              <Text
                className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-600 text-lg"
                size="txtManropeRegular18Gray600"
              >
                Ready to bring your vision to life? . <br />
                Whether you have a question, a project idea, or just want to say
                hello, don't hesitate to reach out. <br />
                Your innovative ideas deserve the best solutions, and we are
                excited to hear about them!
              </Text>
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[10px] w-[182px]"
                src="images/generated/foosheekalogo.png"
                alt="rectangle5616"
              />
            </div>
          </div>

          <div className="bg-white-A700 border border-bluegray-100 border-solid flex md:flex-col flex-row gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-1 flex-col gap-10 items-start pl-10 justify-center w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <br />
                <div className="flex flex-col gap-1 items-start mt-4 justify-start w-full">
                  <Text
                    className="text-gray-900 text-2xl tracking-[-0.40px] w-auto"
                    size="txtManropeExtraBold28"
                  >
                    {general.name}
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeSemiBold18Gray600"
                  >
                    <>
                      {general.address}
                      <br />
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_call.svg"
                      alt="call_One"
                    />
                    <Text
                      className="flex-1 text-gray-900 text-xl w-auto"
                      size="txtManropeExtraBold28"
                    >
                      {general.phone}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_mail_gray_600_24x24.svg"
                      alt="mail_One"
                    />
                    <Text
                      className="flex-1 text-gray-900 text-xl w-auto"
                      size="txtManropeExtraBold28"
                    >
                      {general.email}
                    </Text>
                  </div>
                </div>
              </div>
              <div className= "flex flex-col gap-[13px] items-start justify-start w-full sm:w-full">
                <Text
                  className= "text-gray-900 text-2xl tracking-[-0.40px] w-auto"
                  size="txtManropeExtraBold28"
                >
                  Social
                </Text>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <a target="_blank" href={general.instagram}>
                    <Img
                      className="h-[80px] w-[80px]"
                      src="images/img_instagram_orange_a700.svg"
                      alt="instagram"
                    />
                  </a>
                </div>
              </div>
              <Text
                className=" md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                size="txtManropeBold24Gray900"
              ></Text>
            </div>
            <Line className="bg-bluegray-100 h-[534px] md:h-px md:w-full w-px" />
            <div className="flex flex-1 flex-col items-center justify-start w-full py-10">
              <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
                <div className="flex flex-col gap-4">
                  <Text
                    className="text-2xl md:text-3xl text-gray-900 font-bold tracking-tight"
                    size="txtManropeExtraBold28"
                  >
                    Send a message
                  </Text>
                  <div className="flex flex-col gap-2">
                    <Input
                      name="user_name"
                      placeholder="Full Name"
                      className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg"
                      wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex items-center pl-4 pr-[35px] py-[17px] rounded-[10px] "
                      type="text"
                      required
                      prefix={
                        <Img
                          className="h-5 mr-3"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      }
                    ></Input>
                    <Input
                      name="user_email"
                      placeholder="Email Address"
                      className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg"
                      wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex items-center pl-4 pr-[35px] py-[17px] rounded-[10px]"
                      type="email"
                      required
                      prefix={
                        <Img
                          className="h-5 mr-3"
                          src="images/img_mail_gray_600_24x24.svg"
                          alt="mail"
                        />
                      }
                    ></Input>
                    <Input
                      name="user_phone_number"
                      placeholder="Phone Number"
                      className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg "
                      wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex items-center pl-4 pr-[35px] py-[17px] rounded-[10px] "
                      type="text"
                      required
                      prefix={
                        <Img
                          className="h-5 mr-3"
                          src="images/img_call.svg"
                          alt="call"
                        />
                      }
                    ></Input>
                    <Input
                      name="message"
                      className="font-semibold placeholder:text-gray-600 text-gray-600 text-lg w-full"
                      placeholder="Message"
                      wrapClassName="bg-white border border-gray-200 rounded-lg p-4 h-48" 
                      type="text"
                      required
                    ></Input>
                  </div>
                </div>
                <Button className="mt-4 bg-gray-400 hover:bg-gray-500 font-semibold py-4 rounded-lg text-white w-full text-lg">
                  SEND
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component21;
