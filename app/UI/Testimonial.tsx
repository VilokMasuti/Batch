"use client";

import React from "react";
import Image from "next/image";
import t from "../../public/assets/t.png";
import e from "../../public/assets/e.png";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { data } from "../Data/index";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const Testimonial = () => {
  return (
    <main className="p-4 max-sm:mt-12">
      <div className="text-center mb-8">
        <h5 className="text-zinc-950 dark:text-white font-semibold font-mono text-xl uppercase tracking-wider">
          Testimonial
        </h5>
        <h1 className="font-extrabold uppercase dark:text-white text-black text-5xl sm:text-3xl font-sans mt-2">
          What our users 
          say about us?
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={data.people} />
      </div>
      <section className="flex flex-col items-center ">
        <div className="relative w-[250px]  max-sm:ml-[50px] max-sm:w-[600px] ml-[100px] md:w-[500px] ">
          <Image
            src={e}
            alt="logo"
            width={700}
            height={700}
            className="absolute  top-0 left-0   animate-spin duration-1000"
          />
          <Image
            src={t}
            alt="logo"
            width={600}
            height={600}
            className="absolute top-0 left-0 mt-[-40px] ml-[-20px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[30rem] md:h-[25rem]  mt-[350px] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidde max-sm:mt-[400px] animate-shimmer">
            <InfiniteMovingCards
              items={data.testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
