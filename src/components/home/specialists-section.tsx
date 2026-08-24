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
    image: "/images/team/james-wilson.jpg",
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
        bg-[#FBF8F3]
        py-16
        md:py-20
        lg:py-24
        xl:py-28
      "
    >
      <Container>
        {/* HEADER */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
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
              y: 44,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-5
              max-w-[700px]

              display-font

              text-[clamp(2.9rem,4.5vw,4.9rem)]
              leading-[0.98]
              tracking-[-0.045em]

              text-[#173932]
            "
          >
            Meet our dedicated
            <br />
            professionals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-5
              max-w-[640px]

              text-[14px]
              leading-[1.8]

              text-[#62716B]

              md:text-[15px]
            "
          >
            Get to know the professionals who bring clinical expertise,
            thoughtful listening, and compassionate care to every stage
            of your mental health journey.
          </motion.p>
        </div>

        {/* CARDS */}
    {/* =====================================================
    SPECIALIST CARDS
====================================================== */}

<div
  className="
    mt-12
    grid
    gap-6
    md:grid-cols-2
    lg:grid-cols-3
  "
>
  {specialists.slice(0, 3).map((specialist, index) => (
    <motion.article
      key={specialist.name}
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.18,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {/* =========================
          IMAGE CARD
      ========================== */}
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 230,
          damping: 23,
        }}
        className="
          relative
          overflow-hidden
          rounded-[30px]

          shadow-[0_12px_32px_rgba(20,48,42,0.06)]

          transition-shadow
          duration-500

          hover:shadow-[0_24px_55px_rgba(20,48,42,0.15)]
        "
      >
        {/* IMAGE */}
        <motion.img
          src={specialist.image}
          alt={specialist.name}
          initial={{
            scale: 1.08,
          }}
          whileInView={{
            scale: 1,
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
            aspect-[0.82/1]
            w-full
            object-cover
            object-center
          "
        />

        {/* DEPTH OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-[#0F2D28]/78
            via-[#0F2D28]/8
            to-transparent
          "
        />

        {/* HOVER TINT */}
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

        {/* NUMBER */}
        <span
          className="
            absolute
            left-7
            top-7

            text-[13px]
            font-semibold
            tracking-[0.16em]

            text-white/85
          "
        >
          0{index + 1}
        </span>

        {/* BOTTOM CONTENT */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0

            p-7
          "
        >
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]

              text-[#F4B49C]
            "
          >
            {specialist.role}
          </p>

          <h3
            className="
              mt-2

              display-font

              text-[34px]
              leading-[1]
              tracking-[-0.04em]

              text-white

              transition-colors
              duration-300

              group-hover:text-[#F4B49C]
            "
          >
            {specialist.name}
          </h3>
        </div>

        {/* MOVING SHINE */}
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
            via-white/14
            to-transparent

            opacity-0

            transition-all
            duration-700

            group-hover:left-[115%]
            group-hover:opacity-100
          "
        />
      </motion.div>

      {/* =========================
          BOTTOM META
      ========================== */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <p
          className="
            text-[13px]
            leading-[1.5]

            text-[#73807B]
          "
        >
          {specialist.focus}
        </p>

        <motion.a
          href="#appointment"
          whileHover={{
            scale: 1.08,
            rotate: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            flex
            size-11
            shrink-0
            items-center
            justify-center

            rounded-full

            border
            border-[#173932]/12

            text-[#173932]

            transition-all
            duration-300

            hover:border-[#F4B49C]
            hover:bg-[#F4B49C]
          "
        >
          <ArrowRight
            size={16}
            strokeWidth={1.7}
          />
        </motion.a>
      </div>
    </motion.article>
  ))}
</div>
        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-12 text-center"
        >
          <AnimatedButton
            href="#appointment"
            variant="peach"
            className="min-w-[180px]"
          >
            Find Your Therapist
          </AnimatedButton>
        </motion.div>
      </Container>
    </section>
  );
}