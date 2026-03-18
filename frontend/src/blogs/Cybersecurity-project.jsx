import { motion } from "framer-motion";

const projects = [
  {
    title: "Network Stress Testing Simulation (DDoS Research Project)",
    desc: "Simulated distributed traffic flooding techniques in a virtual lab environment. Studied server resilience, traffic filtering, and mitigation techniques.",
    img: "/images/cyber1.jfif",
  },
  {
    title: "MAC & IP Rotation Script",
    desc: "Built an automation script to change MAC and IP addresses periodically for privacy research and network testing.",
    img: "/images/ip.png",
  },
  {
    title: "Network Scanner",
    desc: "Developed a custom tool to discover live hosts, open ports, and running services within a network.",
    img: "/images/networkscan.jpg",
  },
  {
    title: "Keylogger (Security Awareness Project)",
    desc: "Developed a keylogging tool to understand input monitoring risks and defensive countermeasures.",
    img: "/images/keylog.jfif",
  },
  {
    title: "Vulnerability Scanner",
    desc: "Created a basic vulnerability scanning tool to detect misconfigurations and weak services.",
    img: "/images/vulscan.jfif",
  },
  {
    title: "Malware Classification System",
    desc: "Built a machine learning-based model to classify malware samples based on extracted features.",
    img: "/images/malclass.jpg",
  },
];

export default function CybersecurityProjects() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
        >
          Cybersecurity Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/20 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-red-400">
                <img
                  src={project.img}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                  alt={project.title}
                />
                {project.title}
              </h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}