import React from "react";
import { motion } from "framer-motion";

const WildlifeIntrusionSystem = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow-lg border border-green-400/30"
    >
      <h2 className="text-3xl mt-22 font-bold mb-6 text-green-400">
        Building a Wildlife Intrusion Detection System Using C and C++
      </h2>

      <p className="mb-4 text-gray-300">
        Wildlife intrusion in agricultural lands, forests, and conservation areas poses significant challenges to both humans and animals. Early detection is critical for minimizing damage, ensuring safety, and protecting wildlife. In this project, I developed a Wildlife Intrusion Detection System (WIDS) using C and C++ to monitor and detect animal movement in real time.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Project Objective
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Detect wildlife intrusion in predefined areas</li>
        <li>Trigger alerts when movement is detected</li>
        <li>Record relevant data for analysis and monitoring</li>
        <li>Provide a reliable, low-latency system suitable for real-time deployment</li>
      </ul>
      <p className="mb-4 text-gray-300">
        This system is designed for ethical monitoring and conservation purposes.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        How the System Works
      </h3>
      <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-1">
        <li>Input Capture: Using motion sensors, cameras, or simulation data</li>
        <li>Processing: C and C++ handle real-time input processing, filtering noise, and detecting relevant events</li>
        <li>Alert Mechanism: The system triggers alerts (sound, light, or notifications) when intrusion is detected</li>
        <li>Logging: Data such as time, location, and type of intrusion is logged for further analysis</li>
      </ol>
      <p className="mb-4 text-gray-300">
        C is used for low-level sensor interfacing and performance-critical operations, while C++ provides modular structure and object-oriented features for managing events, alerts, and logging.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Key Features
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Real-time detection of wildlife movement</li>
        <li>Sensor interfacing with low-latency response</li>
        <li>Modular design for easy expansion</li>
        <li>Data logging for analysis and reporting</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Skills Developed
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>C and C++ programming for real-time applications</li>
        <li>Sensor interfacing and hardware communication</li>
        <li>Event-driven programming</li>
        <li>Data logging and system monitoring</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Challenges Faced
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Handling noisy sensor data and avoiding false alarms</li>
        <li>Maintaining real-time performance while processing multiple inputs</li>
        <li>Integrating C and C++ modules efficiently</li>
        <li>Designing a system that is scalable and maintainable</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Future Improvements
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Adding machine learning for species recognition</li>
        <li>Integrating camera vision for more accurate detection</li>
        <li>Supporting remote monitoring via IoT or cloud platforms</li>
        <li>Providing a user interface for visualization of alerts and data</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Final Thoughts
      </h3>
      <p className="text-gray-300 mb-2">
        Wildlife intrusion detection is a perfect example of combining technology with real-world impact. By building this system in C and C++, I gained practical experience in real-time systems, sensor integration, and modular software design.
      </p>
      <p className="text-gray-300">
        This project emphasizes that ethical and responsible technology can solve real-world problems while providing a strong foundation in programming and system design.
      </p>
    </motion.div>
  );
};

export default WildlifeIntrusionSystem;