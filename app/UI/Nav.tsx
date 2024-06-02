"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import { ModeToggle } from "./toggle";
import MobNav from "./MobNav";
import { motion } from "framer-motion";
const Nav = () => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    transition={{ duration: 2 }}
    variants={variants1}
    className="max-w-full h-[50px] flex items-center justify-between px-4">
      {/* Logo for large and medium screens */}
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        variants={variants1}
      
      className="mt-2 hidden md:block lg:ml-[200px]">
        <Image src={logo} alt="logo" width={100} height={100} />
      </motion.div>
      {/* Logo for small screens */}
      <motion.div
      
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      variants={variants1}
      className="mt-2 md:hidden">
        <Image src={logo} alt="logo" width={120} height={120} />
      </motion.div>
      {/* Navigation Links for medium and large screens */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        variants={variants1}
      className="mt-2 lg:ml-[40px]    hidden md:flex gap-6 lg:gap-10">
        <Link href="/home">
          <span className="text-[#FF5555] font-semibold text-xl">Home</span>
        </Link>
        <Link href="/about">
          <span className="font-semibold">About us</span>
        </Link>
        <Link href="/pricing">
          <span className="font-semibold">Pricing</span>
        </Link>
        <Link href="/features">
          <span className="font-semibold">Features</span>
        </Link>
      </motion.div>
      {/* Download Button */}
      <motion.button
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        variants={variants1}
      className="  inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[length:200%_100%] px-7 font-medium  text-white  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 max-sm:hidden lg:ml-[350px]   py-2 ">
        Download
      </motion.button>
      {/* Mode Toggle */}
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
      className="ml-4">
        <ModeToggle />
      </motion.div>
      {/* Mobile Navigation */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
      className="md:hidden ml- max-sm:ml-[-120px]">
        <MobNav />
      </motion.div>
    </motion.div>
  );
};

export default Nav;
