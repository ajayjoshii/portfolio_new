import React from "react";
import { motion } from "framer-motion";

const SmartStick = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow-lg border border-green-400/30 space-y-6"
    >
      <h1 className="text-3xl mt-22 font-bold text-green-400">
        Building a Smart Stick for the Visually Impaired Using Python, C/C++, and Arduino
      </h1>

      <p className="text-gray-300">
        Accessibility technology can have a profound impact on quality of life. In this project, I developed a Smart Stick for visually impaired users that combines sensors, machine learning, and embedded systems to assist in navigation and obstacle detection.
      </p>

      <h2 className="text-xl font-semibold text-green-300">
        Project Objective
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Detect obstacles in real time and alert the user</li>
        <li>Provide safe navigation using audio or haptic feedback</li>
        <li>Integrate sensors, embedded programming, and AI models</li>
        <li>Build a wearable, practical, and low-cost assistive device</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        How the Smart Stick Works
      </h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-1">
        <li>Sensors (Arduino/C++): Ultrasonic sensors, IR sensors, and gyroscopes detect obstacles, drop-offs, or changes in terrain</li>
        <li>Processing Unit (Python): Data from sensors is analyzed in real time; ML/DL models classify obstacles or predict safe paths</li>
        <li>User Feedback: Haptic vibrations or audio alerts guide the user around obstacles</li>
        <li>Control Logic: Microcontroller (Arduino) handles sensor input and output signals for alerts</li>
      </ol>

      <h2 className="text-xl font-semibold text-green-300">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Real-time obstacle detection</li>
        <li>Machine learning-enhanced prediction of safe paths</li>
        <li>Audio and vibration feedback for user alerts</li>
        <li>Modular design for upgrading sensors or algorithms</li>
        <li>Portable and lightweight for everyday use</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Skills Developed
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Python for ML/DL and data processing</li>
        <li>Embedded programming in C/C++ for sensor control</li>
        <li>Integration of hardware and software systems</li>
        <li>Real-time signal processing and feedback mechanisms</li>
        <li>Designing user-centered assistive devices</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Challenges Faced
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Calibrating sensors for accurate detection</li>
        <li>Ensuring ML models work efficiently on embedded devices</li>
        <li>Managing real-time processing with limited hardware resources</li>
        <li>Designing feedback that is intuitive and non-intrusive for users</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Future Improvements
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Integration of computer vision for better object recognition</li>
        <li>GPS-based navigation assistance</li>
        <li>Mobile app connectivity for route tracking</li>
        <li>Advanced obstacle classification with DL models</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Final Thoughts
      </h2>
      <p className="text-gray-300">
        The Smart Stick project demonstrates how combining software, hardware, and AI can produce meaningful social impact. It highlights the importance of ethical, user-focused technology while developing real-world skills in programming, robotics, and machine learning.
      </p>
      <p className="text-gray-300">
        This project reflects a core principle: technology should empower people, solving real problems while building strong technical expertise.
      </p>
    </motion.div>
  );
};

export default SmartStick;