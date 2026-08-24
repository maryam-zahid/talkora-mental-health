"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

const features = [
  {
    title: "Expert Therapists",
    description:
      "Experienced professionals combining clinical expertise with compassionate, human-centered care.",
    icon: UserRoundCheck,
  },
  {
    title: "Personalized Care",
    description:
      "Support shaped around your experiences, goals, preferences, and the pace that feels right for you.",
    icon: Sparkles,
  },
  {
    title: "Safe Environment",
    description:
      "A confidential, respectful space where you can speak openly, reflect honestly, and feel supported.",
    icon: ShieldCheck,
  },
  {
    title: "Holistic Approach",
    description:
      "Care that considers your emotional wellbeing, relationships, lifestyle, and personal goals together.",
    icon: HeartHandshake,
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [28, -24]
  );

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-[#FBF8F3]

        py-16
        md:py-20
        lg:py-24
        xl:py-28
      "
    >
      <Container>
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[1.08fr_0.92fr]
            lg:items-start

            xl:gap-14
          "
        >
          {/* =====================================================
              LEFT
          ====================================================== */}
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#173932]
              "
            >
              Why Choose Us
            </motion.p>

            {/* HEADING */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: false,
                amount: 0.18,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-[780px]

                display-font

                text-[clamp(2.8rem,4.2vw,4.7rem)]
                leading-[0.98]
                tracking-[-0.045em]

                text-[#173932]
              "
            >
              Providing compassionate
              <br />
              support and personalized care
            </motion.h2>

            {/* LINE */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 64,
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                h-[2px]
                bg-[#F4B49C]
              "
            />

            {/* INTRO */}
            <motion.p
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-[650px]

                text-[14px]
                leading-[1.8]

                text-[#62716B]

                md:text-[15px]
              "
            >
              Thoughtful mental healthcare begins with listening.
              We combine professional expertise, compassionate
              relationships, and individualized support to create
              care that feels genuinely centered around you.
            </motion.p>

            {/* =====================================================
                FEATURE CARDS
            ====================================================== */}
            <div
              className="
                mt-8

                grid
                gap-4

                sm:grid-cols-2
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                const comesFromLeft = index % 2 === 0;

                return (
                  <motion.article
                    key={feature.title}
                    initial={{
                      opacity: 0,

                      x: comesFromLeft
                        ? -120
                        : 120,

                      y: 30,

                      scale: 0.94,

                      filter:
                        "blur(8px)",
                    }}
                    whileInView={{
                      opacity: 1,

                      x: 0,

                      y: 0,

                      scale: 1,

                      filter:
                        "blur(0px)",
                    }}
                    viewport={{
                      once: false,
                      amount: 0.35,
                      margin: "-40px",
                    }}
                    transition={{
                      duration: 0.85,
                      delay:
                        index * 0.08,

                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    whileHover={{
                      y: -7,
                      scale: 1.015,
                    }}
                    className="
                      group
                      relative

                      overflow-hidden

                      rounded-[20px]

                      border
                      border-[#173932]/10

                      bg-[#F2E7DB]

                      p-5
                      md:p-6

                      shadow-[0_8px_24px_rgba(20,48,42,0.045)]

                      transition-shadow
                      duration-500

                      hover:shadow-[0_18px_42px_rgba(20,48,42,0.12)]
                    "
                  >
                    {/* NUMBER */}
                    <span
                      className="
                        absolute
                        right-5
                        top-5

                        text-[9px]
                        font-semibold
                        tracking-[0.18em]

                        text-[#173932]/30

                        transition-colors
                        duration-300

                        group-hover:text-[#D78668]
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* ICON */}
                    <motion.div
                      whileHover={{
                        y: -3,
                        rotate: 7,
                        scale: 1.1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 290,
                        damping: 18,
                      }}
                      className="
                        flex
                        size-10
                        items-center
                        justify-center

                        rounded-full

                        bg-[#F4B49C]

                        text-[#173932]
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </motion.div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-5

                        display-font

                        text-[23px]
                        leading-[1.05]
                        tracking-[-0.025em]

                        text-[#173932]

                        transition-all
                        duration-300

                        group-hover:translate-x-[3px]
                        group-hover:text-[#D78668]
                      "
                    >
                      {feature.title}
                    </h3>

                    {/* DIVIDER */}
                    <div
                      className="
                        mt-4
                        h-px
                        overflow-hidden

                        bg-[#173932]/12
                      "
                    >
                      <span
                        className="
                          block
                          h-full
                          w-0

                          bg-[#F4B49C]

                          transition-all
                          duration-500

                          group-hover:w-full
                        "
                      />
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-3

                        text-[12px]
                        leading-[1.65]

                        text-[#586761]

                        transition-colors
                        duration-300

                        group-hover:text-[#354A43]
                      "
                    >
                      {feature.description}
                    </p>

                    {/* BOTTOM LINE */}
                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0

                        h-[3px]

                        origin-left
                        scale-x-0

                        bg-[#F4B49C]

                        transition-transform
                        duration-500

                        group-hover:scale-x-100
                      "
                    />
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              RIGHT
          ====================================================== */}
          <div className="lg:pt-4">
            <motion.div
              style={{
                y: imageY,
              }}
              initial={{
                opacity: 0,

                x: 120,

                scale: 0.94,

                filter:
                  "blur(10px)",
              }}
              whileInView={{
                opacity: 1,

                x: 0,

                scale: 1,

                filter:
                  "blur(0px)",
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.95,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                relative

                overflow-hidden

                rounded-[22px]

                bg-[#E8DDD2]
              "
            >
              <motion.img
                /*
                 * IMPORTANT:
                 *
                 * This points to one of your existing
                 * Services images, so you should definitely
                 * see it if that image is already working.
                 */
                src="/images/services/individual-therapy.jpg"
                alt="Therapist supporting a client"
                initial={{
                  scale: 1.1,
                }}
                whileInView={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.07,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  block

                  aspect-[1.18/1]

                  w-full

                  object-cover
                  object-center
                "
              />

              {/* IMAGE HOVER TINT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-[#173932]/0

                  transition-colors
                  duration-500

                  group-hover:bg-[#173932]/5
                "
              />
            </motion.div>

            {/* TEXT */}
            <motion.p
              initial={{
                opacity: 0,
                y: 32,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                mt-6
                max-w-[520px]

                text-[14px]
                leading-[1.8]

                text-[#62716B]
              "
            >
              From your first conversation onward, our goal is
              to make your care feel clear, comfortable, and
              genuinely supportive.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{
                opacity: 0,
                y: 26,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.65,
                delay: 0.16,
              }}
              className="mt-6"
            >
              <AnimatedButton
                href="#specialists"
                variant="peach"
                className="min-w-[145px]"
              >
                Meet Our Team
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}