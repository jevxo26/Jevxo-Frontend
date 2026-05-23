"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const KnowledgeInsights = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-12 md:py-16 lg:py-20 mt-16
      "
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              tracking-tight
              bg-gradient-to-r
              from-primary
              to-accent
              bg-clip-text
              text-transparent
            "
          >
            Knowledge & Insights
          </h2>

          <p
            className="
              mt-5
              text-muted
              text-sm
              md:text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Explore our latest thinking on digital transformation, enterprise
            strategy, and the technologies shaping the future of business.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="
            mt-14
            rounded-3xl
            overflow-hidden
            border
            border-card-border
            bg-card
            backdrop-blur-2xl
            shadow-[0_0_60px_rgba(0,0,0,0.35)]
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div
              className="
                relative
                flex
                flex-col
                justify-center
                p-8
                md:p-12
              "
            >

              {/* META */}
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-[10px]
                    font-bold
                    tracking-widest
                    uppercase
                    bg-secondary/25
                    text-secondary
                    border
                    border-secondary/50
                  "
                >
                  Featured
                </span>

                <span className="text-[11px] md:text-xs text-muted">
                  October 24, 2023 • 12 min read
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  text-foreground
                  max-w-xl
                "
              >
                The Quantum Leap in Enterprise AI Architecture
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  text-muted
                  text-sm
                  md:text-base
                  leading-relaxed
                  max-w-lg
                "
              >
                Discover how decentralized AI networks are redefining the
                concept of the &quot;digital empire&quot; and why legacy
                infrastructure is your biggest liability in 2024.
              </p>

              {/* AUTHOR */}
              <div className="flex items-center gap-4 mt-8">
                <div
                  className="
                    relative
                    size-12
                    rounded-full
                    overflow-hidden
                    border
                    border-white/10
                    bg-[#D8AB5A]/10
                    shrink-0
                  "
                >
                  <Image
                    src="/images/Author.png"
                    alt="Author"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Julian Voxo
                  </h4>

                  <p className="text-xs text-muted">Chief Architect</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                relative
                min-h-[320px]
                md:min-h-[500px]
                bg-[linear-gradient(180deg,#101B3B_0%,#111827_100%)]
                flex
                items-center
                justify-center
                p-6
                md:p-10
              "
            >
              {/* ambient glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle,rgba(46,124,246,0.18),transparent_60%)]
                "
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  w-full
                  max-w-[520px]
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/5
                  bg-white/[0.03]
                  backdrop-blur-xl
                  shadow-[0_0_60px_rgba(46,124,246,0.18)]
                "
              >
                <Image
                  src="/images/blogPreview.png"
                  alt="Knowledge Insights"
                  className="w-full h-auto object-cover"
                  fill
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeInsights;
