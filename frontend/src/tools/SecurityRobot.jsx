import React from "react";
import { motion } from "framer-motion";

const floatAnimation = {
  initial: { y: 0, opacity: 0 },
  animate: { y: [0, -10, 0, 10, 0], opacity: 1 },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
};

const SecurityRobot = () => {
  return (
    <motion.div
      className=" mx-auto p-6 bg-[#0b1120] border border-green-400/30 shadow-lg space-y-6 text-white hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-transform duration-300"
      {...floatAnimation}
    >
      <h1 className="text-3xl mt-22 font-bold text-green-400">
        Building a Security Robot Using Python, Arduino, C/C++, and AI
      </h1>

      <p className="text-gray-300">
        Robotics combined with AI is transforming security systems. In this project, I developed a Security Robot that autonomously monitors an area, detects intrusions, and provides real-time alerts using embedded systems, machine learning, and deep learning.
      </p>

      <h2 className="text-xl font-semibold text-green-300">
        Project Objective
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Design a mobile robot capable of patrolling a designated area</li>
        <li>Detect intruders or unusual activity using sensors and cameras</li>
        <li>Implement real-time processing using Python, C/C++, and Arduino programming</li>
        <li>Apply ML and DL for intelligent threat detection</li>
        <li>Build a safe, reliable, and ethical security solution</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        How the Security Robot Works
      </h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-1">
        <li>Arduino/C++ modules control motors, sensors, and actuation for movement and obstacle avoidance</li>
        <li>Sensors (ultrasonic, IR, cameras) monitor surroundings</li>
        <li>Python + ML/DL models process data to detect intruders, recognize faces, and identify unusual activity</li>
        <li>Alert system sends notifications, triggers alarms, or logs events</li>
      </ol>

      <h2 className="text-xl font-semibold text-green-300">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Autonomous navigation with obstacle avoidance</li>
        <li>Real-time detection of intrusions or unusual activity</li>
        <li>Integration of ML and DL for intelligent recognition</li>
        <li>Audio or mobile notifications for alerts</li>
        <li>Modular hardware-software design for future expansions</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Skills Developed
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Python programming for AI and real-time data processing</li>
        <li>ML and DL model integration</li>
        <li>Embedded programming with Arduino, C, and C++</li>
        <li>Sensor calibration, motor control, and robotics</li>
        <li>Building multi-disciplinary, integrated systems</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Challenges Faced
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Processing sensor and video data in real time on limited hardware</li>
        <li>Ensuring reliable autonomous navigation across different terrains</li>
        <li>Integrating ML/DL models with embedded systems</li>
        <li>Balancing robot speed, stability, and responsiveness</li>
        <li>Managing power consumption for longer operation</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Future Improvements
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Advanced computer vision for threat classification</li>
        <li>Cloud connectivity for remote monitoring</li>
        <li>Multi-robot coordination for larger areas</li>
        <li>Facial recognition and alert prioritization</li>
        <li>Reinforcement learning for smarter navigation</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Final Thoughts
      </h2>
      <p className="text-gray-300">
        The Security Robot project illustrates how robotics, AI, and embedded systems can be combined for real-world applications. It emphasizes hands-on learning, multi-disciplinary integration, and practical problem-solving.
      </p>
      <p className="text-gray-300">
        Effective security solutions are built by combining reliable hardware, intelligent software, and ethical design practices.
      </p>
    </motion.div>
  );
};

export default SecurityRobot;