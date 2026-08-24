"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  "Individual Therapy",
  "Couples Counseling",
  "Anxiety Support",
  "Stress Management",
  "Personal Growth",
  "Mindfulness Therapy",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F3] text-[#173932]">

      {/* =========================
          HERO
      ========================== */}
      <section className="overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
            "
          >
            Contact & Appointments
          </motion.p>

          <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:items-end">

            <motion.h1
              initial={{
                opacity: 0,
                x: -60,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                display-font
                max-w-[700px]
                text-[clamp(3.5rem,6vw,6.5rem)]
                leading-[0.9]
                tracking-[-0.05em]
              "
            >
              Let&apos;s begin
              <br />
              your journey.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="max-w-[520px] lg:ml-auto"
            >
              <p className="text-[14px] leading-[1.8] text-[#173932]/65">
                Reaching out is the first step. Tell us a little about
                what you&apos;re looking for, and our team will help
                connect you with the support that feels right for you.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PEACH LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-5
          h-px
          origin-left
          bg-[#F4B49C]
          md:mx-10
          lg:mx-16
        "
      />

      {/* =========================
          CONTACT + FORM
      ========================== */}
      <section className="px-5 py-12 md:px-10 lg:px-16 lg:py-16">
        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            overflow-hidden
            rounded-[28px]
            border
            border-[#173932]/10
            bg-[#F4EADF]
            lg:grid-cols-[0.78fr_1.22fr]
          "
        >

          {/* =====================
              LEFT
          ====================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              bg-[#173932]
              p-8
              text-white
              md:p-10
              lg:p-12
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#F4B49C]
              "
            >
              Talk With Us
            </p>

            <h2
              className="
                display-font
                mt-5
                max-w-[420px]
                text-[40px]
                leading-[1]
                tracking-[-0.04em]
                md:text-[48px]
              "
            >
              We&apos;re here
              <br />
              when you&apos;re ready.
            </h2>

            <p
              className="
                mt-6
                max-w-[410px]
                text-[13px]
                leading-[1.8]
                text-white/60
              "
            >
              Have a question before booking? Contact our team and
              we&apos;ll help you understand your options.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-10 space-y-4">

              <ContactItem
                icon={<Phone size={17} />}
                title="Call us"
                value="+1 (310) 628-9475"
                href="tel:+13106289475"
              />

              <ContactItem
                icon={<Mail size={17} />}
                title="Email us"
                value="hello@talkora.com"
                href="mailto:hello@talkora.com"
              />

              <ContactItem
                icon={<MapPin size={17} />}
                title="Visit us"
                value="845 Beverly Avenue, Los Angeles"
              />

              <ContactItem
                icon={<Clock3 size={17} />}
                title="Working hours"
                value="Mon – Fri · 9:00 AM – 6:00 PM"
              />

            </div>

            {/* DECORATION */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -bottom-28
                -right-28
                size-[300px]
                rounded-full
                border
                border-[#F4B49C]/20
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-16
                -right-16
                size-[200px]
                rounded-full
                border
                border-white/10
              "
            />
          </motion.div>

          {/* =====================
              APPOINTMENT FORM
          ====================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-7 md:p-10 lg:p-12"
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4B49C]
                "
              >
                <CalendarDays size={17} />
              </span>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em]">
                  Appointment
                </p>

                <h2 className="display-font text-[28px]">
                  Book a consultation
                </h2>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-9"
            >
              <div className="grid gap-5 md:grid-cols-2">

                <Field
                  label="First Name"
                  placeholder="Your first name"
                />

                <Field
                  label="Last Name"
                  placeholder="Your last name"
                />

                <Field
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />

                <Field
                  label="Phone"
                  type="tel"
                  placeholder="+1 000 000 0000"
                />

              </div>

              {/* SERVICE */}
              <div className="mt-5">
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  How can we support you?
                </label>

                <select
                  defaultValue=""
                  className="
                    mt-2
                    h-[54px]
                    w-full
                    rounded-[12px]
                    border
                    border-[#173932]/12
                    bg-[#FBF8F3]
                    px-4
                    text-[13px]
                    outline-none
                    transition
                    focus:border-[#F4B49C]
                  "
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE / TIME */}
              <div className="mt-5 grid gap-5 md:grid-cols-2">

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    className="
                      mt-2
                      h-[54px]
                      w-full
                      rounded-[12px]
                      border
                      border-[#173932]/12
                      bg-[#FBF8F3]
                      px-4
                      text-[13px]
                      outline-none
                      transition
                      focus:border-[#F4B49C]
                    "
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Preferred Time
                  </label>

                  <select
                    className="
                      mt-2
                      h-[54px]
                      w-full
                      rounded-[12px]
                      border
                      border-[#173932]/12
                      bg-[#FBF8F3]
                      px-4
                      text-[13px]
                      outline-none
                      transition
                      focus:border-[#F4B49C]
                    "
                  >
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div className="mt-5">
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Message
                </label>

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
                    text-[13px]
                    leading-[1.7]
                    outline-none
                    transition
                    placeholder:text-[#173932]/35
                    focus:border-[#F4B49C]
                  "
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  y: -3,
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
                  group
                  mt-6
                  flex
                  min-h-[56px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#F4B49C]
                  text-[13px]
                  font-semibold
                  text-[#173932]
                  transition-colors
                  duration-300
                  hover:bg-[#F7C2AD]
                "
              >
                Request Appointment

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </motion.button>

              <p
                className="
                  mt-4
                  text-center
                  text-[10px]
                  leading-[1.6]
                  text-[#173932]/45
                "
              >
                This form is for appointment requests and general
                enquiries. Please do not use it for urgent or
                emergency situations.
              </p>

            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* =========================================
   CONTACT ITEM
========================================= */

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
      whileHover={{ x: 5 }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-[14px]
        border
        border-white/10
        p-4
        transition-colors
        duration-300
        hover:bg-white/[0.05]
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
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white/40
          "
        >
          {title}
        </p>

        <p className="mt-1 text-[12px] text-white/80">
          {value}
        </p>
      </div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

/* =========================================
   INPUT
========================================= */

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]
        "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          mt-2
          h-[54px]
          w-full
          rounded-[12px]
          border
          border-[#173932]/12
          bg-[#FBF8F3]
          px-4
          text-[13px]
          outline-none
          transition
          placeholder:text-[#173932]/35
          focus:border-[#F4B49C]
        "
      />
    </div>
  );
}