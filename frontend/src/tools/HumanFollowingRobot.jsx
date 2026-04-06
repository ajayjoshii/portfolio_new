import React from "react";
import { motion } from "framer-motion";

const HumanFollowingRobot = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow-lg border border-green-400/30 space-y-6"
    >
      <h1 className="text-3xl font-bold text-green-400 mt-22">
        Building a Human-Following Robot: Combining Sensors and Robotics
      </h1>

      <p className="text-gray-300">
        Robotics projects that interact with humans in real time are an exciting way to explore automation, sensors, and control systems. In this project, I built a Human-Following Robot that can track and follow a person using sensors and embedded programming.
      </p>

      <h2 className="text-xl font-semibold text-green-300">
        Project Objective
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Design a robot capable of following a human reliably</li>
        <li>Use sensor input to detect direction, distance, and movement</li>
        <li>Implement control logic for real-time navigation</li>
        <li>Explore robotics concepts including motion control, feedback loops, and sensor integration</li>
      </ul>
      <p className="text-gray-300">
        This project is fully educational and safe, emphasizing learning and experimentation.
      </p>

      <h2 className="text-xl font-semibold text-green-300">
        How the Robot Works
      </h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-1">
        <li>Sensors: Ultrasonic sensors, infrared sensors, or cameras detect a person’s position relative to the robot</li>
        <li>Processing Unit: A microcontroller or embedded board processes the sensor data</li>
        <li>Control Logic: Algorithms calculate movement direction and speed to follow the target</li>
        <li>Actuation: Motors respond to commands to move the robot forward, stop, or turn</li>
      </ol>
      <p className="text-gray-300">
        The system continuously updates its position to maintain a safe and consistent distance from the target.
      </p>

      <h2 className="text-xl font-semibold text-green-300">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Real-time human detection and following</li>
        <li>Adjustable speed based on target movement</li>
        <li>Safe stopping distance to avoid collisions</li>
        <li>Modular design for adding new sensors or behaviors</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Skills Developed
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Embedded programming for microcontrollers</li>
        <li>Sensor integration and calibration</li>
        <li>Motion control and feedback loops</li>
        <li>Robotics system design and debugging</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Challenges Faced
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Filtering noisy sensor data to prevent erratic movement</li>
        <li>Tuning speed and turning parameters for smooth following</li>
        <li>Ensuring stability on different surfaces</li>
        <li>Integrating multiple sensors efficiently</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Future Improvements
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Adding computer vision for more precise human tracking</li>
        <li>Incorporating obstacle detection and path planning</li>
        <li>Using machine learning to predict human movement patterns</li>
        <li>Implementing remote control or monitoring via mobile app</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Final Thoughts
      </h2>
      <p className="text-gray-300">
        Building a human-following robot demonstrates the power of combining sensors, programming, and mechanical design. This project emphasizes practical learning in robotics, systems thinking, and embedded development.
      </p>
      <p className="text-gray-300">
        It also reflects an important principle: real-world robotics requires careful integration of software, hardware, and control logic to create reliable, safe, and functional systems.
      </p>
    </motion.div>
  );
};

export default HumanFollowingRobot;