import React from "react";
import { motion } from "framer-motion";

const WiFiTool = () => {
  const gradientHeading =
    "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-22 mx-auto p-6 bg-[#0b1120] text-white shadow-lg border border-green-400/30"
    >
      <motion.h2
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className={`text-3xl font-bold mb-4 ${gradientHeading}`}
      >
        Wi-Fi Security Monitoring Tool
      </motion.h2>

      <p className="mb-2 font-semibold">
        Building a Wi-Fi Security Monitoring Tool in Python: A Safer Alternative to Deauth Testing
      </p>

      <p className="mb-4 text-gray-300">
        Wireless networks are everywhere, and with that comes a growing need to understand how they behave and how they can be protected. While some tools are designed to disrupt networks, a more responsible and valuable approach is to build tools that analyze and strengthen Wi-Fi security.
      </p>

      <p className="mb-4 text-gray-300">
        In this project, I focused on creating a Python-based Wi-Fi monitoring tool that helps observe nearby networks, analyze activity, and identify potential risks in a controlled and ethical way.
      </p>

      <h3 className={`text-xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Why Focus on Monitoring Instead of Disruption
      </h3>

      <p className="mb-2 text-gray-300">
        Security is not just about knowing how attacks work. It’s about being able to detect, prevent, and respond to them.
      </p>

      <p className="mb-2 text-gray-300">
        Rather than interfering with networks, this tool is designed to:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Observe available Wi-Fi networks</li>
        <li>Analyze signal strength and channel usage</li>
        <li>Identify unusual patterns or congestion</li>
        <li>Help improve network configuration</li>
      </ul>

      <p className="mb-4 text-gray-300">
        This approach aligns with real-world cybersecurity practices, where detection and defense are far more valuable than disruption.
      </p>

      <h3 className={`text-xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        What This Tool Does
      </h3>

      <p className="mb-2 text-gray-300">
        The Wi-Fi monitoring tool provides:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>A list of nearby Wi-Fi networks (SSIDs)</li>
        <li>Signal strength indicators</li>
        <li>Channel information</li>
        <li>Basic insights into network density</li>
      </ul>

      <p className="mb-4 text-gray-300">
        This data helps understand how crowded a network environment is and whether optimization is needed.
      </p>

      <h3 className={`text-xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        How It Works
      </h3>

      <p className="mb-2 text-gray-300">
        The tool uses Python along with system-level network interfaces to gather Wi-Fi data.
      </p>

      <p className="mb-2 text-gray-300">
        Basic workflow:
      </p>

      <ol className="list-decimal list-inside mb-4 text-gray-300">
        <li>Access the wireless network interface</li>
        <li>Scan for available Wi-Fi networks</li>
        <li>Collect details like SSID, signal strength, and channel</li>
        <li>Display results in a structured format</li>
      </ol>

      <p className="mb-4 text-gray-300">
        Depending on the system, libraries and permissions may vary, but the core idea remains the same.
      </p>

      <h3 className={`text-xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Key Concepts Learned
      </h3>

      <p className="mb-2 text-gray-300">
        Working on this project helped me understand:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>How wireless networks broadcast information</li>
        <li>The role of channels in Wi-Fi performance</li>
        <li>Signal strength and its impact on connectivity</li>
        <li>How monitoring tools assist in network optimization</li>
      </ul>

      <p className="mb-4 text-gray-300">
        These are practical, real-world skills used in IT and cybersecurity roles.
      </p>

      <h3 className={`text-xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Challenges Faced
      </h3>

      <p className="mb-2 text-gray-300">
        Some of the main challenges included:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Accessing Wi-Fi data across different operating systems</li>
        <li>Handling permission restrictions</li>
        <li>Parsing and presenting raw network data clearly</li>
        <li>Ensuring the tool remains lightweight and fast</li>
      </ul>

      <p className="mb-4 text-gray-300">
        Each challenge provided insight into how real tools are built and refined.
      </p>

      <h3 className={`text-xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Future Improvements
      </h3>

      <p className="mb-2 text-gray-300">
        This tool can be extended in several ways:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Add real-time monitoring with live updates</li>
        <li>Visualize signal strength trends over time</li>
        <li>Detect potential interference or overcrowded channels</li>
        <li>Export scan results for analysis</li>
      </ul>

      <p className="mb-4 text-gray-300">
        These improvements would make the tool more practical for both personal and professional use.
      </p>

      <h3 className={`text-xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Final Thoughts
      </h3>

      <p className="text-gray-300">
        Building Wi-Fi security tools doesn’t require disrupting networks to be meaningful. Monitoring and analysis are at the heart of modern cybersecurity. This project demonstrates a key principle: the most valuable skills in cybersecurity are not about breaking systems, but understanding and improving them.
      </p>

      <p className="text-gray-300 mt-4">
        For anyone starting out, focusing on ethical, defensive tools is not only safer, but also far more respected in the industry.
      </p>
    </motion.div>
  );
};

export default WiFiTool;