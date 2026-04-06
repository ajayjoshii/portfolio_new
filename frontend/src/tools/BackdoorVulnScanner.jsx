import React from "react";

const VulnBackdoorScanner = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition animate-[float_6s_ease-in-out_infinite]">

        <h2 className="text-3xl font-bold text-green-400 mb-4 animate-bounce">
          Building a Vulnerability and Backdoor Detection Tool in Python
        </h2>

        <p className="text-gray-300 mb-4">
          As systems grow more complex, the risk of hidden vulnerabilities and unauthorized access points increases. One of the most critical challenges in cybersecurity is not just preventing attacks, but detecting what may already be present inside a system.
        </p>

        <p className="text-gray-300 mb-6">
          In this project, I built a Python-based tool focused on identifying potential vulnerabilities and detecting signs of backdoors in a controlled and ethical environment.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What Are Vulnerabilities and Backdoors?
        </h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Vulnerabilities are weaknesses in a system that attackers can exploit</li>
          <li>Backdoors are hidden methods of bypassing normal authentication or gaining unauthorized access</li>
        </ul>

        <p className="text-gray-300 mb-6">
          While vulnerabilities are often unintentional, backdoors can be deliberately placed or introduced through malware.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Project Goal
        </h3>

        <p className="text-gray-300 mb-4">
          The goal of this tool is to improve system visibility and security by:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Scanning for common vulnerabilities</li>
          <li>Identifying suspicious open ports and services</li>
          <li>Detecting unusual or unauthorized processes</li>
          <li>Highlighting potential indicators of compromise</li>
        </ul>

        <p className="text-gray-300 mb-6">
          This is not about exploitation, but about detection and prevention.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          How the Tool Works
        </h3>

        <p className="text-gray-300 mb-4">
          The scanner combines several checks into one workflow:
        </p>

        <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
          <li>
            <span className="text-gray-300">Port Scanning</span> — Identifies open ports and associated services that may expose the system
          </li>
          <li>
            <span className="text-gray-300">Service Inspection</span> — Checks running services for unusual or unexpected behavior
          </li>
          <li>
            <span className="text-gray-300">Process Monitoring</span> — Detects unknown or suspicious processes running in the background
          </li>
          <li>
            <span className="text-gray-300">Basic Vulnerability Checks</span> — Compares system configurations against known risky patterns
          </li>
        </ol>

        <p className="text-gray-300 mb-6">
          The tool gathers this information and presents it in a readable format for analysis.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Key Features
        </h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Multi-layer scanning (ports, services, processes)</li>
          <li>Lightweight and easy to run</li>
          <li>Clear output for quick interpretation</li>
          <li>Designed for local or authorized environments</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These features make it useful for learning and basic security assessments.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Skills Developed
        </h3>

        <p className="text-gray-300 mb-4">
          Working on this project helped strengthen:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Python scripting for system and network tasks</li>
          <li>Understanding of system processes and services</li>
          <li>Basic vulnerability assessment techniques</li>
          <li>Analytical thinking in security contexts</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These are essential skills for cybersecurity roles.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Challenges Faced
        </h3>

        <p className="text-gray-300 mb-4">
          Some of the main challenges included:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Differentiating normal vs suspicious activity</li>
          <li>Handling system permissions</li>
          <li>Avoiding false positives</li>
          <li>Keeping the tool efficient and simple</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These challenges reflect real-world issues in security monitoring.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Future Improvements
        </h3>

        <p className="text-gray-300 mb-4">
          This project can be expanded further by:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Integrating vulnerability databases</li>
          <li>Adding real-time monitoring</li>
          <li>Generating detailed reports</li>
          <li>Building a simple user interface</li>
          <li>Automating alert systems</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These improvements would make the tool more practical and scalable.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-2">
          Final Thoughts
        </h3>

        <p className="text-gray-400 mb-4">
          Security is not just about stopping attacks at the door. It’s about knowing what’s happening inside your system at all times.
        </p>

        <p className="text-gray-400 mb-4">
          This project highlights an important principle: the most valuable cybersecurity skills come from detecting, understanding, and fixing problems, not creating them.
        </p>

        <p className="text-gray-400">
          By focusing on vulnerability scanning and backdoor detection, this tool reflects a responsible and professional approach to cybersecurity.
        </p>

      </div>
    </div>
  );
};

export default VulnBackdoorScanner;