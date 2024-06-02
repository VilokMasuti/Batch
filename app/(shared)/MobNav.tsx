import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";

const MobNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          MENU
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>MENU</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className=" flex-col text-center flex gap-10 mt-10 ">
            <Link href={"/home"}>
              <span className=" text-[#FF5555] font-semibold text-xl ">
                {" "}
                Home
              </span>
            </Link>
            <Link href={"/home"} className=" pt-1">
              <span className="  Light:text-black    font-semibold  ">
                {" "}
                About us
              </span>
            </Link>
            <Link href={"/home"} className=" pt-1">
              <span className=" Light:text-black    font-semibold  ">
                {" "}
                Pricing
              </span>
            </Link>
            <Link href={"/home"} className=" pt-1">
              <span className=" Light:text-black    font-semibold  ">
                {" "}
                Features
              </span>
            </Link>
            <Link href="https://www.uifry.com/">
            <button className="  text-white  inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 lg:block">
              Download
            </button>
            </Link>
            
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobNav;
