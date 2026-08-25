"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

const plans = [
  {
    name: "Starter Support",
    price: "49",
    unit: "/ Session",
    description:
      "A focused starting point for understanding your needs and receiving practical one-to-one support.",
    features: [
      "Initial consultation",
      "50-minute therapy session",
      "Personal guidance",
      "Wellbeing recommendations",
    ],
    featured: false,
  },
  {
    name: "Growth Support",
    price: "99",
    unit: "/ Treatment",
    description:
      "Ongoing care designed to help you build healthier patterns, confidence, and meaningful progress.",
    features: [
      "Extended therapy session",
      "Personalized care plan",
      "Progress tracking",
      "Practical coping strategies",
    ],
    featured: true,
  },
  {
    name: "Premium Support",
    price: "199",
    unit: "/ Treatment",
    description:
      "A more comprehensive support experience with deeper assessment and regular follow-up care.",
    features: [
      "Advanced therapy program",
      "Regular follow-up sessions",
      "Comprehensive assessment",
      "Personalized strategies",
    ],
    featured: false,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 64,
    scale: 0.96,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.82,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-[#FBF8F3]
//        py-12
// md:py-14
// lg:py-16
// xl:py-20
py-10
md:py-12
lg:py-14
      "
    >
      <Container>
        {/* HEADER */}
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_0.7fr]
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
              Pricing
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 44,
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
                max-w-[720px]

                display-font

text-[clamp(2.5rem,4vw,4.2rem)]
                leading-[0.98]
                tracking-[-0.045em]

                text-[#173932]
              "
            >
              Choose support that
              <br />
              fits your journey.
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
              Flexible care options designed around different
              levels of support, so you can choose what feels
              right for your needs and goals.
            </p>

            <div className="mt-6">
              <AnimatedButton
href="/contact"
                variant="peach"
              >
                Talk To Us
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
    PRICING CARDS
====================================================== */}

<div
  className="
    mt-7
    grid
    gap-4
    md:mt-8
    md:grid-cols-2
    lg:grid-cols-3
    lg:gap-5
  "
>
  {plans.map((plan, index) => (
    <motion.article
      key={plan.name}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.16,
      }}
      whileHover={{
        y: -12,
        scale: 1.018,
        rotateX: 1.2,
      }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 23,
      }}
      style={{
        transformPerspective: 1000,
      }}
      className="
        group
        relative
        flex
min-h-[420px]
        overflow-hidden

        rounded-[22px]

        border
        border-[#173932]/10

        bg-[#F2E7DB]
        text-[#173932]

       p-6
md:p-7

        shadow-[0_10px_28px_rgba(20,48,42,0.05)]

        transition-all
        duration-500

        hover:border-[#F4B49C]/55
        hover:shadow-[0_24px_55px_rgba(20,48,42,0.14)]
      "
    >
      {/* ===============================================
          SOFT HOVER ACCENT
      ================================================ */}

      <div
        className="
          pointer-events-none

          absolute
          -right-20
          -top-20

          size-[190px]

          rounded-full

          bg-[#F4B49C]/0

          blur-[60px]

          transition-all
          duration-500

          group-hover:bg-[#F4B49C]/14
        "
      />

      {/* ===============================================
          TOP PEACH LINE
      ================================================ */}

      <div
        className="
          absolute
          inset-x-0
          top-0

          h-[3px]

          origin-left
          scale-x-0

          bg-[#F4B49C]

          transition-transform
          duration-500

          group-hover:scale-x-100
        "
      />

      {/* ===============================================
          NUMBER / FEATURED BADGE
      ================================================ */}

      {plan.featured ? (
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="
            absolute
            right-6
            top-6
            z-20

            rounded-full

            bg-[#F4B49C]

            px-4
            py-2

            text-[8px]
            font-bold
            uppercase
            tracking-[0.16em]

            text-[#173932]

            shadow-[0_6px_16px_rgba(20,48,42,0.08)]
          "
        >
          Most Popular
        </motion.span>
      ) : (
        <span
          className="
            absolute
            right-6
            top-6

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
      )}

      {/* ===============================================
          MAIN CONTENT
      ================================================ */}

      <div
        className="
          relative
          z-10

          flex
          w-full
          flex-col
        "
      >
        {/* PRICE */}

        <div className="flex items-end gap-2">
          <motion.span
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
            }}
            className="
              display-font

              text-[52px]
              leading-none
              tracking-[-0.05em]

              text-[#173932]

              md:text-[58px]
            "
          >
            ${plan.price}
          </motion.span>

          <span
            className="
              mb-2

              text-[12px]
              font-medium

              text-[#62716B]
            "
          >
            {plan.unit}
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-5

            display-font

            text-[24px]
            leading-[1.05]
            tracking-[-0.03em]

            text-[#173932]

            transition-all
            duration-300

            group-hover:translate-x-[3px]
            group-hover:text-[#D78668]
          "
        >
          {plan.name}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-3

            text-[13px]
            leading-[1.65]

            text-[#596863]

            transition-colors
            duration-300

            group-hover:text-[#344A43]
          "
        >
          {plan.description}
        </p>

        {/* ===============================================
            ANIMATED DIVIDER
        ================================================ */}

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

        {/* INCLUDED */}

        <p
          className="
            mt-4

            display-font

            text-[18px]

            text-[#173932]
          "
        >
          Included:
        </p>

        {/* ===============================================
            FEATURES — STAGGERED ON SCROLL
        ================================================ */}

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            mt-3
            space-y-2
          "
        >
          {plan.features.map((feature) => (
            <motion.li
              key={feature}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -18,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                items-start
                gap-3

                text-[13px]
              "
            >
              <motion.span
                whileHover={{
                  scale: 1.3,
                  rotate: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Check
                  size={16}
                  strokeWidth={2.2}
                  className="text-[#F4B49C]"
                />
              </motion.span>

              <span
                className="
                  text-[#566660]

                  transition-colors
                  duration-300

                  group-hover:text-[#344A43]
                "
              >
                {feature}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* ===============================================
            CTA
        ================================================ */}

        <div className="mt-auto pt-5">
          <motion.a
            href="#appointment"
            whileHover={{
              scale: 1.025,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              min-h-[48px]
              w-full

              items-center
              justify-center
              gap-2

              rounded-full

              bg-[#F4B49C]

              px-6

              text-[13px]
              font-semibold

              text-[#173932]

              transition-colors
              duration-300

              hover:bg-[#F7C2AD]
            "
          >
            Choose Plan

            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1.5
              "
            />
          </motion.a>
        </div>
      </div>

      {/* ===============================================
          HOVER OUTLINE
      ================================================ */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          rounded-[22px]

          ring-1
          ring-inset
          ring-transparent

          transition-all
          duration-500

          group-hover:ring-[#F4B49C]/40
        "
      />

      {/* ===============================================
          BOTTOM PEACH LINE
      ================================================ */}

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
  ))}
</div>

{/* =====================================================
    NOTE
====================================================== */}

<motion.p
  initial={{
    opacity: 0,
    y: 18,
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
    duration: 0.7,
    delay: 0.1,
  }}
  className="
    mx-auto
    mt-8

    max-w-[680px]

    text-center

    text-[11px]
    leading-[1.7]

    text-[#73807B]
  "
>
  Not sure which option is right for you? Start with a
  conversation and we&apos;ll help you choose the level of
  support that best fits your needs.
</motion.p>
      </Container>
    </section>
  );
}