import { motion } from "framer-motion";

export default function Research() {

  const stats = [
    { number: "4", label: "Research Papers" },
    { number: "1", label: "Published" },
    { number: "3", label: "Under Review" },
    { number: "6", label: "Research Areas" },
  ];

  const focusAreas = [
    {
      title: "Machine Learning in Cybersecurity",
      desc: "Advanced ML algorithms for threat detection and malware classification",
    },
    {
      title: "Healthcare Security",
      desc: "Cybersecurity solutions for smart healthcare and IoT medical devices",
    },
    {
      title: "Cognitive Threat Detection",
      desc: "AI-driven cognitive approaches to identify and mitigate cyber threats",
    },
    {
      title: "Federated Learning Security",
      desc: "Distributed learning systems for collaborative threat intelligence",
    },
    {
      title: "Penetration Testing",
      desc: "Advanced penetration testing methodologies and automation",
    },
    {
      title: "Server Monitoring",
      desc: "Real-time server monitoring and anomaly detection systems",
    },
  ];

  const publications = [
    {
      id: "01",
      status: "Under Review",
      title: "Smart Sensor Cane for Visually Impaired Using IoT",
      author: "Anish Parajuli",
      desc: "An assistive IoT-based smart cane designed to enhance mobility for visually impaired individuals using real-time obstacle detection, haptic feedback, and intelligent navigation support.",
      tags: ["IoT", "Assistive Technology", "Smart Sensors", "Embedded Systems"],
      pdf: "/pdfs/sensor.pdf",
    },
    {
      id: "02",
      status: "Published",
      title: "IoT-Based Wildlife Intrusion Detection System for Nepali Farms",
      author: "Anish Parajuli",
      desc: "A smart agricultural security system leveraging IoT sensors and real-time alerts to detect and prevent wildlife intrusion in rural farms, improving crop protection and farmer safety.",
      tags: ["IoT", "Agriculture Tech", "Wildlife Detection", "Smart Farming"],
      pdf: "/pdfs/wildlife.pdf",
    },


    {
      id: "03",
      status: "Under Review",
      title: "Truly Autonomous Self-Healing IoT Ecosystems for Large-Scale Smart Infrastructure",
      author: "Anish Parajuli",
      desc: "A next-generation IoT architecture that enables self-healing, adaptive, and autonomous infrastructure systems capable of detecting failures and recovering without human intervention.",
      tags: ["Autonomous Systems", "IoT", "Self-Healing Systems", "Smart Infrastructure"],
      pdf: "/pdfs/healing.pdf",
    },
    
    {
      id: "04",
      status: "Under Review",
      title: "Flying Umbrella UAV for Rain Protection",
      author: "Anish Parajuli",
      desc: "A Flying Umbrella UAV is an innovative drone designed to hover above users, providing hands-free rain protection while they walk. It combines autonomous flight, obstacle avoidance, and weather-resistant design for convenient personal shelter on the move.",
      tags:["Autonomous Systems", "IoT", "Robotics", "Smart Mobility", "Wearable Technology"],
      pdf: "/pdfs/Flying_Umbrella.pdf",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">

      {/* ================= PUBLICATIONS ================= */}
      {/* <h2 className="text-3xl font-bold text-center text-green-400 mb-14 mt-10">
        Research Publications
      </h2> */}


      <h2 className="font-bold text-2xl md:text-4xl text-center text-green-600 mt-10 mb-10">
        {"Research Publications".split("").map((char, index) => (
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

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900 border cursor-pointer border-green-500/20
                       rounded-xl p-6
                       hover:shadow-[0_0_10px_#00ff88]
                       hover:scale-105
                       transition-all duration-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-green-400 font-bold text-lg">
                {pub.id}
              </span>
              <span
                className={`px-3 py-1 text-xs rounded-full 
                ${pub.status === "Published"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-blue-500/20 text-blue-400"
                  }`}
              >
                {pub.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-3">
              {pub.title}
            </h3>

            {/* Author */}
            <p className="text-gray-400 text-sm mb-3">
              {pub.author}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">
              {pub.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {pub.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-green-500/10 border border-green-500/30 
                             text-green-400 px-3 py-1 rounded-full
                             hover:bg-green-500/20
                             transition-all duration-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              {/* ✅ VIEW / DOWNLOAD PDF */}
              <a
                href={pub.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-500 text-black 
                           py-2 rounded-lg font-semibold
                           hover:shadow-[0_0_20px_#00ff88]
                           transition-all duration-700"
              >
                View Details
              </a>

              {/* ✅ DIRECT DOWNLOAD BUTTON */}
              <a
                download
                className="flex-1 text-center border border-green-500 
                           text-green-400 py-2 rounded-lg
                           hover:bg-green-500/10
                           transition-all duration-700"
              >
                Cite
              </a>

            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= STATS ================= */}
      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900 border border-green-500/30 
                       rounded-xl p-6 text-center
                       hover:scale-105 hover:shadow-[0_0_10px_#00ff88]
                       transition-all duration-700"
          >
            <h2 className="text-4xl font-bold text-green-400">
              {stat.number}
            </h2>
            <p className="text-gray-400 mt-2 uppercase tracking-wider text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= FOCUS AREAS ================= */}
      <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
        Research Focus Areas
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {focusAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900 border border-green-500/20 
                       p-6 rounded-xl
                       hover:shadow-[0_0_15px_#00ff86]
                       hover:-translate-y-2
                       transition-all duration-700"
          >
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              {area.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {area.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}