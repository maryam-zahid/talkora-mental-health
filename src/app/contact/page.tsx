"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";

const services = [
  "Individual Therapy",
  "Couples Counseling",
  "Stress Management",
  "Anxiety Support",
  "Personal Growth",
  "Mindfulness Therapy",
];

export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen
        overflow-x-hidden
        bg-[#FBF8F3]
        text-[#173932]
      "
    >
      {/* =====================================================
          HERO + NAVBAR
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#173932]
        "
      >
        <Navbar />

        {/* background decoration */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            size-[430px]
            rounded-full
            border
            border-[#F4B49C]/12
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-10
            size-[260px]
            rounded-full
            border
            border-white/8
          "
        />

        <Container>
          <div
            className="
              relative
              z-10

              grid
              min-h-[350px]
              items-end
              gap-8

              pb-12
              pt-[135px]

              md:min-h-[390px]
              md:pb-14

              lg:grid-cols-[1fr_0.72fr]
              lg:items-end
              lg:pb-16
            "
          >
            {/* LEFT */}

            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#F4B49C]
                "
              >
                Contact & Appointments
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 38,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-4

                  max-w-[720px]

                  display-font

                  text-[clamp(3.2rem,5.3vw,5.8rem)]
                  leading-[0.92]
                  tracking-[-0.05em]

                  text-white
                "
              >
                Let&apos;s begin
                <br />
                your journey.
              </motion.h1>

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 65,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-5
                  h-[2px]
                  bg-[#F4B49C]
                "
              />
            </div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[490px]

                lg:ml-auto
                lg:pb-2
              "
            >
              <p
                className="
                  text-[13px]
                  leading-[1.8]
                  text-white/62

                  md:text-[14px]
                "
              >
                Reaching out is the first step. Tell us a little
                about what you&apos;re looking for and we&apos;ll
                help connect you with support that feels right for
                you.
              </p>
            </motion.div>
          </div>
        </Container>

        {/* peach bottom line */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-x-0
            bottom-0
            h-[2px]
            origin-left
            bg-[#F4B49C]
          "
        />
      </section>

      {/* =====================================================
          FORM SECTION
      ====================================================== */}

      <section
        className="
          bg-[#FBF8F3]

          py-10
          md:py-12
          lg:py-14
        "
      >
        <Container>
          {/* FORM HEADING */}

          <motion.div
            initial={{
              opacity: 0,
              y: 26,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              max-w-[700px]
              text-center
            "
          >
            <span
              className="
                mx-auto

                flex
                size-11
                items-center
                justify-center

                rounded-full

                bg-[#F4B49C]

                text-[#173932]
              "
            >
              <CalendarDays
                size={18}
                strokeWidth={1.8}
              />
            </span>

            <p
              className="
                mt-4

                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]

                text-[#173932]
              "
            >
              Appointment
            </p>

            <h2
              className="
                mt-3

                display-font

                text-[clamp(2.4rem,3.5vw,3.8rem)]
                leading-[1]
                tracking-[-0.04em]

                text-[#173932]
              "
            >
              Book a consultation
            </h2>

            <p
              className="
                mx-auto
                mt-4

                max-w-[550px]

                text-[13px]
                leading-[1.75]

                text-[#62716B]
              "
            >
              Share a few details with us and choose the type of
              support and time that works best for you.
            </p>
          </motion.div>

          {/* =================================================
              CENTER FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 55,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative

              mx-auto
              mt-8

              max-w-[900px]

              overflow-hidden

              rounded-[24px]

              border
              border-[#173932]/10

              bg-[#F2E7DB]

              p-6

              shadow-[0_14px_40px_rgba(20,48,42,0.06)]

              md:p-8
              lg:p-9
            "
          >
            {/* subtle peach decoration */}

            <div
              className="
                pointer-events-none

                absolute
                -right-24
                -top-24

                size-[220px]

                rounded-full

                bg-[#F4B49C]/10

                blur-[60px]
              "
            />

            <form
              onSubmit={(event) =>
                event.preventDefault()
              }
              className="
                relative
                z-10
              "
            >
              {/* NAME */}

              <div
                className="
                  grid
                  gap-5

                  md:grid-cols-2
                "
              >
                <Field
                  label="First Name"
                  placeholder="Your first name"
                  required
                />

                <Field
                  label="Last Name"
                  placeholder="Your last name"
                  required
                />
              </div>

              {/* CONTACT */}

              <div
                className="
                  mt-5

                  grid
                  gap-5

                  md:grid-cols-2
                "
              >
                <Field
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                  required
                />

                <Field
                  label="Phone"
                  placeholder="+1 000 000 0000"
                  type="tel"
                />
              </div>

              {/* SERVICE */}

              <div className="mt-5">
                <FieldLabel>
                  How can we support you?
                </FieldLabel>

                <select
                  required
                  defaultValue=""
                  className="
                    mt-2

                    h-[52px]
                    w-full

                    rounded-[12px]

                    border
                    border-[#173932]/12

                    bg-[#FBF8F3]

                    px-4

                    text-[12px]

                    text-[#173932]

                    outline-none

                    transition-all
                    duration-300

                    hover:border-[#173932]/25

                    focus:border-[#F4B49C]
                    focus:ring-2
                    focus:ring-[#F4B49C]/10
                  "
                >
                  <option
                    value=""
                    disabled
                  >
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE / TIME */}

              <div
                className="
                  mt-5

                  grid
                  gap-5

                  md:grid-cols-2
                "
              >
                <div>
                  <FieldLabel>
                    Preferred Date
                  </FieldLabel>

                  <input
                    type="date"
                    className="
                      mt-2

                      h-[52px]
                      w-full

                      rounded-[12px]

                      border
                      border-[#173932]/12

                      bg-[#FBF8F3]

                      px-4

                      text-[12px]

                      text-[#173932]

                      outline-none

                      transition-all
                      duration-300

                      hover:border-[#173932]/25

                      focus:border-[#F4B49C]
                      focus:ring-2
                      focus:ring-[#F4B49C]/10
                    "
                  />
                </div>

                <div>
                  <FieldLabel>
                    Preferred Time
                  </FieldLabel>

                  <select
                    defaultValue=""
                    className="
                      mt-2

                      h-[52px]
                      w-full

                      rounded-[12px]

                      border
                      border-[#173932]/12

                      bg-[#FBF8F3]

                      px-4

                      text-[12px]

                      text-[#173932]

                      outline-none

                      transition-all
                      duration-300

                      hover:border-[#173932]/25

                      focus:border-[#F4B49C]
                      focus:ring-2
                      focus:ring-[#F4B49C]/10
                    "
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select time
                    </option>

                    <option value="morning">
                      Morning
                    </option>

                    <option value="afternoon">
                      Afternoon
                    </option>

                    <option value="evening">
                      Evening
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-5">
                <FieldLabel>
                  Message
                </FieldLabel>

                <textarea
                  rows={4}
                  placeholder="Tell us briefly how we can support you..."
                  className="
                    mt-2

                    w-full

                    resize-none

                    rounded-[12px]

                    border
                    border-[#173932]/12

                    bg-[#FBF8F3]

                    p-4

                    text-[12px]
                    leading-[1.7]

                    text-[#173932]

                    outline-none

                    transition-all
                    duration-300

                    placeholder:text-[#173932]/30

                    hover:border-[#173932]/25

                    focus:border-[#F4B49C]
                    focus:ring-2
                    focus:ring-[#F4B49C]/10
                  "
                />
              </div>

              {/* BUTTON */}

              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  mt-6

                  flex
                  min-h-[52px]
                  w-full

                  items-center
                  justify-center

                  rounded-full

                  bg-[#F4B49C]

                  px-7

                  text-[12px]
                  font-semibold

                  text-[#173932]

                  transition-colors
                  duration-300

                  hover:bg-[#F7C2AD]
                "
              >
                Request Appointment
              </motion.button>

              <p
                className="
                  mx-auto
                  mt-4

                  max-w-[620px]

                  text-center

                  text-[9px]
                  leading-[1.6]

                  text-[#173932]/38
                "
              >
                This form is for appointment requests and general
                enquiries. Please do not use it for urgent or
                emergency situations.
              </p>
            </form>
          </motion.div>

          {/* =================================================
              CONTACT INFO BELOW FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.75,
              delay: 0.08,
            }}
            className="
              mx-auto
              mt-8

              grid
              max-w-[900px]
              gap-4

              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            <ContactItem
              icon={<Phone size={16} />}
              title="Call Us"
              value="+1 (310) 628-9475"
              href="tel:+13106289475"
            />

            <ContactItem
              icon={<Mail size={16} />}
              title="Email Us"
              value="hello@talkora.com"
              href="mailto:hello@talkora.com"
            />

            <ContactItem
              icon={<MapPin size={16} />}
              title="Visit Us"
              value="Los Angeles, USA"
            />

            <ContactItem
              icon={<Clock3 size={16} />}
              title="Hours"
              value="Mon – Fri, 9am – 6pm"
            />
          </motion.div>
        </Container>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel>
        {label}
      </FieldLabel>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="
          mt-2

          h-[52px]
          w-full

          rounded-[12px]

          border
          border-[#173932]/12

          bg-[#FBF8F3]

          px-4

          text-[12px]

          text-[#173932]

          outline-none

          transition-all
          duration-300

          placeholder:text-[#173932]/30

          hover:border-[#173932]/25

          focus:border-[#F4B49C]
          focus:ring-2
          focus:ring-[#F4B49C]/10
        "
      />
    </div>
  );
}

/* =========================================================
   LABEL
========================================================= */

function FieldLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <label
      className="
        text-[9px]
        font-bold
        uppercase
        tracking-[0.18em]

        text-[#173932]/70
      "
    >
      {children}
    </label>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="
        group

        flex
        min-h-[105px]

        items-center

        gap-3

        rounded-[18px]

        border
        border-[#173932]/10

        bg-[#F2E7DB]

        p-4

        transition-all
        duration-300

        hover:border-[#F4B49C]/50
        hover:shadow-[0_12px_30px_rgba(20,48,42,0.07)]
      "
    >
      <span
        className="
          flex
          size-10
          shrink-0

          items-center
          justify-center

          rounded-full

          bg-[#F4B49C]

          text-[#173932]
        "
      >
        {icon}
      </span>

      <div>
        <p
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.18em]

            text-[#173932]/40
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1

            text-[11px]
            leading-[1.5]

            text-[#173932]
          "
        >
          {value}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return content;
}