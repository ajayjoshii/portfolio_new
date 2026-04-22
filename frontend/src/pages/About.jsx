import { motion } from "framer-motion"
import CountUp from "react-countup"
import {
  FaRobot,
  FaMicrochip,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa"
import aboutImg from "../assets/profile.jpeg"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-22 bg-[#070b14]"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        {/* <h2 className="text-3xl md:text-4xl mt-10 font-bold text-blue-400">About Me</h2> */}

        <h2 className="font-bold text-2xl md:text-4xl text-green-600 mt-10">
          {"About Me".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-14 items-center">
        {/* ============================= */}
        {/* ✅ STATS SECTION (NEW ADDED) */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Years Experience */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800
              rounded-xl p-8 text-center
              shadow-[0_0_40px_rgba(16,185,129,0.25)]
              hover:scale-105 transition-all duration-500">
            <h3 className="text-4xl font-bold text-emerald-400 mb-2">
              <CountUp end={5} duration={3} />+
            </h3>
            <p className="text-zinc-300 text-sm tracking-wider">
              YEARS EXPERIENCE
            </p>
          </div>

          {/* Projects */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800
              rounded-xl p-8 text-center
              shadow-[0_0_40px_rgba(16,185,129,0.25)]
              hover:scale-105 transition-all duration-500">
            <h3 className="text-4xl font-bold text-emerald-400 mb-2">
              <CountUp end={50} duration={3} />+
            </h3>
            <p className="text-zinc-300 text-sm tracking-wider">
              PROJECTS COMPLETED
            </p>
          </div>

          {/* Security Audits */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800
              rounded-xl p-8 text-center
              shadow-[0_0_40px_rgba(16,185,129,0.25)]
              hover:scale-105 transition-all duration-500">
            <h3 className="text-4xl font-bold text-emerald-400 mb-2">
              <CountUp end={100} duration={3} />+
            </h3>
            <p className="text-zinc-300 text-sm tracking-wider">
              SECURITY AUDITS
            </p>
          </div>

          {/* CTF */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800
              rounded-xl p-8 text-center
              shadow-[0_0_40px_rgba(16,185,129,0.25)]
              hover:scale-105 transition-all duration-500">
            <h3 className="text-4xl font-bold text-emerald-400 mb-2">
              <CountUp end={25} duration={3} />+
            </h3>
            <p className="text-zinc-300 text-sm tracking-wider">
              CTF COMPETITIONS
            </p>
          </div>
        </motion.div>

        

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
            I am a multidisciplinary technology professional with expertise in
            IoT, robotics, artificial intelligence, machine learning, deep
            learning, computer vision, cybersecurity, and PCB design.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
            From designing multi-layer PCBs to developing autonomous robots powered
            by ROS, my work spans both hardware and AI-driven systems.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-12 text-justify">
            I believe in building technology that interacts seamlessly with the
            real world — focusing on efficiency, scalability, and innovation.
          </p>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-zinc-800 rounded-xl p-6 border border-emerald-500/30
              shadow-[0_0_30px_rgba(16,185,129,0.15)]
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]
              hover:scale-105 transition-all duration-500"
            >
              <FaRobot className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold text-xl mb-2 text-white">
                Robotics & Automation
              </h4>
              <p className="text-zinc-400 text-sm">
                Autonomous robots using ROS, motion planning, sensor fusion,
                and AI perception systems.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-zinc-800 rounded-xl p-6 border border-emerald-500/30
              shadow-[0_0_30px_rgba(16,185,129,0.15)]
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]
              hover:scale-105 transition-all duration-500"
            >
              <FaMicrochip className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold text-xl mb-2 text-white">
                IoT & PCB Design
              </h4>
              <p className="text-zinc-400 text-sm">
                Smart IoT systems and optimized multi-layer PCB designs with
                signal integrity and power management.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-zinc-800 rounded-xl p-6 border border-emerald-500/30
              shadow-[0_0_30px_rgba(16,185,129,0.15)]
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]
              hover:scale-105 transition-all duration-500"
            >
              <FaBrain className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold text-xl mb-2 text-white">
                ML & Deep Learning
              </h4>
              <p className="text-zinc-400 text-sm">
                CNNs, NLP, Computer Vision and predictive analytics using
                TensorFlow & PyTorch.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-zinc-800 rounded-xl p-6 border border-emerald-500/30
              shadow-[0_0_30px_rgba(16,185,129,0.15)]
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]
              hover:scale-105 transition-all duration-500"
            >
              <FaShieldAlt className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold text-xl mb-2 text-white">
                Cybersecurity
              </h4>
              <p className="text-zinc-400 text-sm">
                Threat detection, malware analysis, and AI-powered
                cybersecurity systems.
              </p>
            </motion.div>
          </div>



        </motion.div>
      </div>
    </section>
  )
}