import React from "react";
import { motion } from "framer-motion";

const FileInterceptor = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto p-6 bg-[#0b1120] text-white shadow-lg border transition animate-[float_6s_ease-in-out_infinite] border-green-400/30"
    >
      <h2 className="text-3xl mt-22 font-bold mb-6 text-green-400">
        Building a File Monitoring Tool Using Rust and C
      </h2>

      <p className="mb-4 text-gray-300">
        Monitoring files and directories is a critical skill in system administration, cybersecurity, and software development. Instead of intercepting files without consent, this project focuses on building a tool that tracks file changes in a controlled and ethical way using Rust and C.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Project Objective
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Monitor specific files or directories for changes</li>
        <li>Log file creation, modification, and deletion events</li>
        <li>Provide a clear, real-time view of file activity</li>
      </ul>

      <p className="mb-4 text-gray-300">
        This is useful for system auditing, debugging, and learning about low-level file system interactions.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Why Rust and C?
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Rust provides safety and performance, making it ideal for system-level tasks</li>
        <li>C gives low-level access to operating system APIs for file monitoring</li>
        <li>Combining both allows leveraging C libraries for event detection while using Rust for higher-level logic and reporting</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        How the Tool Works
      </h3>

      <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-1">
        <li>Watching specified files or directories</li>
        <li>Detecting file events such as create, modify, or delete</li>
        <li>Logging details like file name, timestamp, and event type</li>
        <li>Displaying real-time notifications or storing logs for later analysis</li>
      </ol>

      <p className="mb-4 text-gray-300">
        On Linux, APIs like inotify in C or Rust bindings can be used to capture file system events efficiently.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Key Features
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Real-time file and directory monitoring</li>
        <li>Event logging with timestamps</li>
        <li>Cross-language integration (Rust + C) for performance and safety</li>
        <li>Lightweight and easy to configure</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Skills Developed
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Low-level file system APIs</li>
        <li>Cross-language integration between Rust and C</li>
        <li>Event-driven programming</li>
        <li>Logging and monitoring best practices</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Challenges Faced
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Handling cross-platform differences in file system events</li>
        <li>Integrating Rust and C code safely</li>
        <li>Avoiding missed events under high system load</li>
        <li>Ensuring efficient and minimal resource usage</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Future Improvements
      </h3>

      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li>Monitoring multiple directories simultaneously</li>
        <li>Filtering events by file type or size</li>
        <li>Adding a GUI for visualizing file activity</li>
        <li>Generating reports for audits or debugging</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-green-300">
        Final Thoughts
      </h3>

      <p className="text-gray-300 mb-2">
        Monitoring file activity is a core system skill with applications in security, auditing, and software development. By building this tool responsibly, I gained hands-on experience with system-level programming and cross-language integration, while staying fully ethical and legal.
      </p>

      <p className="text-gray-300">
        This project demonstrates that strong technical skills come from building tools that observe and protect, not from intercepting or exploiting.
      </p>
    </motion.div>
  );
};

export default FileInterceptor;