"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.045]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 30]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -50]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.72],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#151d19]
      "
    >
      {/* BACKGROUND */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.055,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          scale: imageScale,
          y: imageY,

          /*
            Put your final image here:

            public/images/hero/talkora-therapy-hero.jpg
          */

          backgroundImage:
            "url('/images/hero/talkora-therapy-hero.jpg')",
        }}
        className="
          absolute
          inset-0
          bg-cover

          bg-[70%_center]

          sm:bg-[68%_center]
          md:bg-[66%_center]
          lg:bg-[62%_center]
          xl:bg-[60%_center]
          2xl:bg-center
        "
      />

      {/* GLOBAL OVERLAY */}
      <div className="absolute inset-0 bg-black/18" />

      {/* LEFT GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(11,16,13,0.92)_0%,rgba(11,16,13,0.78)_27%,rgba(11,16,13,0.44)_48%,rgba(11,16,13,0.10)_71%,rgba(11,16,13,0.10)_100%)]
        "
      />

      {/* TOP DEPTH */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/22
          via-transparent
          to-transparent
        "
      />

      {/* BOTTOM DEPTH */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/42
          via-transparent
          to-transparent
        "
      />

      {/* HERO CONTENT */}
      <Container
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          items-end

          pb-16
          pt-[135px]

          sm:pb-20

          md:pb-24
          md:pt-[150px]

          lg:items-center
          lg:pb-0
          lg:pt-[105px]
        "
      >
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="
            w-full
            max-w-[670px]
          "
        >
          {/* HEADING */}
          <h1
            className="
              display-font
              max-w-[700px]

              text-[clamp(3.7rem,6vw,6.4rem)]
              leading-[0.9]
              tracking-[-0.052em]
              text-white
            "
          >
            <span className="block overflow-hidden pb-[0.055em]">
              <motion.span
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: "0%",
                }}
                transition={{
                  duration: 0.95,
                  delay: 0.24,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                Better Thoughts,
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.065em]">
              <motion.span
                initial={{
                  y: "110%",
                }}
                animate={{
                  y: "0%",
                }}
                transition={{
                  duration: 0.95,
                  delay: 0.37,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                Better Living
              </motion.span>
            </span>
          </h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.72,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-[520px]

              text-[14px]
              leading-[1.85]
              text-white/82

              sm:text-[15px]
              md:text-[16px]
            "
          >
            Compassionate therapy and mental health support
            designed to help you understand yourself, manage
            life&apos;s challenges, and create a healthier,
            happier you.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.72,
              delay: 0.86,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <AnimatedButton
              href="#about"
              variant="peach"
              className="
                min-w-[170px]
                px-8
              "
            >
              Discover More
            </AnimatedButton>

   <motion.a
  href="#services"
  whileHover={{
    y: -2,
  }}
  whileTap={{
    scale: 0.985,
  }}
  transition={{
    duration: 0.22,
  }}
  className="
    group
    inline-flex
    min-h-[54px]
    min-w-[180px]
    items-center
    justify-center
    gap-3
    rounded-full

    bg-[#FBF8F3]
    px-8

    text-[14px]
    font-semibold
    text-[#173932]

    transition-colors
    duration-300

    hover:bg-[#F4B49C]
  "
>
  Our Services

  <ArrowRight
    size={18}
    strokeWidth={2}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}