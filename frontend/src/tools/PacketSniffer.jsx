import React from "react";
import { motion } from "framer-motion";

const PacketSnifferRust = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow-lg border border-green-400/30"
    >
      <h2 className="text-3xl mt-22 animate-bounce font-bold mb-6 text-green-400">
        Building a Packet Sniffing Tool in Rust: Understanding Network Traffic
      </h2>

      <p className="mb-4 text-gray-300">
        In modern networking, understanding how data moves across a network is essential for both troubleshooting and security. Packet sniffing is one of the most effective ways to observe this behavior in real time.
      </p>

      <p className="mb-4 text-gray-300">
        In this project, I built a packet sniffing tool using Rust to capture and analyze network traffic in a controlled and authorized environment.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        What Is Packet Sniffing?
      </h3>

      <p className="mb-3 text-gray-300">
        Packet sniffing is the process of capturing and inspecting data packets as they travel across a network. Each packet contains information such as:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Source and destination addresses</li>
        <li>Protocol type (TCP, UDP, ICMP)</li>
        <li>Payload data</li>
      </ul>

      <p className="mb-4 text-gray-300">
        By analyzing these packets, developers and security professionals can better understand network activity.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Why Rust?
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>High performance comparable to C/C++</li>
        <li>Memory safety without a garbage collector</li>
        <li>Strong concurrency support</li>
        <li>Reliability for low-level system programming</li>
      </ul>

      <p className="mb-4 text-gray-300">
        These features make Rust ideal for handling network-level operations.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Project Objective
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Capture live network packets</li>
        <li>Identify protocols in use</li>
        <li>Display key packet details</li>
        <li>Help analyze network behavior safely</li>
      </ul>

      <p className="mb-4 text-gray-300">
        This project focuses on learning and analysis, not interception or misuse.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        How the Tool Works
      </h3>

      <p className="mb-3 text-gray-300">
        The packet sniffer uses Rust libraries that interact with network interfaces in promiscuous mode (where permitted and authorized). Basic workflow:
      </p>

      <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-1">
        <li>Select a network interface</li>
        <li>Capture incoming and outgoing packets</li>
        <li>Parse packet headers (IP, TCP/UDP)</li>
        <li>Display relevant information in real time</li>
      </ol>

      <p className="mb-4 text-gray-300">
        Libraries such as pnet or pcap bindings are commonly used to handle packet capture and parsing.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Key Features
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Real-time packet capture</li>
        <li>Protocol identification (TCP, UDP, ICMP)</li>
        <li>Source and destination tracking</li>
        <li>Lightweight command-line interface</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Skills Developed
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Rust programming fundamentals</li>
        <li>Low-level networking concepts</li>
        <li>Packet structure and protocols</li>
        <li>System-level debugging skills</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Challenges Faced
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Handling raw packet data correctly</li>
        <li>Managing permissions for packet capture</li>
        <li>Parsing different protocol formats</li>
        <li>Ensuring performance and stability</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Future Improvements
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Packet filtering (by protocol or port)</li>
        <li>Logging captured data to files</li>
        <li>Basic traffic statistics</li>
        <li>Visualization of network activity</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Ethical Considerations
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Only capture traffic on networks you own or have permission to monitor</li>
        <li>Avoid inspecting sensitive or private data without consent</li>
        <li>Use the tool strictly for learning, debugging, or security analysis</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Final Thoughts
      </h3>

      <p className="text-gray-300">
        Building a packet sniffer is one of the best ways to understand how networks truly operate. It provides visibility into the flow of data and highlights the importance of secure communication.
      </p>

      <p className="text-gray-300 mt-3">
        This project demonstrates a key principle: the goal of learning network tools is not to exploit systems, but to understand and improve them.
      </p>
    </motion.div>
  );
};

export default PacketSnifferRust;