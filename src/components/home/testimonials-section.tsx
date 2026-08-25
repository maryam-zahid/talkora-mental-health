"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

const testimonials = [
  {
    quote:
      "I finally felt like I was speaking with someone who understood what I was trying to say, even when I couldn't find the right words.",
    name: "Sophia M.",
    type: "Individual Therapy",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=90",
  },
  {
    quote:
      "The process felt calm, personal, and practical. I started noticing real changes in how I respond to stress and difficult situations.",
    name: "Daniel R.",
    type: "Stress & Anxiety Support",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90",
  },
  {
    quote:
      "What helped most was feeling supported without being rushed. The sessions gave me space to understand myself more clearly.",
    name: "Emily K.",
    type: "Personal Growth",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90",
  },
  {
    quote:
      "I came in feeling completely overwhelmed. Over time I learned how to slow down, recognize my patterns, and respond differently.",
    name: "Michael T.",
    type: "Burnout Recovery",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90",
  },
  {
    quote:
      "Therapy gave me a safe place to work through things I had avoided for years. I feel more confident and much more connected to myself.",
    name: "Olivia S.",
    type: "Emotional Wellbeing",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=90",
  },
  {
    quote:
      "I expected advice, but what I found was something more valuable: a space where I could understand myself and make changes at my own pace.",
    name: "James L.",
    type: "Life Transitions",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=90",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [direction, setDirection] =
    useState(1);

  const activeTestimonial =
    testimonials[activeIndex];

  function nextTestimonial() {
    setDirection(1);

    setActiveIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  }

  function previousTestimonial() {
    setDirection(-1);

    setActiveIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  }

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#FBF8F3]

       py-10
md:py-12
lg:py-14
xl:py-16
      "
    >
      <Container>
        {/* =========================================
            HEADER
        ========================================== */}

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
                y: 14,
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
              Client Stories
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 42,
                filter: "blur(8px)",
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
                mt-3
                max-w-[760px]

                display-font

text-[clamp(2.5rem,3.8vw,4.1rem)]                leading-[0.98]
                tracking-[-0.045em]

                text-[#173932]
              "
            >
              Stories of growth and
              <br />
              meaningful change.
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
                mt-3
                h-[2px]
                bg-[#F4B49C]
              "
            />
          </div>

          {/* RIGHT COPY */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[480px]
              lg:ml-auto
            "
          >
            <p
              className="
                text-[14px]
                leading-[1.8]
                text-[#62716B]

                md:text-[15px]
              "
            >
              Every experience is different, but feeling heard,
              understood, and supported can be an important part
              of meaningful change.
            </p>

            <div className="mt-6">
              <AnimatedButton
href="/contact"
                variant="peach"
              >
                Start Your Journey
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            TESTIMONIAL AREA
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 55,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-10
            max-w-[1120px]
          "
        >
          {/* =====================================
              SINGLE CARD
          ====================================== */}

          <div
            className="
              relative
              min-h-[410px]
              overflow-hidden

              rounded-[26px]

              border
              border-[#173932]/10

              bg-[#F2E7DB]

              shadow-[0_12px_34px_rgba(20,48,42,0.06)]
            "
          >
            <AnimatePresence
              mode="wait"
              custom={direction}
            >
              <motion.article
                key={activeIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x:
                    direction > 0
                      ? 120
                      : -120,
                  scale: 0.97,
                  filter: "blur(7px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x:
                    direction > 0
                      ? -120
                      : 120,
                  scale: 0.97,
                  filter: "blur(6px)",
                }}
                transition={{
                  duration: 0.58,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  grid
                  min-h-[410px]

                  md:grid-cols-[0.35fr_0.65fr]
                "
              >
                {/* ============================
                    CLIENT IMAGE
                ============================= */}

                <div
                  className="
                    relative
                    min-h-[260px]
                    overflow-hidden

                    md:min-h-full
                  "
                >
                  <motion.img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    initial={{
                      scale: 1.12,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      scale: 1.06,
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

                  {/* IMAGE DEPTH */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-[#173932]/28
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* STORY NUMBER */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.75,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    className="
                      absolute
                      left-5
                      top-5

                      flex
                      size-10
                      items-center
                      justify-center

                      rounded-full

                      bg-[#FBF8F3]/92

                      text-[9px]
                      font-semibold
                      tracking-[0.15em]

                      text-[#173932]

                      backdrop-blur-md
                    "
                  >
                    {String(
                      activeIndex + 1
                    ).padStart(2, "0")}
                  </motion.div>
                </div>

                {/* ============================
                    TESTIMONIAL CONTENT
                ============================= */}

                <div
                  className="
                    relative

                    flex
                    flex-col

                    p-6
                    md:p-8
                    lg:p-10
                  "
                >
                  {/* QUOTE ICON */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      rotate: -12,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15,
                    }}
                    whileHover={{
                      rotate: -7,
                      scale: 1.08,
                    }}
                    className="
                      absolute
                      right-7
                      top-7

                      text-[#F4B49C]/55
                    "
                  >
                    <Quote
                      size={60}
                      strokeWidth={1}
                    />
                  </motion.div>

                  {/* CATEGORY */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.12,
                    }}
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]

                      text-[#D78668]
                    "
                  >
                    {activeTestimonial.type}
                  </motion.p>

                  {/* QUOTE */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 28,
                      filter: "blur(6px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.62,
                      delay: 0.16,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      relative
                      z-10

                      mt-7

                      max-w-[680px]

                      display-font

                      text-[clamp(1.8rem,2.7vw,3rem)]
                      leading-[1.18]
                      tracking-[-0.035em]

                      text-[#173932]
                    "
                  >
                    “{activeTestimonial.quote}”
                  </motion.p>

                  {/* DIVIDER */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      mt-7

                      h-px
                      w-full

                      origin-left

                      bg-[#173932]/12
                    "
                  />

                  {/* CLIENT */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.3,
                    }}
                    className="
                      mt-auto
                      pt-7
                    "
                  >
                    <p
                      className="
                        display-font

                        text-[22px]

                        text-[#173932]
                      "
                    >
                      {activeTestimonial.name}
                    </p>

                    <p
                      className="
                        mt-1

                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-[#D78668]
                      "
                    >
                      Talkora Client
                    </p>
                  </motion.div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* PEACH BOTTOM ACCENT */}

            <motion.div
              key={`accent-${activeIndex}`}
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.65,
              }}
              className="
                absolute
                inset-x-0
                bottom-0

                h-[3px]

                origin-left

                bg-[#F4B49C]
              "
            />
          </div>

          {/* =====================================
              NAVIGATION
          ====================================== */}

          <div
            className="
              mt-6

              flex
              items-center
              justify-between
            "
          >
            {/* PROGRESS */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.16em]

                  text-[#173932]
                "
              >
                {String(
                  activeIndex + 1
                ).padStart(2, "0")}
              </span>

              <div
                className="
                  relative

                  h-px
                  w-24

                  overflow-hidden

                  bg-[#173932]/15

                  sm:w-36
                "
              >
                <motion.div
                  animate={{
                    width: `${
                      ((activeIndex + 1) /
                        testimonials.length) *
                      100
                    }%`,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-y-0
                    left-0

                    bg-[#F4B49C]
                  "
                />
              </div>

              <span
                className="
                  text-[10px]
                  tracking-[0.16em]

                  text-[#173932]/35
                "
              >
                {String(
                  testimonials.length
                ).padStart(2, "0")}
              </span>
            </div>

            {/* ARROWS */}

            <div className="flex gap-2">
              <motion.button
                type="button"
                onClick={previousTestimonial}
                whileHover={{
                  scale: 1.08,
                  x: -2,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  flex
                  size-12
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#173932]/12

                  bg-[#F2E7DB]

                  text-[#173932]

                  transition-colors
                  duration-300

                  hover:border-[#F4B49C]
                  hover:bg-[#F4B49C]
                "
                aria-label="Previous testimonial"
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.7}
                />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextTestimonial}
                whileHover={{
                  scale: 1.08,
                  x: 2,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  flex
                  size-12
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#173932]/12

                  bg-[#F2E7DB]

                  text-[#173932]

                  transition-colors
                  duration-300

                  hover:border-[#F4B49C]
                  hover:bg-[#F4B49C]
                "
                aria-label="Next testimonial"
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.7}
                />
              </motion.button>
            </div>
          </div>

          {/* =====================================
              SMALL DOT NAVIGATION
          ====================================== */}

          <div
            className="
              mt-5

              flex
              justify-center
              gap-2
            "
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setDirection(
                    index > activeIndex ? 1 : -1
                  );

                  setActiveIndex(index);
                }}
                aria-label={`Show testimonial ${
                  index + 1
                }`}
                className="
                  relative
                  h-[5px]
                  w-7
                  overflow-hidden
                  rounded-full
                  bg-[#173932]/12
                "
              >
                {index === activeIndex && (
                  <motion.span
                    layoutId="active-testimonial-dot"
                    className="
                      absolute
                      inset-0

                      rounded-full

                      bg-[#F4B49C]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}