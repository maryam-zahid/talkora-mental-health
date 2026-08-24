"use client";

import { motion } from "framer-motion";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Container from "@/components/ui/container";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#appointment" },
];

const services = [
  { label: "Individual Therapy", href: "#services" },
  { label: "Couples Counseling", href: "#services" },
  { label: "Stress Management", href: "#services" },
  { label: "Anxiety Support", href: "#services" },
  { label: "Personal Growth", href: "#services" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        bg-[#173932]
        text-[#FBF8F3]
      "
    >
      <Container>
        {/* =====================================================
            TOP FOOTER
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-10

            py-12

            md:grid-cols-2

            lg:grid-cols-[1.35fr_0.65fr_0.72fr_0.9fr]
            lg:gap-12

            xl:py-14
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}
          <div>
            <a
              href="#home"
              className="
                inline-flex
                items-center
                gap-4
              "
            >
              {/* LOGO MARK */}
              <span
                className="
                  relative
                  flex
                  size-12
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    absolute
                    size-11
                    rounded-full
                    border
                    border-[#F4B49C]
                  "
                />

                <span
                  className="
                    absolute
                    size-6
                    rotate-45
                    rounded-[7px]
                    border
                    border-[#CFE3D6]
                  "
                />

                <span
                  className="
                    size-2.5
                    rounded-full
                    bg-[#F4B49C]
                  "
                />
              </span>

              <div>
                <span
                  className="
                    display-font
                    block

                    text-[40px]
                    leading-none
                    tracking-[-0.04em]

                    text-white
                  "
                >
                  Talkora
                </span>

                <span
                  className="
                    mt-1
                    block

                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.32em]

                    text-white/50
                  "
                >
                  Mental Health
                </span>
              </div>
            </a>

            <p
              className="
                mt-7
                max-w-[390px]

                text-[13px]
                leading-[1.8]

                text-white/62
              "
            >
              Compassionate mental health support designed to help
              you feel understood, supported, and more confident
              in the way forward.
            </p>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>
            <h3
              className="
                display-font

                text-[24px]
                tracking-[-0.02em]

                text-white
              "
            >
              Quick Link
            </h3>

            <ul
              className="
                mt-6
                space-y-4
              "
            >
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      inline-block

                      text-[13px]
                      font-medium

                      text-white/72

                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-[#F4B49C]
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}
          <div>
            <h3
              className="
                display-font

                text-[24px]
                tracking-[-0.02em]

                text-white
              "
            >
              Services
            </h3>

            <ul
              className="
                mt-6
                space-y-4
              "
            >
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="
                      inline-block

                      text-[13px]
                      font-medium

                      text-white/72

                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-[#F4B49C]
                    "
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}
          <div>
            <h3
              className="
                display-font

                text-[24px]
                tracking-[-0.02em]

                text-white
              "
            >
              Contact
            </h3>

            <div
              className="
                mt-6
                space-y-4
              "
            >
              <a
                href="tel:+13106289475"
                className="
                  flex
                  items-start
                  gap-3

                  text-[13px]
                  font-medium

                  text-white/72

                  transition-colors
                  duration-300

                  hover:text-[#F4B49C]
                "
              >
              <Phone
  size={15}
  strokeWidth={2}
  className="mt-0.5 shrink-0 text-[#F4B49C]"
/>

                +1 (310) 628-9475
              </a>

              <a
                href="mailto:hello@talkora.com"
                className="
                  flex
                  items-start
                  gap-3

                  text-[13px]
                  font-medium

                  text-white/72

                  transition-colors
                  duration-300

                  hover:text-[#F4B49C]
                "
              >
              <Mail
  size={15}
  strokeWidth={2}
  className="mt-0.5 shrink-0 text-[#F4B49C]"
/>
                hello@talkora.com
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3

                  text-[13px]
                  font-medium
                  leading-[1.65]

                  text-white/72
                "
              >
             <MapPin
  size={15}
  strokeWidth={2}
  className="mt-0.5 shrink-0 text-[#F4B49C]"
/>

                <span>
                  845 Beverly Avenue,
                  <br />
                  Los Angeles, USA
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div
          className="
            h-px
            w-full
            bg-white/12
          "
        />

        {/* =====================================================
            NEWSLETTER + SOCIAL
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.08,
          }}
          className="
            grid
            gap-8

            py-8

            lg:grid-cols-[1fr_1fr]
            lg:items-center
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                display-font

                text-[28px]
                leading-[1.1]
                tracking-[-0.03em]

                text-white
              "
            >
              Stay Connected With Talkora
            </p>

         <div
  className="
    mt-5
    flex
    items-center
    gap-2
  "
>
  {/* FACEBOOK */}
  <motion.a
    href="#"
    aria-label="Facebook"
    whileHover={{
      y: -3,
      scale: 1.08,
    }}
    whileTap={{
      scale: 0.94,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
    className="
      flex
      size-10
      items-center
      justify-center

      rounded-full

      bg-[#F4B49C]

      text-[#173932]

      transition-colors
      duration-300

      hover:bg-[#F7C2AD]
    "
  >
    <FaFacebookF size={15} />
  </motion.a>

  {/* X / TWITTER */}
  <motion.a
    href="#"
    aria-label="X"
    whileHover={{
      y: -3,
      scale: 1.08,
    }}
    whileTap={{
      scale: 0.94,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
    className="
      flex
      size-10
      items-center
      justify-center

      rounded-full

      bg-[#F4B49C]

      text-[#173932]

      transition-colors
      duration-300

      hover:bg-[#F7C2AD]
    "
  >
    <FaXTwitter size={15} />
  </motion.a>

  {/* YOUTUBE */}
  <motion.a
    href="#"
    aria-label="YouTube"
    whileHover={{
      y: -3,
      scale: 1.08,
    }}
    whileTap={{
      scale: 0.94,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
    className="
      flex
      size-10
      items-center
      justify-center

      rounded-full

      bg-[#F4B49C]

      text-[#173932]

      transition-colors
      duration-300

      hover:bg-[#F7C2AD]
    "
  >
    <FaYoutube size={17} />
  </motion.a>
</div>
          </div>

          {/* NEWSLETTER */}
          <form
            onSubmit={(event) =>
              event.preventDefault()
            }
            className="
              flex

              min-h-[64px]

              items-center

              overflow-hidden

              rounded-[10px]

              bg-[#FBF8F3]

              p-2
            "
          >
            <input
              type="email"
              required
              placeholder="Email"
              className="
                min-w-0
                flex-1

                bg-transparent

                px-5

                text-[13px]

                text-[#173932]

                outline-none

                placeholder:text-[#173932]/25
              "
            />

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                min-h-[48px]

                rounded-full

                bg-[#F4B49C]

                px-7

                display-font

                text-[14px]

                text-[#173932]

                transition-colors
                duration-300

                hover:bg-[#F7C2AD]
              "
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </Container>
    </footer>
  );
}