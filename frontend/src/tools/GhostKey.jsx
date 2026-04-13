import React from "react";

const GhostKey = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg">

        <h2 className="text-3xl font-bold text-green-400 mb-4">
          GHOST KEY
        </h2>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          ARCK-34: Ghost Key — Building an RFID & NFC Security Tool
        </h3>

        <p className="text-gray-300 mb-6">
          As I continued developing my ARCK series, I wanted to move beyond WiFi-based attacks and explore another critical area of cybersecurity: access control systems.
        </p>

        <p className="text-gray-300 mb-6">
          That led to the creation of ARCK-34: Ghost Key — a device focused on RFID and NFC security testing.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          The Idea Behind Ghost Key
        </h3>

        <p className="text-gray-300 mb-4">
          Many secure environments rely on contactless systems like:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>RFID access cards</li>
          <li>NFC-enabled devices</li>
          <li>Smart entry systems</li>
        </ul>

        <p className="text-gray-300 mb-6">
          They’re convenient, fast, and widely used. But in many cases, they are not deeply secured. I built Ghost Key to understand how these systems actually work and where they fail.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What ARCK-34 Does
        </h3>

        <p className="text-gray-300 mb-4">
          Ghost Key is designed for low-level interaction with RFID and NFC technologies.
        </p>

        <p className="text-gray-300 mb-4">
          With this device, I can:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Read and analyze signals from access cards</li>
          <li>Emulate RFID/NFC tags</li>
          <li>Test cloning scenarios in controlled environments</li>
          <li>Study how readers and tags communicate</li>
        </ul>

        <p className="text-gray-300 mb-6">
          This gives a hands-on way to explore how access systems can be bypassed or strengthened.
        </p>

        <p className="text-gray-300 mb-6">
          This project is strictly for ethical use and authorized security testing only.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Why This Matters
        </h3>

        <p className="text-gray-300 mb-6">
          A lot of people focus only on network security, but physical access systems are just as important.
        </p>

        <p className="text-gray-300 mb-6">
          If someone can clone a card or emulate a tag, they don’t need to hack a network. They can just walk in.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What I Learned
        </h3>

        <p className="text-gray-300 mb-4">
          Working on this project helped me understand:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>How RFID and NFC protocols operate at a low level</li>
          <li>Differences between secure and insecure implementations</li>
          <li>How cloning and emulation attacks work in practice</li>
          <li>The connection between physical and digital security</li>
        </ul>

        <p className="text-gray-300 mb-6">
          It pushed me into a more technical layer compared to my previous projects.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Challenges I Faced
        </h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Handling different RFID standards and frequencies</li>
          <li>Achieving stable read/write operations</li>
          <li>Working with limited hardware resources</li>
          <li>Debugging signal-level communication issues</li>
        </ul>

        <p className="text-gray-300 mb-6">
          This was one of the most technical builds in the ARCK series so far.
        </p>

      </div>
    </div>
  );
};

export default GhostKey;