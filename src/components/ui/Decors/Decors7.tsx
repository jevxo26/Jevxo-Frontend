"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const floatingAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

const Decors7 = () => (
  <>
    <motion.div
      variants={floatingAnimation}
      animate="animate"
      className="absolute lg:-top-30 lg:-right-60 md:-top-20 md:-right-30 md:w-[300px] md:h-[375px] lg:w-[400px] lg:h-[500px] rounded-full bg-[#121E3D] blur-[200px] pointer-events-none z-10"
    />
    <div className="absolute md:top-20 lg:-top-10 -left-30 opacity-80 z-10 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-top-left">
      <Image width={100} height={100} src="/decors/ellipse3.png" alt="" />
    </div>
    <div className="absolute bottom-40 md:-right-5 lg:-right-30 opacity-80 z-20 scale-[0.5] md:scale-[0.75] lg:scale-100 origin-right">
      <Image
        width={100}
        height={100}
        src="/decors/ellipse2.png"
        alt=""
        className="w-60"
      />
    </div>
  </>
);

export default Decors7;
