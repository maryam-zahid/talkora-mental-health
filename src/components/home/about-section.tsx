"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import Container from "@/components/ui/container";

const stats = [
  {
    value: "15+",
    label: "Years of care",
  },
  {
    value: "120+",
    label: "Specialists",
  },
  {
    value: "40+",
    label: "Locations",
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
    [40, -30]
  );

  const rightImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -45]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="overflow-hidden bg-[#FBF8F3] py-24 md:py-32 lg:py-40"
    >
      <Container>
        {/* Label */}

        <motion.div
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
            amount: 0.6,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#5C736C]">
            About our care
          </span>
        </motion.div>

        {/* Heading */}

        <h2 className="mx-auto mt-7 max-w-[970px] text-center display-font text-[clamp(3.1rem,5.6vw,5.7rem)] leading-[0.98] tracking-[-0.045em] text-[#173932]">
          {[
            "Mental healthcare designed",
            "around the whole person.",
          ].map((line, index) => (
            <span
              key={line}
              className="block overflow-hidden pb-[0.05em]"
            >
              <motion.span
                initial={{
                  y: "110%",
                }}
                whileInView={{
                  y: "0%",
                }}
                viewport={{
                  once: true,
                  amount: 0.65,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {index === 1 ? (
                  <>
                    around the{" "}
                    <em className="font-normal">
                      whole person.
                    </em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Main asymmetric composition */}

        <div className="mt-16 grid items-start gap-8 lg:mt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left */}

          <div>
            <motion.div
              style={{
                y: leftImageY,
              }}
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0 0% 0 0)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[28px]"
            >
              <motion.div
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=90')",
                }}
                className="aspect-[1.35/1] bg-cover bg-center"
              />
            </motion.div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 border-t border-[#173932]/15 pt-7">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 22,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={index > 0 ? "text-center" : ""}
                >
                  <div className="display-font text-[42px] leading-none tracking-[-0.04em] text-[#173932] md:text-[52px]">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#718079]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="lg:pt-16">
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
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-[520px] text-[15px] leading-7 text-[#61716B] md:text-[16px]"
            >
              Good care begins with being understood. We
              combine compassionate conversations with
              evidence-based approaches to help you understand
              what you&apos;re experiencing, build healthier
              patterns, and move forward with confidence.
            </motion.p>

            <motion.a
              href="#care"
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#F4B49C] pb-2 text-[12px] font-semibold text-[#173932]"
            >
              Learn our approach

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            <motion.div
              style={{
                y: rightImageY,
              }}
              initial={{
                clipPath: "inset(100% 0 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0% 0 0 0)",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.15,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-12 overflow-hidden rounded-[28px]"
            >
              <motion.div
                initial={{
                  scale: 1.08,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=90')",
                }}
                className="aspect-[1.3/1] bg-cover bg-center"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}