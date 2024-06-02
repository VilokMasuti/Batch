import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer  className="dark:text-white w-full flex flex-col sm:flex-row justify-center items-center sm:items-start  max-sm:ml-0 sm:ml-10 lg:mt-[450px] sm:mt-0 lg:gap-20  max-sm:gap-8  max-sm:mt-[800px]">
        <div className="dark:text-white flex flex-col items-center sm:items-start gap-3">
          <Image src={logo} alt="logo" width={100} height={100} className="max-sm:w-[150px]" />
          <div className="flex gap-3 items-center">
            <MdOutlineMailOutline size={20} color="#FF5555" />
            <p className="text-black text-sm dark:text-white font-semibold uppercase">
              help@frybix.com
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <FaPhoneAlt size={20} color="#FF5555" />
            <p className="text-black text-sm dark:text-white font-semibold uppercase">
              +1234 456 678 89
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-3 mt-8 sm:mt-0">
          <h1 className="dark:text-white font-extrabold text-xl sm:text-2xl uppercase font-mono">Links</h1>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">home</p>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">about us</p>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">Bookings</p>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">blog</p>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2 mt-8 sm:mt-0">
          <h1 className="dark:text-white font-extrabold text-xl sm:text-2xl uppercase font-mono">Legal</h1>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">terms of use</p>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">privacy policy</p>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">cookie policy</p>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2 mt-8 sm:mt-0">
          <h1 className="dark:text-white font-extrabold text-xl sm:text-2xl uppercase font-mono">Product</h1>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">take tour</p>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">live chat</p>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">reviews</p>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2 mt-8 sm:mt-0">
          <h1 className="dark:text-white font-extrabold text-xl uppercase font-mono">Newsletter</h1>
          <p className="dark:text-white text-black text-sm font-semibold uppercase">Stay up to date</p>
          <input
            type="email"
            placeholder="Your email"
            className="  border-none  dark:text-white text-black text-center text-sm font-semibold p-2"
          />
               <button className=" max-sm:ml-[10px] lg:mt-[-47px] lg:ml-[260px] max-sm:mt-2 w-[150px]  border  animate-shimmer border-slate-800 py-3 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[length:200%_100%] px-7 font-medium  text-white  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Subscribe
      </button>
        </div>
      </footer>
      <div className="lg:flex lg:flex-col max-sm:ml-[60px] ml-[455px] mt-[45px] max-sm:mt-[] gap-3">
        <p className="border-[1px] w-[920px] ml-[-297px] max-sm:w-[450px] max-sm:ml-[-60px]"></p>
        <p className="dark:text-white text-black text-sm font-semibold uppercase mt-2">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
