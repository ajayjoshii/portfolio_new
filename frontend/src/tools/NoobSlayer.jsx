import React from "react";

const NoobSlayer = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg">

        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Noob Slayer
        </h2>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          ARCK-30: Noob Slayer — Building a WiFi Pineapple-Style Device
        </h3>

        <p className="text-gray-300 mb-6">
          Before ARK-32 and ARCK-33, one of my earlier explorations into wireless cybersecurity was building a WiFi Pineapple-style device.
        </p>

        <p className="text-gray-300 mb-6">
          I called it ARCK-30: Noob Slayer — a project focused on understanding how attackers exploit weak WiFi configurations and user behavior.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Why “Noob Slayer”
        </h3>

        <p className="text-gray-300 mb-4">
          The name comes from a simple idea.
        </p>

        <p className="text-gray-300 mb-4">
          Most successful WiFi attacks don’t rely on advanced hacking. They work because of:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Poor network configuration</li>
          <li>Weak security practices</li>
          <li>Users connecting to untrusted networks</li>
        </ul>

        <p className="text-gray-300 mb-6">
          This device is designed to expose exactly those weaknesses.
        </p>

        <p className="text-gray-300 mb-6">
          In that sense, it “slays” beginner-level mistakes.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What This Device Does
        </h3>

        <p className="text-gray-300 mb-4">
          ARCK-30 is inspired by WiFi Pineapple concepts and focuses on network impersonation and traffic interaction.
        </p>

        <p className="text-gray-300 mb-4">
          It can be used to:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Simulate rogue access points</li>
          <li>Perform controlled man-in-the-middle scenarios</li>
          <li>Observe how devices automatically connect to known networks</li>
          <li>Study user behavior in insecure environments</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Again, this is strictly for ethical hacking, learning, and authorized testing.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Core Idea
        </h3>

        <p className="text-gray-300 mb-4">
          The goal wasn’t just to build the device, but to understand:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>How rogue networks trick devices</li>
          <li>Why users unknowingly connect to malicious access points</li>
          <li>How attackers capture or manipulate traffic</li>
          <li>What makes a network secure vs vulnerable</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Instead of using ready-made tools, I wanted to build and control the process myself.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What I Learned
        </h3>

        <p className="text-gray-300 mb-4">
          This project gave me a strong foundation in:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>WiFi attack techniques (especially Evil Twin scenarios)</li>
          <li>Network behavior and device reconnection logic</li>
          <li>The human factor in cybersecurity</li>
          <li>How small misconfigurations lead to real risks</li>
        </ul>

        <p className="text-gray-300 mb-6">
          It also showed me that users are often the weakest link.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Challenges I Faced
        </h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Managing stable access point behavior</li>
          <li>Handling multiple device connections</li>
          <li>Understanding packet flow and redirection</li>
          <li>Keeping the system reliable during testing</li>
        </ul>

        <p className="text-gray-300 mb-6">
          A lot of trial and error went into making it work consistently.
        </p>

      </div>
    </div>
  );
};

export default NoobSlayer;