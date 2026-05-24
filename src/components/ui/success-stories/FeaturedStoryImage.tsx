"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedStoryImage = () => {
  return (
    <div
      className="
        relative
        min-h-[320px]
        md:min-h-[500px]
        flex
        items-center
        justify-center
        p-6
        md:p-10
      "
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-full
          max-w-[520px]
          aspect-square
          rounded-3xl
          bg-[#0F172A]
          flex
          items-center
          justify-center
          overflow-hidden
          shadow-[-10px_-10px_20px_rgba(255,255,255,0.02),10px_10px_20px_rgba(0,0,0,0.3)]
        "
      >
        <div className="w-[80%] h-[80%] relative rounded-3xl overflow-hidden flex items-center justify-center">
          <div className="bg-[#162034] w-full h-full absolute inset-0" />

          <Image
            src="/images/blogPreview.png"
            alt="Knowledge Insights"
            width={600}
            height={600}
            className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          />

          <div
            className="
            absolute 
            inset-0 
            w-full 
            h-full 
            bg-[#18233B]/75
            "
          />

          <div
            className="
            absolute
            w-[200px] h-[200px]
            rounded-full
            border-[2px]
            border-secondary
            opacity-50
            "
          />

          <div
            className="
            absolute
            w-[150px] h-[150px]
            rounded-full
            border-[2px]
            border-accent
            opacity-50
            "
          />

          <div
            className="
            absolute
            w-[150px] h-[150px]
            rounded-full
            bg-[radial-gradient(circle_at_center,rgba(130,170,200,0.6)_0%,rgba(74,100,138,0.2)_50%,transparent_100%)]
            blur-[5px]
            mix-blend-screen
            "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedStoryImage;
