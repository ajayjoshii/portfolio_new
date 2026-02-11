// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import home1 from "../assets/profile.jpeg";
// import About from "./About";
// import Skills from "./Skills";
// import Contact from "./Contact";
// import Projects from "./Projects";
// import Experience from "./Experience";

// export default function Home() {
//   const roles = [
//     "AI Engineer",
//     "Security Specialist",
//     "PCB Designer",
//     "Civil Engineer",
//     "Malware Developer",
//     "Innovator",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % roles.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <section
//         className="
//           relative min-h-screen overflow-hidden
//           flex flex-col-reverse md:flex-row
//           items-center justify-between
//           px-6 md:px-20 pt-28 sm:pt-2 lg:pt-28 gap-10 mb-0 
//           bg-zinc-800
//         "
//       >
//         {/* ===== GREEN OVERLAY (video-like glow) ===== */}
//         <div className="absolute inset-0 z-0" />

//         {/* ============ CIRCUIT BACKGROUND ============ */}
//         <div className="absolute inset-0 z-0 pointer-events-none">
//           {/* Horizontal signals */}
//           {[...Array(7)].map((_, i) => (
//             <motion.div
//               key={`h-${i}`}
//               className="absolute h-px w-72 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
//               style={{ top: `${12 + i * 12}%`, left: "-30%" }}
//               animate={{ x: ["0%", "160%"] }}
//               transition={{
//                 duration: 10 + i,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}

//           {/* Vertical signals */}
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={`v-${i}`}
//               className="absolute w-px h-44 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-30"
//               style={{ left: `${15 + i * 14}%`, top: "-30%" }}
//               animate={{ y: ["0%", "160%"] }}
//               transition={{
//                 duration: 12 + i,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}

//           {/* Blinking circuit nodes */}
//           {[...Array(12)].map((_, i) => (
//             <motion.span
//               key={`n-${i}`}
//               className="absolute w-2 h-2 rounded-full bg-green-400"
//               style={{
//                 top: `${10 + (i % 6) * 15}%`,
//                 left: `${10 + (i % 5) * 18}%`,
//               }}
//               animate={{
//                 opacity: [0.2, 0.9, 0.2],
//                 scale: [1, 1.6, 1],
//               }}
//               transition={{
//                 duration: 2 + (i % 3),
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>

//         {/* ============ LEFT CONTENT ============ */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-xl text-center md:text-left text-white"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             {/* Hi, I'm{" "} */}
//             <motion.span
//               className="bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent inline-block"
//               initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 filter: "blur(0px)",
//                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               }}
//               transition={{
//                 duration: 0.6,
//                 backgroundPosition: {
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//               }}
//               style={{ backgroundSize: "200% 200%" }}
//             >
//               Anish Parajuli
//             </motion.span>
//           </h1>

//           {/* Animated Role */}
//           <div className="mt-4 h-10 overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={roles[index]}
//                 initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
//                 transition={{ duration: 0.6 }}
//                 className="text-xl md:text-2xl font-semibold text-green-400"
//               >
//                 {roles[index]}
//               </motion.p>
//             </AnimatePresence>
//           </div>

//           {/* Description */}
//           <p className="mt-4 text-zinc-200 text-justify font-semibold leading-relaxed">
//             I build intelligent, secure, and scalable solutions by combining software
//             engineering, AI, cybersecurity, and hardware design—transforming complex ideas
//             into efficient, innovative, and future-ready technologies.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 mb-10 flex gap-4 justify-center md:justify-start">
//             {/* <a
//               href="/cv.pdf"
//               download
//               className="bg-green-500 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-700 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
//             >
//               Download CV
//             </a> */}

//             <a href="/cv.pdf" download>

//             <button
//               class="cursor-pointer group/download relative flex gap-1 px-4 py-3 md:text-xl text-sm bg-[#5c5fe9] text-[#f1f1f1] rounded-2xl hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] md:px-4 md:py-3"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 height="24px"
//                 width="24px"
//               >
//                 <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
//                 <g
//                   stroke-linejoin="round"
//                   stroke-linecap="round"
//                   id="SVGRepo_tracerCarrier"
//                 ></g>
//                 <g id="SVGRepo_iconCarrier">
//                   <g id="Interface / Download">
//                     <path
//                       stroke-linejoin="round"
//                       stroke-linecap="round"
//                       stroke-width="2"
//                       stroke="#f1f1f1"
//                       d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
//                       id="Vector"
//                     ></path>
//                   </g>
//                 </g>
//               </svg>
//               Download CV
              
              
//             </button>

//             </a>



//             <Link to="/contact">

//              <button
//               class="cursor-pointer md:px-6 md:py-3 text-sm rounded-2xl group/download relative flex gap-1 px-8 py-[14px] bg-[#5c5fe9] text-[#f1f1f1] md:text-xl hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
//             >Contact US</button>

              

//             </Link>
//           </div>
//         </motion.div>

//         {/* ============ PROFILE IMAGE ============ */}
//         <motion.img
//           src={home1}
//           alt="Anish Parajuli"
//           className="relative z-10 w-[200px] h-[200px] md:w-[350px] md:h-[370px] rounded-full object-cover border-4 border-green-400"
//           animate={{ scale: [1, 1.03, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </section>

//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//     </>
//   );
// }


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
      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative min-h-screen overflow-hidden
          flex flex-col-reverse md:flex-row
          items-center justify-between
          px-6 sm:px-10 md:px-20 pt-28 sm:pt-20 lg:pt-28 gap-10 mb-0
          bg-zinc-800
        "
      >
        {/* ===== GREEN OVERLAY (video-like glow) ===== */}
        <div className="absolute inset-0 z-0" />

        {/* ============ CIRCUIT BACKGROUND ============ */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Horizontal signals */}
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px w-72 sm:w-80 md:w-96 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
              style={{ top: `${12 + i * 12}%`, left: "-30%" }}
              animate={{ x: ["0%", "160%"] }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Vertical signals */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px h-44 sm:h-48 md:h-56 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-30"
              style={{ left: `${15 + i * 14}%`, top: "-30%" }}
              animate={{ y: ["0%", "160%"] }}
              transition={{
                duration: 12 + i,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Blinking circuit nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={`n-${i}`}
              className="absolute w-2 h-2 rounded-full bg-green-400"
              style={{
                top: `${10 + (i % 6) * 15}%`,
                left: `${10 + (i % 5) * 18}%`,
              }}
              animate={{
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* ============ LEFT CONTENT ============ */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-xl text-center md:text-left text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <motion.span
              className="bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300 bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
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

          {/* Animated Role */}
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

          {/* Description */}
          <p className="mt-4 text-zinc-200 text-justify font-semibold leading-relaxed text-sm sm:text-base md:text-lg">
            I build intelligent, secure, and scalable solutions by combining software
            engineering, AI, cybersecurity, and hardware design—transforming complex ideas
            into efficient, innovative, and future-ready technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-row mb-10 gap-4 justify-center md:justify-start">
            <a href="/cv.pdf" download>
              <button
                className="cursor-pointer group relative flex gap-2 items-center px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg bg-[#5c5fe9] text-[#f1f1f1] rounded-2xl font-semibold shadow-xl active:shadow-inner transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    />
                  </g>
                </svg>
                Download CV
              </button>
            </a>

            <Link to="/contact">
              <button
                className="cursor-pointer group relative flex gap-2 items-center px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg bg-[#5c5fe9] text-[#f1f1f1] rounded-2xl font-semibold shadow-xl active:shadow-inner transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* ============ PROFILE IMAGE ============ */}
        <motion.img
          src={home1}
          alt="Anish Parajuli"
          className="relative z-10 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[370px] rounded-full object-cover border-4 border-green-400"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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



