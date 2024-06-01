"use client";
import Image from 'next/image';
import e from "../../public/assets/e.png";
import ering from "../../public/assets/ering.png";
import Mockup from "../../public/assets/iPhoneFront.png";
import { data } from "../Data/index";
import { motion } from "framer-motion";
const Features = () => {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };
  const MULTIDIRECTION_SLIDE_left_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    left: { opacity: 0, x: "25vw" },
  };
  return (
  
    <section
    
  
    className='relative flex max-sm:flex max-sm:flex-col mt-[50px]'>
      <motion.div
      
      initial="hidden"
      animate="visible"
      variants={MULTIDIRECTION_SLIDE_VARIANTS}
      transition={{ duration: 3 }}
      className='relative max-sm:ml-[-50px] mt-[250px] w-[500px] h-[500px]'>
        <Image
          src={e}
          alt="logo"
          width={600}
          height={600}
          className="absolute top-0 left-0"
        />
        <Image
          src={ering}
          alt="logo"
          width={500}
          height={500}
          className="absolute top-0 left-0 mt-[-40px] ml-[-20px]"
        />
        <Image
          src={Mockup}
          alt="logo"
          width={400}
          height={400}
          className="absolute top-0 left-0 mt-[-50px] ml-[95px]"
        />
      </motion.div>
      <motion.div 
      
      initial="hidden"
      animate="visible"
      variants={MULTIDIRECTION_SLIDE_left_VARIANTS}
      transition={{ duration: 3 }}
      className='lg:mt-[250px] lg:ml-[250px] w-[500px] h-[500px]'>
        <h5 className='text-[#FF5555] max-sm:ml-[150px] font-semibold font-mono text-xl tracking-wider'>FEATURES</h5>
        <h1 className='font-extrabold uppercase  dark:text-white  max-sm:ml-[5px]  max-sm:text-5xl text-black text-4xl font-sans'>uifry premium</h1>
        {data.features.map((item, index) => (
          <div className='flex flex-col mb-4' key={index}>
            <div className='flex items-center mb-2 mt-5 max-sm:mt-10'>
              <Image
                src={item.icon}
                alt='logo'
                width={30}
                height={30}
                className=' max-sm:ml-[100px]'
              />
              <h1 className='ml-3  dark:text-white text-black font-extrabold'>{item.title}</h1>
            </div>
            <p className=' text-sm max-sm:text-center max-sm:ml-[5px] max-sm:w-[400px]  text-slate-500 ml-1 pt-2'>{item.description}</p>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Features;
