import { motion } from "framer-motion"
import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
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
      className="min-h-screen px-6 md:px-20 py-22 bg-zinc-900 "
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-1"
      >
        <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
        <p className="text-white mt-2">
          {/* Building intelligent systems that bridge hardware, software, and AI */}
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-14 items-center">
        {/* Image */}
        {/* <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About"
            className="w-[320px] md:w-[420px] rounded-2xl shadow-lg"
          />
        </motion.div> */}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            {/* My Journey */}
          </h3>

          <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
            I am a multidisciplinary technology professional with expertise in
            IoT, robotics, artificial intelligence, machine learning, deep
            learning, computer vision, cybersecurity, and PCB design. I specialize
            in building smart, autonomous, and intelligent systems by combining
            software, hardware, and AI to solve real-world problems.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
            From designing multi-layer PCBs for complex electronics to developing
            autonomous robots powered by ROS, my work spans both the physical and
            digital realms of engineering. I build AI/ML pipelines, deep learning
            systems, and cybersecurity solutions that transform data into
            actionable technology.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10 text-justify">
            I believe in building technology that interacts seamlessly with the
            real world. Every solution I design focuses on efficiency, reliability,
            scalability, and innovation.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-500 cursor-pointer">
            {/* Robotics */}
            <motion.div
              whileHover={{ y: -1 }}

              
              className="bg-zinc-800 rounded-xl p-6 border h-48
              hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer 
              shadow-[0_0_30px_rgba(16,185,129,0.15)] 
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] 
               border-emerald-500/30
               "
            >
              <FaRobot className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold text-xl mb-2 text-white">
                Robotics & Automation
              </h4>
              <p className="text-zinc-400 text-sm">
                Autonomous robots using ROS1/ROS2, sensor fusion, motion planning,
                object detection, and voice control.
              </p>
            </motion.div>

            {/* IoT & Hardware */}
            <motion.div
              whileHover={{ y: -1 }}
              className="bg-zinc-800 cursor-pointer duration-700 transition-all rounded-xl p-6 border ease-in-out shadow-[0_0_30px_rgba(16,185,129,0.15)] 
               border-emerald-500/30
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] hover:scale-105 "
            >
              <FaMicrochip className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold mb-2 text-white text-xl">
                IoT & PCB Design
              </h4>
              <p className="text-zinc-400 text-sm">
                Smart IoT systems and multi-layer PCB designs (up to 8 layers)
                with optimized signal integrity and power management.
              </p>
            </motion.div>

            {/* AI & Deep Learning */}
            <motion.div
              whileHover={{ y: -1 }}
              className="bg-zinc-800  rounded-xl hover:scale-105 cursor-pointer duration-700 ease-in-out transition-all p-6 border  shadow-[0_0_30px_rgba(16,185,129,0.15)] 
               border-emerald-500/30 h-48
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] "
            >
              <FaBrain className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold mb-2 text-white text-xl">
                ML & Deep Learning
              </h4>
              <p className="text-zinc-400 text-sm">
                CNNs, RNNs, LSTMs, GANs, NLP, computer vision, and predictive
                analytics using TensorFlow, PyTorch, and OpenCV.
              </p>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div
              whileHover={{ y: -1 }}
              className="bg-zinc-800 rounded-xl cursor-pointer hover:scale-105
              shadow-[0_0_30px_rgba(16,185,129,0.15)] 
               border-emerald-500/30
              hover:shadow-[0_0_45px_rgba(16,185,129,0.3)] transition-all duration-700 p-6 border  "
            >
              <FaShieldAlt className="text-blue-400 text-2xl mb-3" />
              <h4 className="font-bold text-xl mb-2 text-white">
                Cybersecurity
              </h4>
              <p className="text-zinc-400 text-sm">
                Malware detection systems and threat analysis pipelines powered
                by machine learning.
              </p>
            </motion.div>

           
          </div>
        </motion.div>
      </div>
    </section>
  )
}
