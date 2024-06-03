"use client";
import star from "../../../public/assets/star.png";
import Image from "next/image";
import React from "react";
import ganta from "../../../public/assets/ganta.png";
import e from "../../../public/assets/e.png";
import ering from "../../../public/assets/ering.png";
import Mockup from "../../../public/assets/iPhoneFront.png";
import iphonesss from "../../../public/assets/iphonesss.png";
import { motion } from "framer-motion";
import icon from "../../../public/assets/Icon.png";
const Advatnage = () => {
  const separate = {
    hidden: { opacity: 0, y: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      y: custom * 5,
      transition: { duration: 2.5 },
    }),
  };

  const additionalDivVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 3 } },
  };

  return (
    <>
    <section className="relative flex max-sm:flex max-sm:ml-[5px] gap-28 max-sm:flex-col mt-[70px] max-sm:mt-[150px]">
              <motion.div
                    variants={additionalDivVariants}
                    initial="hidden"
                    animate="visible"
              >
                    <h5 className="text-[#FF5555] max-sm:ml-[125px] font-semibold ml-[50px] max-sm:p-3 font-mono text-xl uppercase tracking-wider">
                          advatnages
                    </h5>
                    <h1 className="font-extrabold uppercase dark:text-white ml-[50px] max-sm:ml-[40px] max-sm:text-3xl text-black text-4xl font-sans">
                          why choose Uifry?
                    </h1>
                    <div className="flex items-center mb-2 mt-10 max-sm:mt-10">
                          <Image
                                src={ganta}
                                alt="logo"
                                width={30}
                                height={30}
                                className=" max-sm:ml-[50px] ml-[50px] " />
                          <h1 className="ml-2 max-sm:ml-5 dark:text-white text-black text-2xl font-extrabold">
                                Clever notifications
                          </h1>
                    </div>
                    <p className="text-sm max-sm:text-center max-sm:ml-[-10px] max-sm:w-[400px] text-left w-[550px] text-slate-500 ml-[55px] pt-2">
                          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
                          ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
                          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
                          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
                          suspendisse aliquam.
                    </p>
              </motion.div>
              <motion.div
                    variants={additionalDivVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative max-sm:ml-[-50px] mt-[-25px] w-[500px] h-[500px]"
              >
                    <Image
                          src={e}
                          alt="logo"
                          width={600}
                          height={600}
                          className="absolute  animate-pulse duration-1000 top-0 left-0" />
                    <Image
                          src={ering}
                          alt="logo"
                          width={500}
                          height={500}
                          className="absolute top-0 left-0 mt-[-40px] ml-[-20px]" />
                    <Image
                          src={Mockup}
                          alt="logo"
                          width={400}
                          height={400}
                          className="absolute top-0 left-0 mt-[-50px] ml-[95px]" />
              </motion.div>
              {/* New animated div */}
    <div className=" lg:ml-[-800px] max-sm:hidden animate-pulse duration-1000 lg:mt-[400px]"> 
    
     

       <Image
         src={star}
         alt="logo"
         width={50}
         height={50}
         className="  "
       />
     
    </div>
        </section>
        {/*----=--------- ---------------------------------------------------------------------------------------------------------------- */}
        <section className="relative flex max-sm:flex max-sm:ml-[5px] gap-28 max-sm:flex-col mt-[90px] max-sm:mt-[150px]">
        <motion.div
                    variants={additionalDivVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative max-sm:ml-[-50px] mt-[-25px] w-[500px] h-[500px]"
              >
                    <Image
                          src={e}
                          alt="logo"
                          width={600}
                          height={600}
                          className="absolute animate-pulse duration-1000 top-0 left-0" />
                    <Image
                          src={ering}
                          alt="logo"
                          width={500}
                          height={500}
                          className="absolute top-0 left-0 mt-[-40px] ml-[-20px]" />
                    <Image
                          src={iphonesss}
                          alt="logo"
                          width={400}
                          height={400}
                          className="absolute top-0 left-0 mt-[-50px] ml-[95px]" />
              </motion.div>
              <motion.div
                    variants={additionalDivVariants}
                    initial="hidden"
                    animate="visible"
                    className=" "
              >
              
                    <div className="flex items-center mb-2 mt-10 max-sm:mt-[-60px]">
                          <Image
                                src={icon}
                                alt="logo"
                                width={30}
                                height={30}
                                className=" max-sm:ml-[20px] ml-[50px] " />
                          <h1 className="ml-2 max-sm:ml-5 dark:text-white max-sm:text-2xl text-black text-4xl font-extrabold">
                          Fully Customizable
                          </h1>
                    </div>
                    <p className="text-sm max-sm:text-center max-sm:ml-[-20px] max-sm:w-[400px] text-left w-[550px] text-slate-500 ml-[65px] pt-2">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                    </p>
              </motion.div>
              <div className=" max-sm:hidden ml-[-200px] animate-pulse duration-1000 mt-[400px]"> 
    
     

    <Image
      src={star}
      alt="logo"
      width={50}
      height={50}
      className="  "
    />
  
 </div>
              </section>
              </>
  );
};

export default Advatnage;
