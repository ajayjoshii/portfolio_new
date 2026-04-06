import React from "react";
import { motion } from "framer-motion";

const HTTPSRustTool = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow-lg border border-green-400/30"
    >
      <motion.h2
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="text-3xl font-bold mt-22 mb-4 text-green-400"
      >
        Working with HTTPS in Rust: Building Secure and Reliable Network Applications
      </motion.h2>

      <p className="mb-4 text-gray-300">
        As the internet continues to evolve, HTTPS has become the standard for secure communication. It protects data in transit using encryption and ensures that users are communicating with the intended server.
      </p>

      <p className="mb-6 text-gray-300">
        Instead of trying to bypass HTTPS, this project focuses on understanding and implementing it correctly using Rust, a language known for performance and safety.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        What Is HTTPS?
      </h3>

      <p className="mb-4 text-gray-300">
        HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP. It uses TLS (Transport Layer Security) to:
      </p>

      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Encrypt data between client and server</li>
        <li>Prevent eavesdropping</li>
        <li>Ensure data integrity</li>
        <li>Verify server identity through certificates</li>
      </ul>

      <p className="mb-6 text-gray-300">
        This is why HTTPS is critical for everything from login systems to online payments.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Project Overview
      </h3>

      <p className="mb-4 text-gray-300">
        In this project, I explored how to build a simple HTTPS client in Rust and analyze secure connections.
      </p>

      <p className="mb-4 text-gray-300">
        The goal was to:
      </p>

      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Send HTTPS requests to a server</li>
        <li>Validate TLS certificates</li>
        <li>Inspect response data securely</li>
        <li>Understand how secure communication is established</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Why Rust?
      </h3>

      <p className="mb-4 text-gray-300">
        Rust is particularly well-suited for networking and security-related applications because it offers:
      </p>

      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Memory safety without a garbage collector</li>
        <li>High performance</li>
        <li>Strong type system</li>
        <li>Reliability in concurrent environments</li>
      </ul>

      <p className="mb-6 text-gray-300">
        These features make it ideal for building secure systems.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        How the Project Works
      </h3>

      <p className="mb-4 text-gray-300">
        The tool uses Rust libraries to handle HTTPS communication.
      </p>

      <p className="mb-4 text-gray-300">
        Basic workflow:
      </p>

      <ol className="list-decimal list-inside mb-6 text-gray-300 space-y-2">
        <li>Create an HTTPS client</li>
        <li>Send a request to a secure server</li>
        <li>Perform TLS handshake and certificate validation</li>
        <li>Receive and process the response</li>
      </ol>

      <p className="mb-6 text-gray-300">
        Libraries like reqwest and rustls simplify secure communication while maintaining control over the process.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Key Concepts Learned
      </h3>

      <p className="mb-4 text-gray-300">
        This project helped build a deeper understanding of:
      </p>

      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>TLS handshakes and encryption</li>
        <li>Certificate validation and trust chains</li>
        <li>Secure client-server communication</li>
        <li>Rust networking libraries</li>
      </ul>

      <p className="mb-6 text-gray-300">
        These are foundational concepts for backend development and cybersecurity.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Challenges Faced
      </h3>

      <p className="mb-4 text-gray-300">
        Some challenges during development included:
      </p>

      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Understanding TLS internals</li>
        <li>Handling certificate validation errors</li>
        <li>Managing dependencies in Rust</li>
        <li>Debugging secure connections</li>
      </ul>

      <p className="mb-6 text-gray-300">
        Each challenge added practical insight into how secure systems operate.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Future Improvements
      </h3>

      <p className="mb-4 text-gray-300">
        This project can be extended further by:
      </p>

      <ul className="list-disc list-inside mb-6 text-gray-300 space-y-2">
        <li>Adding certificate inspection features</li>
        <li>Logging handshake details for analysis</li>
        <li>Building a simple HTTPS server in Rust</li>
        <li>Testing configurations for security best practices</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Final Thoughts
      </h3>

      <p className="mb-4 text-gray-300">
        HTTPS is not something to bypass. It is something to understand, implement, and strengthen.
      </p>

      <p className="text-gray-300">
        This project reflects a key mindset shift: real expertise in cybersecurity comes from building and securing systems, not breaking them without purpose.
      </p>

      <p className="text-gray-300 mt-4">
        By focusing on secure development with tools like Rust, you build skills that are not only ethical but also highly востребован in the industry.
      </p>
    </motion.div>
  );
};

export default HTTPSRustTool;