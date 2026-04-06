import React from "react";
import { motion } from "framer-motion";

const NetworkScanner = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className=" mx-auto p-6 bg-[#0b1120] border border-green-400/30 shadow-lg"
    >
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl mt-22 font-bold mb-4 text-green-400 animate-bounce"
      >
        Network Scanner
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-2 font-semibold text-gray-200"
      >
        Building a Network Scanner with Python: A Practical Approach to Port Scanning
      </motion.p>

      <p className="mb-4 text-gray-400">
        Understanding your network is one of the most important steps in securing it.
        As part of my learning journey in cybersecurity and Python development, I
        built a simple network scanner that focuses on one essential capability:
        port scanning.
      </p>

      <p className="mb-4 text-gray-400">
        This project helped me move beyond theory and actually see how systems
        communicate, where vulnerabilities can exist, and how security tools work
        under the hood.
      </p>

      <motion.div
        initial={{ y: 10 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
          What This Tool Does
        </h3>

        <p className="mb-2 text-gray-400">
          The network scanner I built is designed to:
        </p>

        <ul className="list-disc list-inside mb-4 text-gray-400">
          <li>Scan a target system or IP address</li>
          <li>Identify open ports</li>
          <li>Indicate which services might be running</li>
        </ul>
      </motion.div>

      <p className="mb-4 text-gray-400">
        At its core, it answers a simple but important question: Which doors are
        open on a system?
      </p>

      <p className="mb-4 text-gray-400">
        Open ports are necessary for communication, but they can also expose
        services that attackers may try to exploit. Knowing what’s open is the
        first step toward securing it.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Why Port Scanning Matters
      </h3>

      <p className="mb-4 text-gray-400">
        Port scanning is one of the most widely used techniques in both
        cybersecurity defense and offensive testing. Before any attack, a system
        is usually scanned to gather information.
      </p>

      <p className="mb-4 text-gray-400">
        By building this tool, I learned how:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-400">
        <li>Systems respond to connection requests</li>
        <li>Open and closed ports behave differently</li>
        <li>Even a simple scan can reveal useful insights</li>
      </ul>

      <p className="mb-4 text-gray-400">
        For defenders, this same process helps identify unnecessary open ports and
        reduce risk.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        How the Tool Works
      </h3>

      <p className="mb-2 text-gray-400">
        This scanner is built using Python’s built-in networking capabilities,
        mainly the socket module.
      </p>

      <p className="mb-2 text-gray-400">Here’s the basic logic:</p>

      <ol className="list-decimal list-inside mb-4 text-gray-400">
        <li>Take a target IP address as input</li>
        <li>Loop through a range of ports (for example, 1 to 1024)</li>
        <li>Attempt to establish a connection to each port</li>
        <li>Record which ports respond successfully</li>
        <li>Display the results to the user</li>
      </ol>

      <p className="mb-4 text-gray-400">
        If a connection is successful, the port is considered open. If it fails,
        the port is closed or filtered.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Key Features
      </h3>

      <p className="mb-2 text-gray-400">
        While the tool is simple, it includes some useful functionality:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-400">
        <li>Custom port range scanning</li>
        <li>Fast scanning using loops and timeouts</li>
        <li>Clear output showing open ports</li>
        <li>Lightweight and easy to run</li>
      </ul>

      <p className="mb-4 text-gray-400">
        This makes it a good starting point for anyone learning network security
        or Python based tools.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Challenges I Faced
      </h3>

      <p className="mb-2 text-gray-400">
        Building this project wasn’t just about writing code. There were a few
        practical challenges:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-400">
        <li>
          Speed vs accuracy: Scanning too fast can miss responses, while scanning
          too slowly takes too long
        </li>
        <li>Timeout handling: Choosing the right timeout value was important</li>
        <li>Permission issues: Some systems block or limit scan attempts</li>
      </ul>

      <p className="mb-4 text-gray-400">
        Working through these helped me understand real-world constraints in
        networking.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        What I Learned
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-400">
        <li>Basic networking concepts</li>
        <li>TCP connections and how ports work</li>
        <li>Writing practical Python scripts</li>
        <li>Thinking like both a defender and an attacker</li>
      </ul>

      <p className="mb-4 text-gray-400">
        It also showed me how powerful simple tools can be when applied correctly.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Future Improvements
      </h3>

      <p className="mb-2 text-gray-400">
        There are many ways this tool can be expanded:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-400">
        <li>Add multi-threading for faster scans</li>
        <li>Detect services running on open ports</li>
        <li>Include basic vulnerability checks</li>
        <li>Build a simple user interface</li>
        <li>Export scan results to a file</li>
      </ul>

      <p className="mb-4 text-gray-400">
        These improvements would make the tool more practical and closer to
        professional-grade scanners.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2 text-green-300">
        Final Thoughts
      </h3>

      <p className="mb-4 text-gray-400">
        Building a network scanner from scratch is one of the best beginner
        projects in cybersecurity. It’s simple enough to understand, but powerful
        enough to teach real concepts.
      </p>

      <p className="mb-4 text-gray-400">
        This project is just a starting point, but it highlights an important
        idea: security begins with visibility. If you don’t know what’s open on
        your network, you can’t protect it.
      </p>

      <p className="text-gray-400">
        If you're learning Python or cybersecurity, I highly recommend trying to
        build something similar. You’ll learn far more by doing than by just
        reading.
      </p>
    </motion.div>
  );
};

export default NetworkScanner;