import React from "react";
import { motion } from "framer-motion";

const floatAnimation = {
  initial: { y: 0, opacity: 0 },
  animate: { y: [0, -12, 0, 12, 0], opacity: 1 },
  transition: { duration: 2, repeat: 0, ease: "easeInOut" },
};

const FaceTrackingDrone = () => {
  return (
    <motion.div
      className=" mx-auto p-6 bg-[#0b1120] border border-green-400/30 shadow-lg space-y-6 text-white hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-transform duration-300"
      {...floatAnimation}
    >
      <h1 className="text-3xl mt-22 font-bold text-green-400 animate-bounce">
        Building a Face-Tracking Drone Using Python, C/C++, and AI
      </h1>

      <p className="text-gray-300">
        Drones are transforming the way we interact with technology, combining mobility, sensors, and intelligent software. In this project, I built a Face-Tracking Drone capable of autonomously following a person by detecting and tracking their face in real time using computer vision and embedded systems.
      </p>

      <h2 className="text-xl font-semibold text-green-300">
        Project Objective
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Develop a drone that can autonomously follow a target based on facial recognition</li>
        <li>Use Python, C/C++, and embedded programming for control and processing</li>
        <li>Integrate machine learning and computer vision for face detection and tracking</li>
        <li>Build a safe, reliable, and responsive system for demonstration and educational purposes</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        How the Face-Tracking Drone Works
      </h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-1">
        <li>Embedded Systems (C/C++ & Arduino) control motors, flight stability, and basic navigation</li>
        <li>Cameras capture visual input; IMU sensors maintain balance and orientation</li>
        <li>Python + ML/DL models process camera feed to detect and track faces</li>
        <li>Control loop adjusts movement to keep the target centered in the frame</li>
      </ol>

      <h2 className="text-xl font-semibold text-green-300">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Real-time face detection and tracking</li>
        <li>Autonomous movement with obstacle awareness</li>
        <li>Integration of ML/DL models for robust facial recognition</li>
        <li>Modular design for future sensor or software upgrades</li>
        <li>Safety measures for stable flight and collision avoidance</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Skills Developed
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Embedded programming for drones (C/C++ and Arduino)</li>
        <li>Python for computer vision and ML/DL integration</li>
        <li>Real-time image processing and data-driven control</li>
        <li>Drone navigation, sensor integration, and flight stability</li>
        <li>Multi-disciplinary system design and debugging</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Challenges Faced
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Maintaining stable flight while processing heavy real-time video</li>
        <li>Accurate face detection in changing lighting and angles</li>
        <li>Integrating ML models with embedded hardware constraints</li>
        <li>Ensuring smooth and responsive movement without oscillations</li>
        <li>Testing and safety considerations during flight</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Future Improvements
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Adding obstacle avoidance using additional sensors</li>
        <li>Supporting multi-person tracking or prioritization</li>
        <li>Using edge AI for faster onboard processing</li>
        <li>Integrating mobile or cloud-based control interfaces</li>
        <li>Adding gesture recognition for interactive applications</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Final Thoughts
      </h2>
      <p className="text-gray-300">
        The Face-Tracking Drone project demonstrates the integration of robotics, AI, and embedded systems for real-world applications. It emphasizes hands-on learning, system integration, and intelligent design.
      </p>
      <p className="text-gray-300">
        Advanced robotics is built on careful coordination of hardware, software, and AI models to achieve safe, reliable, and practical outcomes.
      </p>
    </motion.div>
  );
};

export default FaceTrackingDrone;