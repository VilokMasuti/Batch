import React from "react";
import Image from "next/image";
import e from "../../public/assets/e.png";
import iew from "../../public/assets/iew.png";
import star from "../../public/assets/star.png";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TiVendorApple } from "react-icons/ti";

const Download = () => {
  return (
    <section className="relative max-sm:mt-[90px]  mt-[-60px] ">
      <Image
        src={star}
        alt="logo"
        width={50}
        objectFit="cover"
        className="object-center object-cover  absolute top-[300px] animate-pulse duration-1000 ml-[-40px]"
      />

      {/* Image */}
      <div className="relative max-sm:hidden w-full h-[400px]">
        <Image
          src={e}
          alt="logo"
          width={500}
          objectFit="cover"
          className="object-center object-cover ml-[-150px]"
        />
      </div>
      {/* Div on top of image */}
      <div className="absolute max-sm:flex max-sm:flex-col max-sm:h-[760px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1100px] mt-[300px] h-[500px] bg-neutral-950 flex antialiased rounded-md">
        <div className="flex flex-col max-sm:ml-[340px] ml-12 mt-[170px]">
          <h1 className="text-white uppercase font-mono font-extrabold max-sm:ml-[25px]   text-3xl">
            ready to get started?
          </h1>
          <p className="text-white font-medium max-sm:text-center max-sm:w-[410px] pt-2 text-sm">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <div className="">
            <button className="inline-flex max-sm:ml-[115px]  items-center justify-center px-4 py-2 bg-white mt-4 font-medium text-black border border-black rounded-md transition duration-300 hover:bg-black hover:text-white">
              Download app
              <TiVendorApple size={20} className="ml-2" />
            </button>
          </div>
        </div>
        <div className=" relative max-sm:ml-[190px]">
          <Image
            src={e}
            alt="logo"
            width={400}
            objectFit="cover"
            className="object-center  object-cover ml-[200px] mt-48"
          />
          <Image
            src={iew}
            alt="logo"
            width={500}
            objectFit="cover"
            className="object-center max-sm:w-[420px] object-cover ml-[84px] mt-[-470px] max-sm:ml-[150px] "
          />
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Download;
