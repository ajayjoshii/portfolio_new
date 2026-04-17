import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import home1 from "../assets/profile.jpeg";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Home() {
  const roles = [
    "AI Engineer",
    "Security Specialist",
    "PCB Designer",
    "Civil Engineer",
    "Malware Developer",
    "Innovator",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 pt-28 sm:pt-20 lg:pt-28 gap-10 mb-0 bg-zinc-800">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

          <div className="absolute bg-[#070b14] inset-0 z-0 pointer-events-none overflow-hidden ">

            {/* 🌐 FLOATING NODES */}
            {[...Array(25)].map((_, i) => {
              const size = Math.random() * 6 + 3;

              return (
                <motion.div
                  key={`node-${i}`}
                  className="absolute rounded-full bg-gray-500/40"
                  style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: "0 0 12px rgba(34,197,94,0.4)",
                  }}
                  animate={{
                    x: [0, Math.random() * 120 - 60, 0],
                    y: [0, Math.random() * 120 - 60, 0],
                    opacity: [0.25, 0.7, 0.25],
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              );
            })}

            {/* 🔗 ENHANCED CIRCUIT LINES */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(15)].map((_, i) => {
                const x1 = Math.random() * 100;
                const y1 = Math.random() * 100;
                const x2 = Math.random() * 100;
                const y2 = Math.random() * 100;

                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(34,197,94,0.3)"
                    strokeWidth="1.2"
                    strokeDasharray="6 10"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(34,197,94,0.35))",
                    }}
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: [0, 1, 1],
                      opacity: [0, 0.6, 0.2],
                      strokeDashoffset: [0, -40],
                      x: [0, Math.random() * 20 - 10, 0],
                      y: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                      duration: 12 + Math.random() * 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </svg>

            {/* ⚡ MATRIX RAIN */}
            {[...Array(35)].map((_, i) => (
              <motion.span
                key={`rain-${i}`}
                className="absolute text-green-400/30 text-xs font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "-10%",
                }}
                animate={{
                  y: ["0vh", "120vh"],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear",
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}

          </div>


        </div>

        <motion.div
          // initial={{ opacity: 0, x: -60 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1 }}

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.08 }}
          animate={{ scale: [1, 1.02, 1] }}
          className="relative z-10 max-w-xl text-center md:text-left text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <motion.span
              className="bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 0.6,
                backgroundPosition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Anish Parajuli
            </motion.span>
          </h1>




          <div className="mt-3 sm:mt-4 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-green-400"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -10 }}

            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 4, behavior: "smooth" }}

            className="mt-4 text-green-300 text-justify font-semibold leading-relaxed text-sm sm:text-base md:text-lg">
            I build intelligent, secure, and scalable solutions by combining software
            engineering, AI, cybersecurity, and hardware design—transforming complex ideas
            into efficient, innovative, and future-ready technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            animate={{ scale: [1, 1.02, 1] }}
            className="mt-8 sm:mt-10 flex flex-row mb-10 gap-4 justify-center md:justify-start">
            <a href="/cv.pdf" download>
              <button className="cursor-pointer group flex gap-2 items-center px-6 py-3 bg-[#5c5fe9] text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition">
                Download CV
              </button>
            </a>

            <Link to="/contact">
              <button className="cursor-pointer group flex gap-2 items-center px-6 py-3 bg-[#5c5fe9] text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <img
          alt="Anish Parajuli"
          className="relative z-10 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[370px] rounded-full object-cover border-4 border-green-400"
        />
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}