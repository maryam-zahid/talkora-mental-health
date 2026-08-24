"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import Container from "@/components/ui/container";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Pages", href: "#", dropdown: true },
  { label: "Contact", href: "#contact" },
];

const navVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.075,
    },
  },
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(19, 39, 34, 0.88)"
              : "rgba(10, 14, 12, 0.10)",
            backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={[
            "border-b transition-shadow duration-300",
            scrolled
              ? "border-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.16)]"
              : "border-white/10",
          ].join(" ")}
        >
          <Container>
            <div
              className="
                grid
                h-[96px]
                grid-cols-[390px_1fr_250px]
                items-center

                xl:h-[100px]

                2xl:grid-cols-[430px_1fr_260px]
              "
            >
              {/* LOGO */}
              <motion.a
                href="#home"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.72,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex w-fit items-center gap-3 text-white"
              >
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    rotate: -10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ rotate: 7 }}
                  className="relative flex size-10 items-center justify-center"
                >
                  <span className="absolute size-9 rounded-full border border-[#F4B49C]" />
                  <span className="absolute size-5 rotate-45 rounded-[6px] border border-[#CFE3D6]" />
                  <span className="size-2 rounded-full bg-[#F4B49C]" />
                </motion.span>

                <div>
                  <span
                    className="
                      display-font
                      block
                      text-[34px]
                      leading-none
                      tracking-[-0.04em]
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
                      text-white/65
                    "
                  >
                    Mental Health
                  </span>
                </div>
              </motion.a>

              {/* DESKTOP NAV */}
              <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="
                  hidden
                  items-center
                  justify-end
                  gap-9
                  pr-3

                  xl:flex

                  2xl:gap-10
                  2xl:pr-4
                "
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    variants={navItemVariants}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    className={[
                      "group relative flex items-center gap-1.5",
                      "display-font text-[20px] font-medium",
                      "transition-colors duration-300",
                      item.label === "Home"
                        ? "text-[#F4B49C]"
                        : "text-white hover:text-[#F4B49C]",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>

                    {item.dropdown && (
                      <ChevronDown
                        size={15}
                        strokeWidth={1.6}
                        className="
                          mt-1
                          transition-transform
                          duration-300
                          group-hover:rotate-180
                        "
                      />
                    )}

                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-px
                        w-0
                        bg-[#F4B49C]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </motion.a>
                ))}
              </motion.nav>

              {/* APPOINTMENT CTA */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.68,
                  delay: 0.68,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden justify-end xl:flex"
              >
                <motion.a
                  href="#appointment"
                  whileHover={{
                    y: -2,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="
                    inline-flex
                    min-h-[56px]
                    min-w-[220px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F4B49C]
                    px-7
                    text-[15px]
                    font-semibold
                    text-[#173932]
                    transition-colors
                    duration-300
                    hover:bg-[#F7C2AD]
                  "
                >
                  Make An Appointment
                </motion.a>
              </motion.div>

              {/* MOBILE BUTTON */}
              <div className="col-start-3 flex justify-end xl:hidden">
                <motion.button
                  type="button"
                  onClick={() => {
                    setMobileOpen((current) => !current);
                  }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Toggle navigation"
                  className="
                    flex
                    size-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-white/10
                    text-white
                    backdrop-blur-lg
                  "
                >
                  <AnimatePresence mode="wait">
                    {mobileOpen ? (
                      <motion.span
                        key="close"
                        initial={{
                          opacity: 0,
                          rotate: -90,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          rotate: 90,
                          scale: 0.8,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <X size={20} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{
                          opacity: 0,
                          rotate: 90,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          rotate: -90,
                          scale: 0.8,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        <Menu size={20} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </Container>
        </motion.div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -18,
            }}
            transition={{
              duration: 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#102D28]/97
              px-5
              pt-28
              backdrop-blur-2xl
              xl:hidden
            "
          >
            <motion.nav
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.08,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="mx-auto flex max-w-[720px] flex-col"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 22,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.52,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-5
                    text-white
                  "
                >
                  <span className="display-font text-[35px]">
                    {item.label}
                  </span>

                  {item.dropdown && (
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                    />
                  )}
                </motion.a>
              ))}

              <motion.a
                href="#appointment"
                onClick={() => {
                  setMobileOpen(false);
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.52,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="
                  mt-8
                  flex
                  min-h-[56px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F4B49C]
                  px-6
                  text-[14px]
                  font-semibold
                  text-[#173932]
                "
              >
                Make An Appointment
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}