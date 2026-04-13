import React from "react";

const Charmy = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg">

        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Charmy
        </h2>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          ARCK-29: Charmy — Building a Passive WiFi Recon Device
        </h3>

        <p className="text-gray-300 mb-6">
          Before diving into more aggressive and active tools, I explored a different side of wireless security: passive reconnaissance.
        </p>

        <p className="text-gray-300 mb-6">
          That’s where ARCK-29: Charmy comes in — a Pwnagotchi-inspired device that quietly observes WiFi environments while presenting itself with a simple, friendly interface.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Why “Charmy”
        </h3>

        <p className="text-gray-300 mb-4">
          Unlike my other projects, this one has personality.
        </p>

        <p className="text-gray-300 mb-4">
          Charmy displays a small animated face that reacts to its environment. It looks harmless, even playful. But behind that simple interface, it performs serious work.
        </p>

        <p className="text-gray-300 mb-4">
          The name reflects that contrast:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Friendly on the outside</li>
          <li>Focused and technical underneath</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What Charmy Does
        </h3>

        <p className="text-gray-300 mb-4">
          ARCK-29 is designed for passive WiFi analysis, meaning it does not actively interfere with networks. Instead, it:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Listens to nearby WiFi traffic</li>
          <li>Captures handshake data in controlled environments</li>
          <li>Learns from interactions over time</li>
          <li>Adapts its behavior based on results</li>
        </ul>

        <p className="text-gray-300 mb-6">
          This makes it a great tool for understanding how devices communicate over wireless networks.
        </p>

        <p className="text-gray-300 mb-6">
          This project is strictly for ethical learning and authorized testing.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Why Passive Matters
        </h3>

        <p className="text-gray-300 mb-4">
          Most people jump straight into active attacks. But passive recon is just as important.
        </p>

        <p className="text-gray-300 mb-4">
          With passive techniques, you can:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Gather useful data without being obvious</li>
          <li>Study real-world network behavior</li>
          <li>Understand how devices naturally interact</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Charmy helped me slow down and actually observe, not just attack.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What I Learned
        </h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>How WiFi handshakes are captured</li>
          <li>The importance of patience in security testing</li>
          <li>How machine-like behavior can be simulated in simple systems</li>
          <li>The balance between automation and control</li>
        </ul>

        <p className="text-gray-300 mb-6">
          It also taught me that not every tool needs to be aggressive to be effective.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Challenges
        </h3>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Keeping the system lightweight and stable</li>
          <li>Managing storage for captured data</li>
          <li>Fine-tuning behavior and responsiveness</li>
          <li>Designing a simple but meaningful interface</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What Makes Charmy Special
        </h3>

        <p className="text-gray-300 mb-4">
          Charmy stands out because it blends:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Technical functionality</li>
          <li>Automation</li>
          <li>A human-like interface</li>
        </ul>

        <p className="text-gray-300">
          It’s a reminder that tools can be both functional and expressive.
        </p>

      </div>
    </div>
  );
};

export default Charmy;