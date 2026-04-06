import React from "react";

const IPMacChanger = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className=" mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition animate-[float_6s_ease-in-out_infinite]">

        <h2 className="text-3xl font-bold text-green-400 mb-4 animate-bounce">
          Managing IP and MAC Addresses with Bash: A Practical Guide for Network Configuration
        </h2>

        <p className="text-gray-300 mb-6 text-justify">
          In networking, every device is identified by two key elements: an IP address and a MAC address. While these are often handled automatically, there are situations where manual configuration is necessary for testing, troubleshooting, or network management.
        </p>

        <p className="text-gray-300 mb-6">
          In this project, I explored how to use Bash scripting to inspect and manage network interface settings in a controlled and legitimate environment.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-3">
          Understanding IP and MAC Addresses
        </h3>

        <p className="text-gray-300 mb-4">
          Before working with them, it’s important to understand their roles:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>IP Address: A logical address used for communication across networks</li>
          <li>MAC Address: A physical identifier assigned to a network interface</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Together, they allow devices to communicate both locally and across the internet.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-3">
          Purpose of the Script
        </h3>

        <p className="text-gray-300 mb-4">
          The Bash script I developed focuses on safe and practical operations such as:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Displaying current network interface details</li>
          <li>Releasing and renewing IP addresses</li>
          <li>Restarting network interfaces</li>
          <li>Logging configuration changes for troubleshooting</li>
        </ul>

        <p className="text-gray-300 mb-6">
          The goal is not to hide identity, but to better understand and manage it.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-3">
          How the Script Works
        </h3>

        <p className="text-gray-300 mb-4">
          The script uses standard Linux networking commands to interact with system interfaces.
        </p>

        <p className="text-gray-300 mb-4">
          Typical workflow:
        </p>

        <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
          <li>Identify available network interfaces</li>
          <li>Display current IP and hardware details</li>
          <li>Allow controlled refresh of network configuration</li>
          <li>Log outputs for analysis</li>
        </ol>

        <p className="text-gray-300 mb-6">
          Commands like ip, ifconfig, and dhclient play a central role.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-3">
          Key Features
        </h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Interface detection for active connections</li>
          <li>Readable output for quick diagnostics</li>
          <li>Automated refresh of network settings</li>
          <li>Simple logging for troubleshooting</li>
        </ul>

        <p className="text-gray-300 mb-6">
          This makes the script useful for both learning and practical system administration tasks.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-3">
          Skills Developed
        </h3>

        <p className="text-gray-300 mb-4">
          Building this script helped strengthen:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Bash scripting fundamentals</li>
          <li>Understanding of Linux networking tools</li>
          <li>System-level command usage</li>
          <li>Troubleshooting and debugging skills</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These are highly relevant skills for roles in system administration and cybersecurity.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-3">
          Challenges Faced
        </h3>

        <p className="text-gray-300 mb-4">
          Some common challenges included:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Differences between Linux distributions</li>
          <li>Permission requirements for network commands</li>
          <li>Handling errors when interfaces are down</li>
          <li>Keeping the script simple but useful</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These challenges reflect real-world environments where systems are rarely identical.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mb-3">
          Future Improvements
        </h3>

        <p className="text-gray-300 mb-4">
          This project can be extended further by:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Adding a simple menu-based interface</li>
          <li>Supporting multiple operating systems</li>
          <li>Integrating basic network diagnostics (ping tests, gateway checks)</li>
          <li>Exporting logs for deeper analysis</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mb-2">
          Final Thoughts
        </h3>

        <p className="text-gray-400">
          Working with IP and MAC configurations is a fundamental networking skill. Using Bash scripting to manage these settings provides hands-on experience that goes beyond theory.
        </p>

        <p className="text-gray-400 mt-4">
          This project highlights an important lesson: strong technical skills come from understanding systems, not trying to bypass them. Focusing on legitimate and practical use cases builds both knowledge and credibility.
        </p>

      </div>
    </div>
  );
};

export default IPMacChanger;