import { motion } from "framer-motion";
import { ShellIcon } from "lucide-react";
import { FaRobot, FaMicrochip, FaBrain, FaCogs, FaShieldAlt, FaLayerGroup, FaPython, FaJsSquare, FaRust, FaTerminal } from "react-icons/fa";
import { SiC, SiCplusplus, SiGnubash, SiGo } from "react-icons/si";

export default function Skills() {
  // Core skills
  const technicalSkills = [
    {
      title: "Robotics & Automation",
      description:
        "I build autonomous robots capable of navigation, object detection, manipulation, and voice-controlled operation. Proficient in ROS1 & ROS2, sensor integration, and motion planning.",
      icon: <FaRobot className="text-primary w-8 h-8" />,
    },
    {
      title: "IoT Systems",
      description:
        "I develop smart IoT solutions for homes, offices, industries, and healthcare, integrating sensors, microcontrollers, Raspberry Pi, and cloud dashboards.",
      icon: <FaMicrochip className="text-primary w-8 h-8" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "I design models for image classification, object detection, NLP, predictive analytics, and recommendation systems using TensorFlow, PyTorch, and OpenCV.",
      icon: <FaBrain className="text-primary w-8 h-8" />,
    },
    {
      title: "Deep Learning",
      description:
        "I implement advanced solutions with CNNs, RNNs, LSTMs, GANs, and transfer learning, tackling problems in computer vision, NLP, and time-series prediction.",
      icon: <FaCogs className="text-primary w-8 h-8" />,
    },
    {
      title: "Cybersecurity",
      description:
        "I develop malware detection systems and threat analysis pipelines using ML techniques to enhance digital security.",
      icon: <FaShieldAlt className="text-primary w-8 h-8" />,
    },
    {
      title: "PCB Design",
      description:
        "I design multi-layer PCBs (up to 8 layers) for high-density, high-performance electronics, ensuring signal integrity, power management, and compact layouts.",
      icon: <FaLayerGroup className="text-primary w-8 h-8" />,
    },
  ];

  // Programming languages with proficiency
  const languages = [
    { name: "Python", icon: <FaPython className="w-6 h-6 text-blue-400" />, percent: 100 },
    { name: "C", icon: <SiC className="w-6 h-6 text-green-400" />, percent: 100 },
    { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-blue-600" />, percent: 100 },
    { name: "Rust", icon: <FaRust className="w-6 h-6 text-orange-600" />, percent: 100 },
    { name: "JavaScript", icon: <FaJsSquare className="w-6 h-6 text-yellow-400" />, percent: 90 },
    { name: "Go", icon: <SiGo className="w-6 h-6 text-cyan-400" />, percent: 60 },
    { name: "Bash Scripting", icon: <FaTerminal className="w-6 h-6 text-cyan-400" />, percent: 100 },
    { name: "Shell Scripting", icon: <SiGnubash className="w-10 h-6 text-cyan-400" />, percent: 100 },
  ];

  return (
    <section className="min-h-screen py-16 bg-black/90 text-zinc-200" id="skills">
      <div className="max-w-7xl mx-auto px-6 mt-10">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/40 backdrop-blur p-6 rounded-xl hover:scale-105 cursor-pointer border-emerald-500/30
                shadow-[0_0_30px_rgba(16,185,129,0.15)]
                hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]
                transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-zinc-400 text-sm md:text-base">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-zinc-800/30 backdrop-blur rounded-lg shadow hover:scale-110 transition-transform duration-300 w-32"
                whileHover={{ y: -5 }}
              >
                {lang.icon}
                <span className="text-sm font-medium">{lang.name}</span>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                    style={{ width: `${lang.percent}%` }}
                  ></div>
                </div>
                <span className="text-xs text-zinc-400">{lang.percent}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
