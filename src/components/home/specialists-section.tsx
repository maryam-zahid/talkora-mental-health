"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

const specialists = [
  {
    name: "Daniel Brooks",
    role: "Clinical Psychologist",
    focus: "Anxiety, trauma & emotional wellbeing",
    image: "/images/team/daniel-brooks.jpg",
  },
  {
    name: "Emily Carter",
    role: "Clinical Psychologist",
    focus: "Relationships, confidence & personal growth",
    image: "/images/team/emily-carter.jpg",
  },
  {
    name: "James Wilson",
    role: "Mental Health Counselor",
    focus: "Stress, mindfulness & lifestyle balance",
    image: "/images/team/james-wilson.jpg",
  },
  {
    name: "Sophia Turner",
    role: "Wellness Specialist",
    focus: "Self-esteem, emotional resilience & wellbeing",
    image: "/images/team/olivia-bennett.jpg",
  },
  {
    name: "Ethan Parker",
    role: "Behavioral Therapist",
    focus: "Behavioral patterns, habits & emotional regulation",
    image: "/images/team/ethan-parker.jpg",
  },
  {
    name: "Olivia Bennett",
    role: "Counseling Therapist",
    focus: "Life transitions, stress & relationship support",
    image: "/images/team/olivia-bennett.jpg",
  },
];

export default function SpecialistsSection() {
  return (
    <section
      id="specialists"
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
        {/* HEADER */}
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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
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
              Our Team
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 46,
                filter: "blur(9px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: false, amount: 0.16 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-[760px]
                display-font
                text-[clamp(2.8rem,4.4vw,4.9rem)]
                leading-[0.98]
                tracking-[-0.045em]
                text-[#173932]
              "
            >
              Meet our dedicated
              <br />
              professionals
            </motion.h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: false }}
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.72,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-[610px]
                text-[14px]
                leading-[1.8]
                text-[#62716B]
                md:text-[15px]
              "
            >
              Experienced professionals who combine clinical
              expertise, thoughtful listening, and compassionate
              support to help you feel understood and cared for.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.72,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[470px]
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
              Explore different areas of expertise and find a
              professional whose approach feels right for you.
            </p>

            <div className="mt-6">
              <AnimatedButton
                href="#appointment"
                variant="peach"
                className="min-w-[180px]"
              >
                Find Your Therapist
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* CARDS */}
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
          {specialists.map((specialist, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <motion.article
                key={specialist.name}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -90 : 90,
                  y: 24,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.22,
                  margin: "-30px",
                }}
                transition={{
                  duration: 0.82,
                  delay: (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  rotateX: 1.5,
                  rotateY: fromLeft ? 1.5 : -1.5,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#173932]/10
                  bg-[#F2E7DB]
                  shadow-[0_9px_26px_rgba(20,48,42,0.05)]
                  transition-shadow
                  duration-500
                  hover:shadow-[0_22px_48px_rgba(20,48,42,0.14)]
                "
                style={{
                  transformPerspective: 1000,
                }}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={specialist.image}
                    alt={specialist.name}
                    initial={{
                      scale: 1.08,
                      y: 18,
                    }}
                    whileInView={{
                      scale: 1,
                      y: 0,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      aspect-[1.2/1]
                      w-full
                      object-cover
                      object-center
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#173932]/0
                      transition-colors
                      duration-500
                      group-hover:bg-[#173932]/8
                    "
                  />

                  {/* soft moving highlight */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-[40%]
                      w-[25%]
                      rotate-[15deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/14
                      to-transparent
                      opacity-0
                      transition-all
                      duration-700
                      group-hover:left-[115%]
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="relative p-6 md:p-7">
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#D78668]
                    "
                  >
                    {specialist.role}
                  </p>

                  <h3
                    className="
                      mt-2
                      display-font
                      text-[28px]
                      leading-[1.05]
                      tracking-[-0.03em]
                      text-[#173932]
                      transition-all
                      duration-300
                      group-hover:translate-x-[3px]
                      group-hover:text-[#D78668]
                    "
                  >
                    {specialist.name}
                  </h3>

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

                  <p
                    className="
                      mt-4
                      text-[12px]
                      leading-[1.65]
                      text-[#596863]
                      transition-colors
                      duration-300
                      group-hover:text-[#344A43]
                    "
                  >
                    {specialist.focus}
                  </p>

                  <a
                    href="#appointment"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[11px]
                      font-semibold
                      text-[#173932]
                      transition-colors
                      duration-300
                      group-hover:text-[#D78668]
                    "
                  >
                    View Profile

                    <ArrowRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1.5
                      "
                    />
                  </a>
                </div>

                {/* bottom hover accent */}
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
      </Container>
    </section>
  );
}