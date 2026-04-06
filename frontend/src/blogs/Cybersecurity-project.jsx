import { motion } from "framer-motion";

const projects = [
  {
    title: "MAC Address Randomization Tool (Privacy Research)",
    desc: "Developed a script to safely randomize MAC addresses in a controlled lab environment to study tracking prevention and device fingerprinting mitigation techniques.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    title: "Network Discovery & Port Scanner",
    desc: "Built a custom network scanner to identify live hosts, open ports, and running services. Focused on network mapping and security auditing.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
  {
    title: "ARP Spoofing Simulation & Detection",
    desc: "Simulated ARP spoofing attacks in a virtual lab to understand Man-in-the-Middle risks, and implemented detection mechanisms using packet inspection.",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
  },
  {
    title: "Phishing & Fake Email Detection System",
    desc: "Created a system to detect phishing emails using pattern recognition and header analysis to improve user awareness and email security.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Secure Input Monitoring Awareness Tool",
    desc: "Developed a controlled keylogging simulation strictly for demonstrating risks and teaching defensive countermeasures against input monitoring threats.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Packet Sniffer & Traffic Analyzer",
    desc: "Built a packet analysis tool to capture and inspect network traffic, helping identify anomalies and understand protocol behavior.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "DNS Spoofing Lab & Defense Study",
    desc: "Conducted DNS spoofing simulations in a lab environment and researched mitigation techniques such as DNSSEC and secure configurations.",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
  },
  {
    title: "Secure File Interception Monitor",
    desc: "Designed a tool to monitor file transfers and detect suspicious interception attempts within a network.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    title: "Web Security Crawler",
    desc: "Developed a crawler to analyze websites for common security issues like broken links, exposed endpoints, and misconfigurations.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Vulnerability Scanner",
    desc: "Created a basic vulnerability scanner to detect weak services, outdated software, and misconfigurations in systems.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Network Stress Testing Simulation",
    desc: "Simulated high-traffic scenarios in a controlled lab to evaluate system resilience and study mitigation strategies like rate limiting and filtering.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Malware Classification System",
    desc: "Built a machine learning model to classify malware samples based on behavioral and static features.",
    img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
  },
];

export default function CybersecurityProjects() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto mt-10">
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