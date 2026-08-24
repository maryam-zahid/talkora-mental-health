"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

const mentalStates = [
  {
    id: "anxiety",
    label: "Anxiety",
    number: "01",
    title: "When your mind won’t slow down.",
    description:
      "Persistent worry, racing thoughts, tension, or feeling constantly on edge can make even ordinary moments feel overwhelming.",
    support:
      "Therapy can help you understand anxious patterns, develop practical coping skills, and feel more grounded in everyday life.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "low-mood",
    label: "Low Mood",
    number: "02",
    title: "When everything feels a little heavier.",
    description:
      "Low motivation, reduced enjoyment, tiredness, and emotional distance can affect how you connect with yourself and the people around you.",
    support:
      "The right support can help you understand what you’re experiencing and gradually reconnect with the things that matter.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "burnout",
    label: "Burnout",
    number: "03",
    title: "When you’ve been carrying too much.",
    description:
      "Long periods of pressure can leave you emotionally exhausted, disconnected, irritable, and struggling to find motivation.",
    support:
      "Together, we can identify what is draining you and explore healthier boundaries, recovery, and ways of moving forward.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "sleep",
    label: "Sleep",
    number: "04",
    title: "When your body is tired but your mind is awake.",
    description:
      "Stress, worry, routines, and emotional overload can make it difficult to fall asleep, stay asleep, or wake feeling restored.",
    support:
      "Support can help uncover what may be disrupting your rest and create healthier patterns around sleep and recovery.",
    image:
      "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "adhd",
    label: "ADHD",
    number: "05",
    title: "When focus feels difficult to hold.",
    description:
      "Challenges with attention, organization, time management, or emotional regulation can create frustration in everyday life.",
    support:
      "Personalized support can help you better understand your attention patterns and develop strategies that work with your strengths.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "stress",
    label: "Stress",
    number: "06",
    title: "When everything starts feeling like too much.",
    description:
      "Ongoing pressure can affect concentration, sleep, mood, relationships, and physical wellbeing even when you’re still managing to keep going.",
    support:
      "Therapy can help you understand your triggers, create breathing room, and develop healthier ways to respond to pressure.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function MentalStateSection() {
  const [activeId, setActiveId] =
    useState("anxiety");

  const activeState =
    mentalStates.find(
      (state) => state.id === activeId
    ) ?? mentalStates[0];

  return (
    <section
      id="mental-states"
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
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            grid
            gap-8

            lg:grid-cols-[1fr_0.68fr]
            lg:items-end
          "
        >
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
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
              How Have You Been Feeling?
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 44,
                filter: "blur(9px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: false,
                amount: 0.16,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-[780px]

                display-font

                text-[clamp(2.8rem,4.4vw,4.9rem)]
                leading-[0.98]
                tracking-[-0.045em]

                text-[#173932]
              "
            >
              Understanding what you&apos;re
              <br />
              carrying is a good place to begin.
            </motion.h2>

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
              }}
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                h-[2px]
                bg-[#F4B49C]
              "
            />
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 24,
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
              duration: 0.72,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[470px]

              text-[14px]
              leading-[1.8]

              text-[#62716B]

              lg:ml-auto

              md:text-[15px]
            "
          >
            You don&apos;t need to have the
            perfect words or know exactly what&apos;s
            wrong. Start with what feels most
            familiar to you right now.
          </motion.p>
        </div>

        {/* =====================================================
            INTERACTIVE EXPERIENCE
        ====================================================== */}

        <div
          className="
            mt-12

            grid
            gap-8

            lg:grid-cols-[0.68fr_1.32fr]
            lg:items-stretch

            xl:gap-12
          "
        >
          {/* ===================================================
              LEFT STATE SELECTOR
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.18,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              justify-center
            "
          >
            {mentalStates.map(
              (state, index) => {
                const active =
                  activeId === state.id;

                return (
                  <motion.button
                    key={state.id}
                    type="button"
                    onClick={() =>
                      setActiveId(state.id)
                    }
                    initial={{
                      opacity: 0,
                      x: -45,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.07,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    whileHover={{
                      x: 7,
                    }}
                    className="
                      group
                      relative

                      flex
                      min-h-[76px]
                      items-center
                      justify-between

                      border-b
                      border-[#173932]/12

                      py-4

                      text-left
                    "
                  >
                    {/* ACTIVE BACKGROUND */}
                    {active && (
                      <motion.span
                        layoutId="mental-state-background"
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 28,
                        }}
                        className="
                          absolute
                          inset-x-[-14px]
                          inset-y-[5px]

                          rounded-[14px]

                          bg-[#F2E7DB]
                        "
                      />
                    )}

                    {/* ACTIVE LEFT LINE */}
                    {active && (
                      <motion.span
                        layoutId="mental-state-line"
                        transition={{
                          type: "spring",
                          stiffness: 330,
                          damping: 28,
                        }}
                        className="
                          absolute
                          -left-[14px]
                          top-1/2

                          h-8
                          w-[3px]

                          -translate-y-1/2

                          rounded-full

                          bg-[#F4B49C]
                        "
                      />
                    )}

                    <span
                      className="
                        relative
                        z-10

                        flex
                        items-center
                        gap-5
                      "
                    >
                      <span
                        className={[
                          "text-[9px]",
                          "font-semibold",
                          "tracking-[0.18em]",
                          "transition-colors",
                          "duration-300",
                          active
                            ? "text-[#D78668]"
                            : "text-[#173932]/35",
                        ].join(" ")}
                      >
                        {state.number}
                      </span>

                      <span
                        className={[
                          "display-font",
                          "text-[26px]",
                          "leading-none",
                          "tracking-[-0.025em]",
                          "transition-colors",
                          "duration-300",
                          active
                            ? "text-[#D78668]"
                            : "text-[#173932] group-hover:text-[#D78668]",
                        ].join(" ")}
                      >
                        {state.label}
                      </span>
                    </span>

                    <motion.span
                      animate={{
                        x: active ? 0 : -5,
                        opacity: active
                          ? 1
                          : 0.35,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative
                        z-10

                        text-[#173932]
                      "
                    >
                      <ArrowRight
                        size={15}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  </motion.button>
                );
              }
            )}
          </motion.div>

          {/* ===================================================
              RIGHT EXPERIENCE
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 75,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
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
              overflow-hidden

              rounded-[24px]

              border
              border-[#173932]/8

              bg-[#F2E7DB]

              shadow-[0_12px_36px_rgba(20,48,42,0.06)]
            "
          >
            {/* ===============================================
                IMAGE
            ================================================ */}

            <div
              className="
                relative
                overflow-hidden

                aspect-[16/8.5]
                min-h-[300px]
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeState.id}
                  src={activeState.image}
                  alt={activeState.label}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.97,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    absolute
                    inset-0

                    h-full
                    w-full

                    object-cover
                    object-center
                  "
                />
              </AnimatePresence>

              {/* WARM IMAGE TINT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#173932]/16
                  via-transparent
                  to-transparent
                "
              />

              {/* NUMBER */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${activeState.id}-number`}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    absolute
                    right-5
                    top-5

                    flex
                    size-10
                    items-center
                    justify-center

                    rounded-full

                    bg-[#FBF8F3]/90

                    text-[9px]
                    font-bold
                    tracking-[0.15em]

                    text-[#173932]

                    backdrop-blur-md
                  "
                >
                  {activeState.number}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* ===============================================
                CONTENT
            ================================================ */}

            <div
              className="
                p-6
                md:p-8
                lg:p-9
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeState.id}-content`}
                  initial={{
                    opacity: 0,
                    y: 28,
                    filter:
                      "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter:
                      "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter:
                      "blur(4px)",
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.26em]

                      text-[#D78668]
                    "
                  >
                    {activeState.label}
                  </p>

                  <h3
                    className="
                      mt-3
                      max-w-[650px]

                      display-font

                      text-[clamp(2rem,3vw,3.5rem)]
                      leading-[1]
                      tracking-[-0.04em]

                      text-[#173932]
                    "
                  >
                    {activeState.title}
                  </h3>

                  <div
                    className="
                      mt-5
                      h-px
                      w-full

                      bg-[#173932]/12
                    "
                  />

                  <p
                    className="
                      mt-5
                      max-w-[670px]

                      text-[13px]
                      leading-[1.75]

                      text-[#596863]

                      md:text-[14px]
                    "
                  >
                    {activeState.description}
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-[670px]

                      text-[13px]
                      leading-[1.75]

                      text-[#73807B]
                    "
                  >
                    {activeState.support}
                  </p>

                  <div className="mt-6">
                    <AnimatedButton
                      href="#appointment"
                      variant="peach"
                      className="min-w-[145px]"
                    >
                      Find Support
                    </AnimatedButton>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}