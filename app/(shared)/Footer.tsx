import React from "react";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { taintObjectReference } from "next/dist/server/app-render/entry-base";
const Footer = () => {
  return (
    <><footer id="Pricing" className="   dark:text-white w-full max-sm:flex-col  max-sm:ml-[-10px] h-[170px] flex max-sm:flex ml-[100px]  items-center mt-[36%]  max-sm:mt-[200%] ">
      <div className="dark:text-white flex flex-col ml-8  gap-3">
        <Image src={logo} alt="logo" width={100} height={100} className=" max-sm:w-[150px]" />
        <span className="flex gap-3 ml-1">
          <MdOutlineMailOutline size={20} color="#FF5555" />
          <p className="  text-black text-sm dark:text-white  font-semibold uppercase">
            help@frybix.com{" "}
          </p>
        </span>
        <span className="flex gap-3 ml-1">
          <FaPhoneAlt size={20} color="#FF5555" />
          <p className="  text-black text-sm dark:text-white font-semibold ppercase">
            +1234 456 678 89
          </p>
        </span>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}

      <div className=" flex flex-col ml-[100px] max-sm:ml-[50px]  mt-[50px] gap-3">
        <h1 className="dark:text-white  font-extrabold  text-xl max-sm:text-2xl max-sm:uppercase max-sm:ml-[-10px] text-black font-mono"> Links </h1>

        <p className="dark:text-white  text-black text-sm  max-sm:tracking-widest  max-sm:ml-[-10px]  font-semibold uppercase">home </p>

        <p className="dark:text-white  text-black text-sm  max-sm:tracking-widest max-sm:ml-[-10px]  font-semibold ppercase">about us</p>
        <p className="dark:text-white  text-black text-sm max-sm:tracking-widest max-sm:ml-[-10px]   font-semibold ppercase">Bookings</p>
        <p className="dark:text-white  text-black text-sm  max-sm:tracking-widest max-sm:ml-[-10px]  font-semibold ppercase">blog</p>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------------- */}
      <div className=" flex flex-col ml-[100px] mt-[29px] max-sm:ml-[60px]  gap-4">
        <h1 className="dark:text-white  font-extrabold text-xl text-black max-sm:text-2xl  max-sm:uppercase font-mono"> Legal </h1>

        <p className=" dark:text-white text-black text-sm  font-semibold uppercase">terms of use </p>

        <p className=" dark:text-white text-black text-sm  font-semibold ppercase">privacy policy</p>

        <p className=" dark:text-white text-black text-sm   font-semibold ppercase">cookie policy</p>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------- */}

      <div className=" flex flex-col ml-[100px] max-sm:ml-[50px] mt-[15px] max-sm:mt-7 gap-3">
        <h1 className="dark:text-white  font-extrabold text-xl max-sm:text-2xl text-black font-mono"> Product </h1>

        <p className=" dark:text-white text-black text-sm  font-semibold uppercase">  take tour </p>

        <p className="dark:text-white  text-black text-sm  font-semibold ppercase">  live chat</p>

        <p className=" dark:text-white text-black text-sm  font-semibold ppercase"> reveiws</p>
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------------  */}
      <div className=" flex flex-col ml-[100px] mt-[15px] max-sm:mt-7 max-sm:ml-[70px] gap-3">
        <h1 className=" dark:text-white font-extrabold text-xl text-black font-mono"> Newsletter</h1>

        <p className="dark:text-white  text-black text-sm  font-semibold uppercase">  Stay up to date</p>


        <span>

        </span>
        <p className="   text-slate-300 text-sm  font-semibold ppercase"> Your email </p>
      </div>


      <button className=" max-sm:ml-[60px] lg:mt-[100px] max-sm:mt-7 w-[150px]  border  animate-shimmer border-slate-800 py-3 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[length:200%_100%] px-7 font-medium  text-white  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Subscribe
      </button>

    </footer>
    <div className="lg:flex lg:flex-col  max-sm:ml-[60px] ml-[455px] mt-[45px] max-sm:mt-[155%] gap-3">
        <p className=" border-[1px] w-[920px] ml-[-297px] max-sm:w-[450px] max-sm:ml-[-60px]"> </p>
        <p className="  dark:text-white  text-black text-sm  font-semibold uppercase mt-2 ">Copyright 2022 uifry.com all rights reserved</p>
      </div></>
  )

};

export default Footer

