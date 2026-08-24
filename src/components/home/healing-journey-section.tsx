"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import Container from "@/components/ui/container";

export default function HealingJourneySection() {
  return (
    <section
      id="healing-journey"
      className="
        relative
        overflow-hidden
        bg-[#173932]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/cta/healing-journey.jpg"
          alt="Therapist supporting a client during a counseling session"
          initial={{
            scale: 1.08,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* MAIN DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-[#10251F]/58
          "
        />

        {/* LEFT/RIGHT CINEMATIC DEPTH */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/35
            via-black/10
            to-black/25
          "
        />

        {/* BOTTOM DEPTH */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-black/10
          "
        />
      </div>

      <Container>
        <div
          className="
            relative
            z-10

            grid
            min-h-[340px]

            items-center

            gap-10

            py-12

            md:min-h-[390px]
            md:py-14

            lg:grid-cols-[1fr_0.75fr]
            lg:gap-16
            lg:py-16
          "
        >
          {/* LEFT */}
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
                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-white/90
              "
            >
              Get Started
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                x: -55,
                y: 20,
                filter: "blur(7px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-4
                max-w-[600px]

                display-font

                text-[clamp(3rem,5vw,5.4rem)]
                leading-[0.92]
                tracking-[-0.045em]

                text-white
              "
            >
              Start Your
              <br />
              Healing Journey
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 55,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[480px]

              lg:ml-auto
              lg:self-end
              lg:pb-5
            "
          >
            <p
              className="
                text-[13px]
                leading-[1.75]
                text-white/80

                md:text-[14px]
              "
            >
              Taking the first step can feel difficult. We&apos;re
              here to make it simpler, with compassionate support
              and care that meets you where you are.
            </p>

            <motion.a
href="/contact"              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-6

                inline-flex
                min-h-[48px]

                items-center
                justify-center
                gap-2

                rounded-full

                bg-[#F4B49C]

                px-6

                text-[11px]
                font-semibold

                text-[#173932]

                transition-colors
                duration-300

                hover:bg-[#F7C2AD]
              "
            >
              <Phone
                size={14}
                strokeWidth={2}
              />

              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </Container>

      {/* SUBTLE PEACH LINE */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-0
          left-0

          h-[3px]
          w-full

          origin-left

          bg-[#F4B49C]
        "
      />
    </section>
  );
}