import React from "react";
import { motion } from "framer-motion";

const SmartDoorbell = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow-lg border border-green-400/30 space-y-6"
    >
      <h1 className="text-3xl font-bold mt-22 text-green-400">
        Building a Smart Doorbell Using Arduino Uno, Python, and C++
      </h1>

      <p className="text-gray-300">
        Smart home devices are increasingly popular for convenience and security. In this project, I developed a Smart Doorbell system that not only notifies users when someone is at the door, but also integrates sensors, embedded programming, and software logic for intelligent alerts.
      </p>

      <h2 className="text-xl font-semibold text-green-300">
        Project Objective
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Detect visitors at the door using sensors</li>
        <li>Send real-time notifications to users via computer or mobile interfaces</li>
        <li>Integrate Arduino-based hardware with Python and C++ software for processing and control</li>
        <li>Build a low-cost, practical, and expandable smart home solution</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        How the Smart Doorbell Works
      </h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-1">
        <li>Arduino Uno (C/C++): Handles button presses, sensor input, and basic alert logic</li>
        <li>Sensors: Motion or proximity sensors detect a visitor approaching the door</li>
        <li>Python Scripts: Process data from Arduino, trigger notifications, and optionally log events</li>
        <li>User Feedback: Notifications can be sent to a computer, mobile device, or audio alert system</li>
      </ol>

      <h2 className="text-xl font-semibold text-green-300">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Real-time visitor detection using sensors</li>
        <li>Alert notifications via Python interface</li>
        <li>Modular design for adding cameras, audio, or other smart home integrations</li>
        <li>Low-latency response for timely alerts</li>
        <li>Expandable system for future automation projects</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Skills Developed
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Embedded programming with Arduino (C/C++)</li>
        <li>Python programming for data processing and notifications</li>
        <li>Interfacing hardware and software in real time</li>
        <li>Sensor calibration and handling</li>
        <li>Designing user-focused automation systems</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Challenges Faced
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Ensuring reliable sensor detection in various lighting conditions</li>
        <li>Integrating Arduino with Python seamlessly</li>
        <li>Avoiding false alerts due to environmental changes</li>
        <li>Designing the system to be low-latency and energy-efficient</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Future Improvements
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Adding a camera with image recognition for visitor identification</li>
        <li>Integrating voice control and smart assistants</li>
        <li>Logging visitor history for security and monitoring</li>
        <li>Expanding to control multiple doors or entry points</li>
      </ul>

      <h2 className="text-xl font-semibold text-green-300">
        Final Thoughts
      </h2>
      <p className="text-gray-300">
        This project highlights the power of combining embedded hardware with software logic to create practical, real-world solutions. The Smart Doorbell demonstrates how IoT systems can improve daily life while providing hands-on experience in programming, electronics, and system integration.
      </p>
      <p className="text-gray-300">
        It also reinforces a key principle: successful smart devices require careful coordination between sensors, control logic, and user-facing software.
      </p>
    </motion.div>
  );
};

export default SmartDoorbell;