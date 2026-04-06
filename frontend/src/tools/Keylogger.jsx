import React from "react";
import { motion } from "framer-motion";

const KeyloggerC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow border border-green-400/30"
    >
      <h2 className="text-3xl mt-22 font-bold mb-6 text-green-400 animate-bounce">
        Understanding Keyboard Input Handling in C: Building Transparent System Monitoring Tools
      </h2>

      <p className="mb-4 text-gray-300">
        Capturing and processing user input is a fundamental concept in system programming. In C, working close to the operating system provides powerful control over how input is received and handled.
      </p>

      <p className="mb-4 text-gray-300">
        In this project, I explored how keyboard input works at a low level and built a simple, transparent input monitoring tool designed for learning and debugging purposes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Project Objective
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Understand how keyboard input is handled in C</li>
        <li>Capture input events in a controlled and visible way</li>
        <li>Display or log input data with user awareness and consent</li>
      </ul>

      <p className="mb-4 text-gray-300">
        This approach ensures the tool is used responsibly and ethically.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        How Keyboard Input Works
      </h3>

      <p className="mb-3 text-gray-300">
        At a basic level, keyboard input in C can be handled through:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Standard input functions like getchar() and scanf()</li>
        <li>System-level input handling depending on the operating system</li>
        <li>Event-driven input in more advanced applications</li>
      </ul>

      <p className="mb-4 text-gray-300">
        Understanding these layers is essential for building reliable software.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        How the Tool Works
      </h3>

      <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-1">
        <li>Prompt the user to begin input monitoring</li>
        <li>Capture keystrokes through standard input</li>
        <li>Display or log the input in real time</li>
        <li>Allow the user to stop the process at any time</li>
      </ol>

      <p className="mb-4 text-gray-300">
        All actions are visible to the user, ensuring full awareness.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Key Features
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Real-time input display</li>
        <li>Simple logging for debugging purposes</li>
        <li>Lightweight and easy to compile</li>
        <li>Clear start and stop controls</li>
      </ul>

      <p className="mb-4 text-gray-300">
        This makes the tool useful for learning and basic development tasks.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Skills Developed
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>C programming fundamentals</li>
        <li>Input/output handling</li>
        <li>System-level thinking</li>
        <li>Writing efficient and minimal code</li>
      </ul>

      <p className="mb-4 text-gray-300">
        These skills are essential for low-level programming and embedded systems.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Challenges Faced
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Handling input without blocking execution</li>
        <li>Managing buffer behavior correctly</li>
        <li>Keeping the program responsive</li>
        <li>Ensuring portability across systems</li>
      </ul>

      <p className="mb-4 text-gray-300">
        Working through these improved both coding and debugging skills.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Future Improvements
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Writing input logs to a file</li>
        <li>Adding timestamps for each input</li>
        <li>Supporting special key detection</li>
        <li>Building a simple interface for better usability</li>
      </ul>

      <p className="mb-4 text-gray-300">
        These additions would make the tool more practical and structured.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Final Thoughts
      </h3>

      <p className="text-gray-300">
        Understanding how input works at a low level is a valuable skill for any programmer. While some tools can misuse this capability, focusing on transparent and ethical implementations builds both knowledge and credibility.
      </p>

      <p className="text-gray-300 mt-3">
        This project demonstrates that strong technical skills come from understanding systems deeply and using that knowledge responsibly.
      </p>
    </motion.div>
  );
};

export default KeyloggerC;