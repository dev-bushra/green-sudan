import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-44 bg-[#F2F8F2] dark:bg-[#354046] dark:text-white pt-12 px-8 text-center lg:text-left ">
        <section className="block lg:flex justify-between gap-28 border-b-2 pb-8 border-[#2632384F]">
          <div className="pb-4">
          <h1 className="font-black text-4xl">Yes. <br /><span className="font-light text-green-700 text-lg ">Green Sudan</span></h1>
            <p className="text-lg">
            Partner with us and other leading international organizations to make a significant positive impact on the environment, people’s lives, and your growth.
            </p>
          </div>
          {/* 2nd Flex */}
          <div className="p-5 my-5">
            <p className="text-lg my-5 py-3">
              Subscribe to stay tuned for new web design and latest updates.
              Let&rsquo;s do it!
            </p>
            <div className="md:bg-[#E9EBEB] py-3 md:py-1 px-8 md:px-2 mt-2 rounded-md block lg:flex justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className=" border-2 md:inline  md:w-auto text-center md:border-none md:outline-none md:bg-[#E9EBEB] font-medium text-black py-2 rounded-md md:py-0"
              />
              <a
                href="#"
                className="bg-mainGreen hover:bg-green-700 block md:inline py-2 lg:py-3 px-8 cursor-pointer my-2 lg:my-0 text-white rounded-lg shadow-md"
              >
                Subscribe
              </a>
            </div>
          </div>
          {/* 3rd Flex */}
          <div className="text-lg  p-5">
            <h1>Follow</h1>
            <div className="flex justify-center my-4 lg:justify-between gap-2 md:gap-8">
              <img src="/ig.png" alt="icon" className="dark:hidden" />
              <img src="/facebook.png" alt="icon" className="dark:hidden" />
              <img src="/twitter.png" alt="icon" className="dark:hidden" />
              <img
                src="/darkig.png"
                alt="icon"
                className="hidden dark:inline-block"
              />
              <img
                src="/darkfacebook.png"
                alt="icon"
                className="hidden dark:inline-block"
              />
              <img
                src="/darktwitter.png"
                alt="icon"
                className="hidden dark:inline-block"
              />
            </div>
          </div>
          {/* 4th Flex */}
          <div className="text-lg  pb-4">
            {/* <h1>Call</h1>
            <span>+24999199580</span> */}
          </div>
        </section>
      </div>
      <article className="block lg:flex justify-between bg-[#F2F8F2] dark:bg-[#354046]  text-primaryText dark:text-white pt-4 text-xs md:text-base p-5">
        <p className="text-center lg:text-left">© 2021 All Rights Reserved</p>
        <ul className="flex gap-2 mt-4 lg:mt-0 lg:gap-8 px-4 text-center lg:text-left">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Donations</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </article>
    </>
  );
};

export default Footer;
