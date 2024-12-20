"use client";

import { motion } from "motion/react";

export default () => {
  return (
    <div className="h-screen">
      <img
        src="/images/duo-portrait/base.png"
        className="h-full object-cover"
      />
      <img
        src="/images/wordprint.png"
        className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl"
      />
      <a href="https://www.dubbycup.com/">
        <motion.div
          className="absolute bottom-20 left-0 z-10 flex flex-row items-center md:space-x-4 md:p-4 transform hover:scale-110 transition-transform"
          initial={{ left: "-100%" }}
          animate={{ left: 0, transition: { duration: 2 } }}
        >
          <img src="/images/DubbyCup.png" className="w-[100px]" />
          <span className="flex flex-col text-white text-4xl font-bold uppercase">
            <span className="w-fit px-2 py-1 bg-black">Tap</span>
            <span className="w-fit px-2 py-1 bg-black">to</span>
            <span className="w-fit px-2 py-1 bg-black">pre-order</span>
          </span>
        </motion.div>
      </a>
    </div>
  );
};
