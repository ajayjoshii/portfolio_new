import React from "react";
import { motion } from "framer-motion";

const DDoSTool = () => {
  const gradientHeading =
    "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto p-8 bg-[#0b1120] text-white shadow-2xl space-y-6"
    >
      <motion.h2
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 90 }}
        className={`text-4xl mt-22 animate-bounce font-bold mb-4 ${gradientHeading}`}
      >
        DDoS Testing Tool
      </motion.h2>

      <p className="mb-2 font-semibold">
        Building a DDoS Testing Tool in Python: Understanding Traffic and System Limits
      </p>

      <p className="mb-4 text-white/90 text-justify">
        As networks grow more complex, understanding how systems behave under heavy
        traffic is an important part of cybersecurity and performance testing. One
        area that often comes up is Distributed Denial of Service (DDoS). While
        real-world DDoS attacks are illegal and harmful, controlled testing in a
        safe environment can help developers and security learners understand
        system limits and resilience.
      </p>

      <p className="mb-4 text-white/90 text-justify">
        In this project, I built a basic Python-based DDoS testing tool for
        educational use. The goal was not to attack real systems, but to simulate
        high traffic in a controlled lab setup and observe how systems respond.
      </p>

      <motion.h3
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}
      >
        Important Note
      </motion.h3>

      <p className="text-white/90">This tool is strictly for:</p>

      <ul className="list-disc list-inside mb-4 text-white/90 space-y-1">
        <li>Local testing environments</li>
        <li>Systems you own or have explicit permission to test</li>
        <li>Learning purposes only</li>
      </ul>

      <p className="mb-4 text-white/90 text-justify">
        Using such tools against public servers or without permission is illegal
        and unethical.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        What This Tool Does
      </h3>

      <p className="mb-2 text-white/90 text-justify">
        The tool simulates multiple requests being sent to a target server over a
        short period of time. This helps test:
      </p>

      <ul className="list-disc list-inside mb-4 text-white/90 space-y-1">
        <li>How a server handles repeated connections</li>
        <li>When performance starts to degrade</li>
        <li>Whether rate limiting or protections are in place</li>
      </ul>

      <p className="mb-4 text-white/90 text-justify">
        It is not a true distributed system, but it mimics high traffic from a
        single machine.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        How It Works
      </h3>

      <p className="mb-2 text-white/90 text-justify">
        The tool is written in Python and uses basic networking and threading
        concepts.
      </p>

      <p className="mb-2 text-white/90">Core logic includes:</p>

      <ol className="list-decimal list-inside mb-4 text-white/90 space-y-1">
        <li>Selecting a target IP address and port</li>
        <li>Creating multiple threads</li>
        <li>Each thread repeatedly sends requests to the target</li>
        <li>Tracking how many requests are sent</li>
      </ol>

      <p className="mb-4 text-white/90 text-justify">
        Instead of using multiple devices (as in real DDoS attacks), this tool
        uses concurrency to simulate load from one system.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Key Concepts Used
      </h3>

      <p className="mb-2 text-white/90 text-justify">
        Building this tool helped reinforce several important concepts:
      </p>

      <ul className="list-disc list-inside mb-4 text-white/90 space-y-1">
        <li>Sockets for network communication</li>
        <li>Threading to simulate concurrent traffic</li>
        <li>Loops and control flow for repeated execution</li>
        <li>Basic performance observation</li>
      </ul>

      <p className="mb-4 text-white/90 text-justify">
        These are foundational skills for both cybersecurity and backend
        development.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Challenges Faced
      </h3>

      <p className="mb-2 text-white/90 text-justify">
        While the idea is simple, a few challenges came up:
      </p>

      <ul className="list-disc list-inside mb-4 text-white/90 space-y-1">
        <li>Managing thread limits to avoid crashing my own system</li>
        <li>Balancing speed and system stability</li>
        <li>Handling connection errors gracefully</li>
        <li>Avoiding false assumptions about “real” DDoS behavior</li>
      </ul>

      <p className="mb-4 text-white/90 text-justify">
        This made it clear that real-world systems are far more complex.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Limitations of the Tool
      </h3>

      <p className="mb-2 text-white/90 text-justify">
        This project is intentionally basic. It does not:
      </p>

      <ul className="list-disc list-inside mb-4 text-white/90 space-y-1">
        <li>Use multiple distributed machines</li>
        <li>Bypass security protections</li>
        <li>Reflect real attack scale</li>
      </ul>

      <p className="mb-4 text-white/90 text-justify">
        Instead, it serves as a learning model for how traffic volume affects a
        system.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        What I Learned
      </h3>

      <p className="mb-2 text-white/90 text-justify">
        Through this project, I gained a better understanding of:
      </p>

      <ul className="list-disc list-inside mb-4 text-white/90 space-y-1">
        <li>How servers handle repeated requests</li>
        <li>Why rate limiting and firewalls matter</li>
        <li>The difference between theory and real-world systems</li>
        <li>The importance of ethical responsibility in cybersecurity</li>
      </ul>

      <p className="mb-4 text-white/90 text-justify">
        It also reinforced the idea that building tools helps you understand how
        to defend against them.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Future Improvements
      </h3>

      <p className="mb-2 text-white/90 text-justify">
        There are several ways this project could be improved in a safe and
        ethical direction:
      </p>

      <ul className="list-disc list-inside mb-4 text-white/90 space-y-1">
        <li>Add request rate control for more precise testing</li>
        <li>Measure response times and performance metrics</li>
        <li>Simulate different types of traffic (not just repeated requests)</li>
        <li>Build a dashboard to visualize results</li>
      </ul>

      <p className="mb-4 text-white/90 text-justify">
        These changes would shift the tool more toward performance testing and
        monitoring.
      </p>

      <h3 className={`text-2xl font-semibold mt-4 mb-2 ${gradientHeading}`}>
        Final Thoughts
      </h3>

      <p className="mb-4 text-white/90 text-justify">
        Creating a DDoS testing tool, even a basic one, is a valuable learning
        experience when done responsibly. It helps you understand how systems
        behave under stress and why defensive measures are critical.
      </p>

      <p className="text-white/90 text-justify">
        The key takeaway is simple: the goal is not to break systems, but to
        understand them well enough to make them stronger.
      </p>
    </motion.div>
  );
};

export default DDoSTool;