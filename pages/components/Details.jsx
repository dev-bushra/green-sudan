import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DetailBox = ({ head, para, image, darkimg }) => {
  return (
    <div className="flex gap-4 items-center mt-4 dark:text-white ">
      <img src={image} alt="logo" className="w-14 dark:hidden" />
      <img src={darkimg} alt="logo" className="w-14 hidden dark:inline-block" />
      <div className="w-full lg:w-4/6 ">
        <h1 className="text-base lg:text-xl font-bold text-primaryText dark:text-white">
          {head}
        </h1>
        <p className="text-sm lg:text-lg">{para}</p>
      </div>
    </div>
  );
};
const Details = () => {
  return (
    <>
      <section className="block lg:flex px-4 lg:px-16 mt-24 lg:mt-64">
        <div className="font-body w-full lg:w-5/6 dark:text-white ">
          <h1 className=" text-primaryText dark:text-white text-4xl md:text-6xl lg:text-7xl lg:text-[64px] font-bold  text-center lg:text-left mb-8">
          Global <span className="text-mainGreen">Green</span> is a partner of the Earth
          </h1>
          <p className="text-sm lg:text-lg text-primaryText w-full lg:w-5/6 dark:text-white  text-center lg:text-left">
          We stand at a critical moment in Earth’s history, a time when humanity must choose its future.{" "}
          </p>
          <article>
            <DetailBox
              head="Download Green Sudan App"
              para="Start by downloading plants care app"
              image="/phone.png"
              darkimg="darkphone.png"
            />
            <DetailBox
              head="Create account"
              para="Start by creating an account"
              image="/phone.png"
              darkimg="darkpeop.png"
            />
            <DetailBox
              head="Move forward"
              para="Muniversal human rights, economic justice"
              image="/phone.png"
              darkimg="darkbank.png"
            />
            <DetailBox
              head="Bring forth"
              para="Smagnificent diversity of cultures and life forms"
              image="/phone.png"
              darkimg="darkdollar.png"
            />
          </article>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="/img-1.png"
            className="flex-1 w-5/6 lg:w-full mx-auto h-full dark:hidden"
          />
          <img
            src="/img-1.png"
            className="flex-1 w-5/6 lg:w-full mx-auto h-full hidden dark:block"
          />
        </div>
      </section>

      <div className="flex flex-col-reverse lg:flex-row gap-12 px-4 lg:px-12 mt-24 lg:mt-64">
        <img
          src="/img-2.png"
          className=" w-5/6 mx-auto lg:w-1/2 dark:hidden"
        />
        <img
          src="/img-2.png"
          className=" w-5/6 mx-auto lg:w-1/2 hidden dark:inline-block"
        />
        <div className="font-body w-full lg:w-4/6 dark:text-white text-primaryText text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold mb-8">
            Our pathway to <span className="text-mainGreen"> Green </span> Future and Clean Air.
          </h1>
          <p className="text-sm lg:text-base mb-8  ">
          Global Green is honored to announce that longtime board member and dedicated green advocate Kai Milla Morris is expanding her role with the organization
          </p>
          <div className="flex justify-between items-center py-4 bg-[#F2F8F2] dark:bg-[#313C42] px-4 rounded-md shadow-md">
            <h1 className="lg:text-lg text:base">What is Green Sudan?</h1>
            <span>
              <MdOutlineKeyboardArrowDown
                className="text-mainGreen"
                size="32px"
              />
            </span>
          </div>
          <div className="flex justify-between items-center py-4 bg-[#F2F8F2] dark:bg-[#313C42] px-4 rounded-md shadow-md my-6">
            <h1 className="lg:text-lg  text:base">How is good is it?</h1>
            <span>
              <MdOutlineKeyboardArrowDown
                className="text-mainGreen"
                size="32px"
              />
            </span>
          </div>
          <div className="flex justify-between items-center py-4 bg-[#F2F8F2] dark:bg-[#313C42] px-4 rounded-md shadow-md ">
            <h1 className="lg:text-lg text:base">
              What do I gain from it?
            </h1>
            <span>
              <MdOutlineKeyboardArrowDown
                className="text-mainGreen"
                size="32px"
              />
            </span>
          </div>
        </div>
      </div>

      <section className="block lg:flex px-4 lg:px-16 mt-24 lg:mt-64">
        <div className="font-body w-full lg:w-5/6 dark:text-white ">
          <h1 className=" text-primaryText dark:text-white text-4xl md:text-6xl lg:text-7xl lg:text-[64px] font-bold  text-center lg:text-left mb-8">
            Why choose <span className="text-mainGreen">GreenSudan</span>
          </h1>
          <p className="text-sm lg:text-lg text-primaryText w-full lg:w-5/6 dark:text-white  text-center lg:text-left">
          Join us in a race against time to develop innovative solutions and create meaningful change to make a difference in the fight against climate change and become a:{" "}
          </p>
          <article>
            <DetailBox
              para="Global Green member"
              image="/1.1.png"
              darkimg="dark1.1.png"
            />
            <DetailBox
              para="Global Green motivitor"
              image="/2.2.png"
              darkimg="dark2.2.png"
            />
            <DetailBox
              para="Green guids"
              image="/3.3.png"
              darkimg="dark3.3.png"
            />
            <DetailBox
              para="Green member"
              image="/4.4.png"
              darkimg="dark4.4.png"
            />
          </article>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="/img-3.png"
            className="w-5/6 lg:w-full mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Details;
