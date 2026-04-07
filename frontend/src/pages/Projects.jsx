// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const categories = ["All", "IOT", "Robotics", "Machine Learning", "Security"];

// const projects = [
//   {
//     title: "Cybersecurity Projects",
//     category: "Security",
//     description:
//       "A collection of hands-on cybersecurity projects focused on network defense, vulnerability assessment, privacy research, and malware analysis.",
//     image:
//       "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200",
//     tech: ["Python", "Networking", "Security", "Linux"],
//     tech1:["MAC Address Randomization Tool","Network Discovery & Port Scanner"],
//     demo: "/projects/Cybersecurity-project",
//     code: "https://github.com/ParajuliCoder",
//   },
//   {
//     title: "IoT Projects",
//     category: "IOT",
//     description:
//       "Projects focused on automation, smart sensing, and connected systems using IoT and robotics.",
//     image:
//       "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200",
//     tech: ["IoT", "Raspberry Pi", "MQTT", "Cloud"],
//     demo: "/projects/iot-robotics-project",
//     code: "https://github.com/ParajuliCoder",
//   },
//   {
//     title: "Robotics Projects",
//     category: "Robotics",
//     description:
//       "Projects focused on intelligent automation, robotics control systems, and real-world robotic applications.",
//     image:
//       "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200",
//     tech: ["Robotics", "Sensors", "Automation"],
//     demo: "/projects/iot-robotics-project",
//     code: "https://github.com/ParajuliCoder",
//   },
//   {
//     title: "Malware Classification System",
//     category: "Machine Learning",
//     description:
//       "Developed a machine learning model to classify malware samples using static and behavioral features, improving threat detection and cybersecurity analysis.",
//     image:
//       "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1200",
//     tech: ["Python", "Machine Learning", "Cybersecurity"],
//     demo: "/projects/",

//     code: "https://github.com/ParajuliCoder",
//   },
//   {
//     title: "Jarvis AI Chatbot",
//     category: "Machine Learning",
//     description:
//       "Built an intelligent chatbot assistant capable of understanding user queries, performing tasks, and providing conversational responses using NLP techniques.",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
//     tech: ["Python", "NLP", "AI"],
//     demo: "/projects/",

//     code: "https://github.com/ParajuliCoder",
//   },
//   {
//     title: "Vehicle Detection System",
//     category: "Machine Learning",
//     description:
//       "Implemented a computer vision system to detect and track vehicles in real time using object detection models for traffic monitoring and analysis.",
//     image:
//       "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200",
//     tech: ["OpenCV", "YOLO", "Deep Learning"],
//     demo: "/projects/",

//     code: "https://github.com/ParajuliCoder",
//   },
//   {
//     title: "Human Emotion & Laziness Detection",
//     category: "Machine Learning",
//     description:
//       "Developed a model to analyze facial expressions and behavior patterns to detect human emotions and inactivity levels for productivity insights.",
//     image:
//       "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200",
//     tech: ["Deep Learning", "Computer Vision"],
//     demo: "/projects/",

//     code: "https://github.com/ParajuliCoder",
//   },
//   {
//     title: "AI Security Monitoring",
//     category: "Security",
//     description:
//       "AI-based threat detection system that analyzes anomalies in network traffic.",
//     image:
//       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
//     tech: ["AI", "Cybersecurity"],
//     demo: "/projects/",

//     code: "https://github.com/ParajuliCoder",

//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   return (
//     <section className="bg-[#0b0b0f] py-24 px-6 text-white">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold">
//             My <span className="text-violet-500">Projects</span>
//           </h2>
//           <p className="text-gray-400 mt-3">
//             A selection of real-world systems I’ve designed and built
//           </p>
//         </motion.div>

//         <div className="flex justify-center gap-4 mb-14 flex-wrap">
//           {categories.map((cat, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-6 py-2 rounded-full text-sm transition-all duration-300
//                 ${activeCategory === cat
//                   ? "bg-green-500 text-black shadow-lg shadow-green-500/40"
//                   : "bg-[#15151c] text-gray-300 hover:bg-green-500/10"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <motion.div
//           key={activeCategory}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ y: -8 }}
//               className="bg-[#15151c] rounded-xl overflow-hidden shadow-lg hover:shadow-violet-500/20 transition"
//             >
//               <div className="overflow-hidden">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="h-48 w-full object-cover"
//                   whileHover={{ scale: 1.08 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4 leading-relaxed text-justify h-22">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>










//                 <div className="flex gap-3">
//                   {project.demo !== "#" ? (
//                     <Link
//                       to={project.demo}
//                       className="flex-1 text-center text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 transition"
//                     >
//                       View Project
//                     </Link>
//                   ) : (
//                     <button
//                       disabled
//                       className="flex-1 text-sm px-4 py-2 rounded-lg bg-gray-700 cursor-not-allowed"
//                     >
//                       View Demo
//                     </button>
//                   )}

//                   {project.code !== "#" ? (
//                     <a
//                       href={project.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center text-sm px-4 py-2 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition"
//                     >
//                       Code
//                     </a>
//                   ) : (
//                     <button
//                       disabled
//                       className="flex-1 text-sm px-4 py-2 rounded-lg border border-gray-700 text-gray-400 cursor-not-allowed"
//                     >
//                       Code
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <Link
//             to="/projects"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition"
//           >
//             View More Projects →
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import {
  Radar,
  WifiOff,
  Globe,
  ShieldAlert,
  ShieldCheck,
  Bug,
  Keyboard,
  Network,
  Database,
  FileSearch,
  Code,
  Bot,
  Eye,
  DoorOpen,
  Activity,
  Cpu,
  Scan,
  RadioTower,
  Fingerprint
} from "lucide-react";


const tools = [
  { title: "Network Scanner", desc: "Scans networks to discover hosts and open ports", tag: "SECURITY", route: "/projects/tools/network-scanner", icon: Scan },
  { title: "DDoS Testing Tool", desc: "Educational distributed denial-of-service testing", tag: "SECURITY", route: "/projects/tools/ddos-testing", icon: Radar },
  { title: "WiFi Deauth Tool", desc: "Deauthentication attacks for security testing", tag: "SECURITY", route: "/projects/tools/wifi-deauth", icon: WifiOff },
  { title: "IP & MAC Changer", desc: "Spoofs IP and MAC addresses for anonymity", tag: "SECURITY", route: "/projects/tools/ip-mac-changer", icon: Globe },
  { title: "ARP Spoofing Tool", desc: "Man-in-the-middle attack via ARP cache poisoning", tag: "SECURITY", route: "/projects/tools/arp-spoof", icon: Fingerprint },
  { title: "HTTPS Bypass", desc: "Research on HTTPS bypass techniques", tag: "SECURITY", route: "/projects/tools/https-bypass", icon: ShieldAlert },
  { title: "Backdoor & Vuln Scanner", desc: "Detects backdoors and vulnerabilities in systems", tag: "SECURITY", route: "/projects/tools/backdoor-vuln", icon: Bug },
  { title: "Keylogger", desc: "Keystroke logger for security research", tag: "SECURITY", route: "/projects/tools/keylogger", icon: Keyboard },
  { title: "Packet Sniffer", desc: "Captures and analyzes network packets", tag: "SECURITY", route: "/projects/tools/packet-sniffer", icon: Network },
  { title: "DNS Spoofer", desc: "Redirects DNS queries to malicious servers", tag: "SECURITY", route: "/projects/tools/dns-spoofer", icon: RadioTower },
  { title: "File Interceptor", desc: "Intercepts files during network transfers", tag: "SECURITY", route: "/projects/tools/file-interceptor", icon: FileSearch },
  { title: "Code Injector", desc: "Injects code into network traffic", tag: "SECURITY", route: "/projects/tools/code-injector", icon: Code },
  { title: "ARP Spoof Detector", desc: "Detects ARP spoofing attacks on networks", tag: "SECURITY", route: "/projects/tools/arp-detector", icon: ShieldCheck },

  { title: "Wildlife Intrusion Detection", desc: "IoT-based system for Nepali farms", tag: "IOT/ROBOTICS", route: "/projects/tools/wildlife-intrusion", icon: Activity },
  { title: "Human Following Robot", desc: "Robot that follows humans autonomously", tag: "IOT/ROBOTICS", route: "/projects/tools/human-following-robot", icon: Bot },
  { title: "Smart Stick for Blind", desc: "IoT-enabled cane for visually impaired", tag: "IOT/ROBOTICS", route: "/projects/tools/smart-stick", icon: Eye },
  { title: "Smart Doorbell", desc: "IoT-connected smart doorbell system", tag: "IOT/ROBOTICS", route: "/projects/tools/smart-doorbell", icon: DoorOpen },
  { title: "Security Robot", desc: "Autonomous security surveillance robot", tag: "IOT/ROBOTICS", route: "/projects/tools/security-robot", icon: Bot },
  { title: "Face Tracking Drone", desc: "Drone with real-time face tracking", tag: "IOT/ROBOTICS", route: "/projects/tools/face-tracking-drone", icon: Cpu },

  // MACHINE LEARNING TOOLS
  { title: "Malware Classification", desc: "Classifies malware using ML techniques", tag: "MACHINE LEARNING", route: "/projects/tools/malware-classification", icon: Cpu },
  { title: "Jarvis Chatbot", desc: "Intelligent chatbot assistant using NLP", tag: "MACHINE LEARNING", route: "/projects/tools/jarvis-chatbot", icon: Cpu },
  { title: "Vehicle Detection System", desc: "Detects vehicles in real-time with CV", tag: "MACHINE LEARNING", route: "/projects/tools/vehicle-detection", icon: Cpu },
  { title: "Human Emotion & Laziness Detection", desc: "Analyzes facial expressions to track emotions and inactivity", tag: "MACHINE LEARNING", route: "/projects/tools/emotion-laziness-detection", icon: Cpu },

];

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(tools.map(tool => tool.tag)))];

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter(tool => tool.tag === activeCategory);

  return (
    <div className="min-h-screen bg-[#070b14] text-white p-10">

      <h2 className="font-bold text-2xl md:text-4xl text-center text-green-600 mt-18">
        {"My Projects".split("").map((char, index) => (
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

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap pb-1 mt-7">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${activeCategory === cat
                ? "bg-green-500 text-black shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-green-600/30"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {filteredTools.map((tool, index) => {
          const Icon = tool.icon;

          return (
            <Link
              key={index}
              to={tool.route}
              className="flex flex-col border border-green-400/30 rounded-xl p-5 bg-[#0b1120] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition duration-300 h-full hover:scale-105"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-3 mb-2">
                <Icon size={22} className="text-green-400" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-4 flex-1">
                {tool.desc}
              </p>

              <span className="text-xs bg-gray-800 px-2 py-1 rounded self-start">
                {tool.tag}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}