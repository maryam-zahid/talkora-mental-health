"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Container from "@/components/ui/container";
import AnimatedButton from "@/components/ui/animated-button";

const stats = [
  {
    value: "5K+",
    label: "Happy Clients",
  },
  {
    value: "8Y+",
    label: "Years Experience",
  },
  {
    value: "10+",
    label: "Expert Therapists",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [20, -20]
  );

  const rightImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [35, -25]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        overflow-hidden
        bg-[#FBF8F3]
        py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      <Container>
        {/* =========================
            LABEL
        ========================== */}
        <motion.p
          initial={{
            opacity: 0,
            y: 12,
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-center
            text-[10px]
            font-bold
            uppercase
            tracking-[0.32em]
            text-[#173932]
          "
        >
          About Us
        </motion.p>

        {/* =========================
            HEADING
        ========================== */}
        <motion.h2
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-5
            max-w-[1120px]
            text-center
            display-font

            text-[clamp(2.8rem,4.6vw,5rem)]
            leading-[1]
            tracking-[-0.045em]
            text-[#173932]
          "
        >
          Creating a supportive space for emotional
          <br className="hidden md:block" />
          growth, healing, and personal wellbeing.
        </motion.h2>

        {/* =========================
            MAIN GRID
        ========================== */}
        <div
          className="
            mt-14
            grid
            gap-10

            lg:mt-16
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* =========================
              LEFT COLUMN
          ========================== */}
          <div>
            <motion.div
              style={{
                y: leftImageY,
              }}
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                rounded-[18px]
                bg-[#EAE2D7]
              "
            >
              <motion.img
                src="/images/about/about-therapy-1.jpg"
                alt="Therapist speaking with a client"
                initial={{
                  scale: 1.05,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  block
                  aspect-[1.45/1]
                  w-full
                  object-cover
                  object-center
                "
              />
            </motion.div>

            {/* =========================
                STATS
            ========================== */}
            <div
              className="
                mt-10
                grid
                grid-cols-3
                border-t
                border-[#173932]/20
                pt-7
              "
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
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
                    duration: 0.6,
                    delay: index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    index === 0
                      ? ""
                      : "text-center"
                  }
                >
                  <p
                    className="
                      display-font
                      text-[38px]
                      leading-none
                      tracking-[-0.04em]
                      text-[#173932]

                      sm:text-[42px]
                      md:text-[48px]
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      text-[#66756F]

                      sm:text-[11px]
                    "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =========================
              RIGHT COLUMN
          ========================== */}
          <div className="flex flex-col lg:pt-2">
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[620px]
                text-[14px]
                leading-[1.9]
                text-[#5E6D67]

                md:text-[15px]
              "
            >
              We believe meaningful change begins with a safe,
              supportive relationship. Our therapists provide
              compassionate, evidence-based care tailored to your
              experiences, goals, and pace.
            </motion.p>

            <motion.div
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
              }}
              transition={{
                duration: 0.6,
                delay: 0.08,
              }}
              className="mt-6"
            >
              <AnimatedButton
                href="#services"
                variant="peach"
                className="min-w-[145px]"
              >
                Discover More
              </AnimatedButton>
            </motion.div>

            <motion.div
              style={{
                y: rightImageY,
              }}
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                overflow-hidden
                rounded-[18px]
                bg-[#EAE2D7]
              "
            >
              <motion.img
                src="/images/about/about-therapy-2.jpg"
                alt="Mental health counseling session"
                initial={{
                  scale: 1.05,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  block
                  aspect-[1.55/1]
                  w-full
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}