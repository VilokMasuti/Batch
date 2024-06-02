"use client";
import React from "react";
import { motion } from "framer-motion";
import { data } from "../../Data/index";
import { CheckCircleIcon } from "lucide-react";

const Pricing = () => {
  return (
    <section className="p-8">
      <div className="text-center mb-12">
        <h2 className="text-zinc-950 dark:text-white font-semibold font-mono text-xl uppercase tracking-wider">
          Pricing Plans
        </h2>
        <p className="font-extrabold uppercase dark:text-white text-black text-5xl sm:text-3xl font-sans mt-2">
          Choose the plan that suits you best
        </p>
      </div>
      <div className="flex  flex-col md:flex-row md:px-0">
        {data.pricing.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full md:w-1/3 rounded-md border animate-shimmer  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 flex items-center justify-center`}
          >
            <div className="p-6">
              <h3 className="text-lg">{plan.plan}</h3>
              <p className="mt-1">
                <span className="font-bold text-4xl">{plan.price}</span> /Month
              </p>
              <p className="text-sm mt-2 ">{plan.title}</p>
              <ul className="text-sm mt-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="my-2 flex items-center">
                    <CheckCircleIcon className="mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full rounded py-4 mt-4  text-black     bg-white  hover:animate-pulse  transition duration-150 ease-in-out">
                Choose Plan
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
