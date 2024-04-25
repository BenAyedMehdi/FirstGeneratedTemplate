import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { Button, Img, Text, Line, Input } from "components";
import { general } from "general";

const Component21 = () => {

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    // SERVICE_ID:service_38xdw0x
    // TEMPLATE_ID:template_to9p96q
      .sendForm('service_38xdw0x', 'template_to9p96q', form.current, {
    // PUBLIC_KEY:oh5f-_PYYg0KKG4ua
        publicKey: 'oh5f-_PYYg0KKG4ua',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
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
              Let's Collaborate on Your Next Project
            </Text>
            <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-center w-full">
              <Text
                className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-600 text-lg"
                size="txtManropeRegular18Gray600"
              >
                Ready to bring your digital vision to life? I am here to help.{" "}
                <br />
                Whether you have a question, a project idea, or just want to say
                hello, don't hesitate to reach out. <br />
                Your innovative ideas deserve the best solutions, and I am
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
                <br/> 
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
              <div className="flex flex-col gap-[13px] items-start justify-start w-full sm:w-full">
                <Text
                    className="text-gray-900 text-2xl tracking-[-0.40px] w-auto"
                    size="txtManropeExtraBold28"
                  >
                  Social
                </Text>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <a target="_blank" href={general.facebook}>
                    <Img
                      className="h-[80px] w-[80px]"
                      src="images/img_clock_gray_600.svg"
                      alt="clock"
                    />
                  </a>
                  <a target="_blank" href={general.linkedin}>
                    <Img
                      className="h-[80px] w-[80px]"
                      src="images/img_linkedin_gray_600.svg"
                      alt="linkedin"
                    />
                  </a>
                  <a target="_blank" href={general.youtube}>
                    <Img
                      className="h-[80px] w-[80px]"
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </a>
                </div>
              </div>
              <Text
                    className=" md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  ></Text>
              <a target="_blank" href={require("../../assets/resume.pdf")}  className="cursor-pointer w-full">
              <Button className="bg-gray-200  text-xl font-semibold py-[17px] rounded-[10px] text-center  text-black w-full">
                View CV

              </Button>
              </a>
            </div>
            <Line className="bg-bluegray-100 h-[534px] md:h-px md:w-full w-px" />
            <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  Send a message
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Input
                    name="textfieldlarge"
                    placeholder="Full Name"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    type="text"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    }
                  ></Input>
                  <Input
                    name="textfieldlarge_One"
                    placeholder="Email Address"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    type="email"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_mail_gray_600_24x24.svg"
                        alt="mail"
                      />
                    }
                  ></Input>
                  <Input
                    name="textfieldlarge_Two"
                    placeholder="Phone Number"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    type="number"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    }
                  ></Input>
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col h-[152px] md:h-auto items-start justify-start px-[19px] py-3.5 rounded-[10px] w-full">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Message
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-gray-900 cursor-pointer font-semibold py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                SEND
              </Button>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default Component21;
