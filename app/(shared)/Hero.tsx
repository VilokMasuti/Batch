"use client";
import Image from "next/image";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import star from "../../public/assets/star.png";
import e from "../../public/assets/e.png";
import i13 from "../../public/assets/i13.png";
import ering from "../../public/assets/ering.png";
import iphone from "../../public/assets/iPhone.png";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import er from "../../public/assets/er.png";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const words = ["best", "EFFECTIVE", "bold", "correct", "future proof"];
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <>
      <div className=" mt-[50px]  max-sm:hidden">
        <Image
          src={star}
          alt="logo"
          width={50}
          height={50}
          className=" ml-[50px] animate-pulse duration-1000"
        />
      </div>

      <motion.section
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="  flex justify-between  mt-10 items-center   max-sm:flex max-sm:flex-col "
      >
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="lg:relative lg:mt-10 "
        >
          <Image
            src={e}
            alt="logo"
            width={500}
            height={500}
            className=" lg:ml-[150px] lg:mt-[-150px]  max-sm:ml-[100px]"
          />
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=' "absolute lg:ml-[100px] max-sm:text-center  max-sm:text-2xl max-sm:w-[500px]  mt-[-250px] max-sm:ml-[20px]  dark:text-white  font-extrabold tracking-widest transform -translate-x-1/2 -translate-y-1/2   text-left uppercase"font-bold text-4xl text-black text-balance uppercase '
          >
            make the <FlipWords words={words} /> <br /> financial decisions
          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="  ml-[100px]  max-sm:text-sm max-sm:mt-26 max-sm:text-center  max-sm:ml-[70px] max-sm:w-[400px] text-balance text-sm  mt-[20px] tracking-widest [w-900px] text-slate-400"
          >
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            <br /> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="lg:mt-10 lg:ml-[100px] flex gap-9 max-sm:ml-[100px] max-sm:mt-[40px]"
          >
            <button className="inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 py-2">
              Get started
              <BsArrowRight size={20} className="ml-2" />
            </button>
            <span className="mt-2 flex gap-2">
              <FaPlayCircle size={30} />
              <p className="font-semibold pt-1"> Watch Video</p>
            </span>
          </motion.div>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=" mt-[200px] "
          >
            <Image
              src={er}
              alt="logo"
              width={400}
              height={400}
              className=" ml-[40px] mt-[-150px] max-sm:ml-[50px]  max-sm:mt-[-130px]"
            />
          </motion.div>
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=" lg:flex lg:ml-[1000px] lg:mt-[-690px] max-sm:ml-[350px]"
          >
            <div className="mt-10 ml-[-300px] ">
              <div className="">
                <Image
                  src={ering}
                  alt="logo"
                  width={500}
                  height={500}
                  className=" mt-[-100px] lg:ml-[150px]   "
                />
                <Image
                  src={e}
                  alt="logo"
                  width={500}
                  height={500}
                  className=" mt-[-190px]  rotate-[200deg]  opacity-70"
                />
              </div>
              <div className=" mt-[-720px]">
                <Image
                  src={iphone}
                  alt="logo"
                  width={450}
                  height={450}
                  className=" mt-[-550px] ml-[-90px]  "
                />
                <Image
                  src={i13}
                  alt="logo"
                  width={450}
                  height={450}
                  className=" mt-[-550px] ml-[60px]  "
                />
                <Image
                  src={iphone}
                  alt="logo"
                  width={450}
                  height={450}
                  className=" mt-[-550px] ml-[160px]   "
                />
              </div>
            </div>
          </motion.div>
          {/* samll screen */}
          {/* <div className="mt-10 ml-[-300px] lg:hidden">
          <div className=" max-sm:mt-[200px]">
            <Image
              src={ering}
              alt="logo"
              width={550}
              height={550}
              className=" max-sm:mt-[-20px] max-sm:ml-[200px]   "
            />
          </div>
          <div className=" max-sm:mt-[500px] max-sm:ml-[360px] ">
            <Image
              src={iphone}
              alt="logo"
              width={350}
              height={350}
              className=" mt-[-750px]  "
            />
            <Image
              src={iphone}
              alt="logo"
              width={350}
              height={350}
              className=" mt-[-740px]  "
            />
            <Image
              src={iphone}
              alt="logo"
              width={350}
              height={350}
              className=" mt-[-750px]  "
            />
          </div>
          </div> */}
        </motion.div>
      </motion.section>
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className=" lg:mt-[-190px] max-sm:mt-[-200px] max-sm:ml-[90px] animate-pulse duration-1000"
      >
        <Image
          src={star}
          alt="logo"
          width={50}
          height={50}
          className=" lg:ml-[790px]  dark:white"
        />
      </motion.div>
    </>
  );
};

export default Hero;
