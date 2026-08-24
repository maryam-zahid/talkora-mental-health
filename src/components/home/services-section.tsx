"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

const services = [
  {
    title: "Individual Therapy",
    description:
      "One-on-one support to help you understand your thoughts, emotions, and patterns.",
    image: "/images/services/individual-therapy.jpg",
  },
  {
    title: "Couples Counseling",
    description:
      "Strengthen communication, rebuild trust, and create healthier relationships.",
    image: "/images/services/couples-counseling.jpg",
  },
  {
    title: "Stress Management",
    description:
      "Practical tools and therapeutic support to reduce stress and restore balance.",
    image: "/images/services/stress-management.jpg",
  },
  {
    title: "Anxiety Support",
    description:
      "Evidence-based care to help you manage worry, fear, and overwhelming thoughts.",
    image: "/images/services/anxiety-support.jpg",
  },
  {
    title: "Personal Growth",
    description:
      "Build confidence, self-awareness, and healthier habits for everyday life.",
    image: "/images/services/personal-growth.jpg",
  },
  {
    title: "Mindfulness Therapy",
    description:
      "Learn grounding techniques that help you stay present, calm, and emotionally balanced.",
    image: "/images/services/mindfulness-therapy.jpg",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 58,
    scale: 0.965,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.82,
      delay: index * 0.09,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#FBF8F3]

        py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      <Container>
        {/* =====================================================
            TOP CONTENT
        ====================================================== */}
        <div
          className="
            grid
            gap-8

            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >
          {/* LEFT */}
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
                once: true,
                amount: 0.35,
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
              Our Services
            </motion.p>

            {/* HEADING */}
            <h2
              className="
                mt-5
                max-w-[720px]

                display-font

                text-[clamp(2.9rem,4.6vw,5rem)]
                leading-[0.98]
                tracking-[-0.045em]

                text-[#173932]
              "
            >
              <span className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  initial={{
                    y: "115%",
                  }}
                  whileInView={{
                    y: "0%",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  Professional mental
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-[0.05em]">
                <motion.span
                  initial={{
                    y: "115%",
                  }}
                  whileInView={{
                    y: "0%",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  health support
                </motion.span>
              </span>
            </h2>

            {/* PEACH LINE */}
            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6
                h-[2px]
                w-16
                origin-left
                bg-[#F4B49C]
              "
            />

            {/* EXTRA TEXT UNDER HEADING */}
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
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-[560px]

                text-[14px]
                leading-[1.8]

                text-[#62716B]

                md:text-[15px]
              "
            >
              Thoughtful, personalized care to help you
              understand what you&apos;re experiencing, strengthen
              emotional wellbeing, and move forward with greater
              confidence.
            </motion.p>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[500px]
              lg:ml-auto
            "
          >
            <p
              className="
                text-[14px]
                leading-[1.8]

                text-[#63716C]

                md:text-[15px]
              "
            >
              Our services are designed to meet you where you
              are, with compassionate support for emotional
              wellbeing, relationships, anxiety, stress, and
              personal growth.
            </p>

            <div className="mt-6">
              <AnimatedButton
                href="#contact"
                variant="peach"
                className="min-w-[150px]"
              >
                Learn More
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}
        <div
          className="
            mt-12

            grid
            gap-5

            md:grid-cols-2

            xl:grid-cols-3
            xl:gap-6
          "
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              whileHover={{
                y: -9,
                scale: 1.012,
              }}
              transition={{
                type: "spring",
                stiffness: 230,
                damping: 23,
              }}
              className="
                group
                relative

                overflow-hidden

                rounded-[22px]

                border
                border-[#173932]/10

                bg-[#F2E7DB]

                shadow-[0_10px_28px_rgba(20,48,42,0.06)]

                transition-shadow
                duration-500

                hover:shadow-[0_22px_48px_rgba(20,48,42,0.13)]
              "
            >
              {/* =============================================
                  IMAGE
              ============================================== */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#DED3C7]
                "
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  initial={{
                    scale: 1.08,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.07,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    aspect-[1.55/0.78]
                    w-full
                    object-cover
                    object-center
                  "
                />

                {/* subtle dark depth on hover */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-[#173932]/0

                    transition-colors
                    duration-500

                    group-hover:bg-[#173932]/8
                  "
                />

                {/* image shine */}
                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-y-0
                    -left-[35%]

                    w-[24%]

                    rotate-[14deg]

                    bg-gradient-to-r
                    from-transparent
                    via-white/16
                    to-transparent

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:left-[115%]
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* =============================================
                  CONTENT
              ============================================== */}
              <div
                className="
                  relative

                  min-h-[178px]

                  bg-[#F2E7DB]

                  p-6
                  md:p-7
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    display-font

                    text-[27px]
                    leading-[1.05]
                    tracking-[-0.03em]

                    text-[#173932]

                    transition-all
                    duration-300

                    group-hover:translate-x-[2px]
                    group-hover:text-[#D78668]
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-4

                    text-[13px]
                    leading-[1.7]

                    text-[#52615C]

                    transition-colors
                    duration-300

                    group-hover:text-[#344A43]
                  "
                >
                  {service.description}
                </p>

                {/* LINK */}
                <a
                  href="#contact"
                  className="
                    mt-6

                    inline-flex
                    items-center
                    gap-2

                    text-[12px]
                    font-semibold

                    text-[#173932]

                    transition-colors
                    duration-300

                    group-hover:text-[#D78668]
                  "
                >
                  Learn More

                  <ArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1.5
                    "
                  />
                </a>
              </div>

              {/* =============================================
                  BOTTOM ANIMATED LINE
              ============================================== */}
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

              {/* subtle peach outline on hover */}
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
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}