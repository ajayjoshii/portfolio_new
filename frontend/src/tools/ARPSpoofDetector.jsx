import React from "react";

const ARPSpoofDetector = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition animate-[float_6s_ease-in-out_infinite]">

        <h2 className="text-3xl font-bold text-green-400 mb-4 animate-bounce">
          Understanding ARP Spoofing and How to Detect It Using Python
        </h2>

        <p className="text-gray-300 mb-6">
          In local networks, devices rely on a protocol called ARP (Address Resolution Protocol) to communicate with each other. While ARP is simple and efficient, it was not designed with strong security in mind. This makes it vulnerable to a technique known as ARP spoofing.
        </p>

        <p className="text-gray-300 mb-6">
          Instead of building offensive tools, I focused on understanding how ARP spoofing works and how it can be detected using Python in a controlled environment.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What Is ARP?
        </h3>

        <p className="text-gray-300 mb-4">
          ARP is responsible for mapping IP addresses to MAC addresses within a local network. When a device wants to communicate with another, it sends an ARP request asking, “Who has this IP address?”
        </p>

        <p className="text-gray-300 mb-4">
          The device with that IP responds with its MAC address, allowing communication to proceed.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          What Is ARP Spoofing?
        </h3>

        <p className="text-gray-300 mb-4">
          ARP spoofing occurs when a malicious device sends fake ARP responses to a network. This tricks devices into associating the attacker’s MAC address with a legitimate IP address.
        </p>

        <p className="text-gray-300 mb-4">
          As a result, traffic that was meant for another device is redirected through the attacker.
        </p>

        <p className="text-gray-300 mb-4">
          This can lead to:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Traffic interception</li>
          <li>Data manipulation</li>
          <li>Man-in-the-middle attacks</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Project Focus: Detection, Not Exploitation
        </h3>

        <p className="text-gray-300 mb-4">
          In this project, I built a Python-based ARP monitoring tool that helps detect suspicious activity rather than perform attacks.
        </p>

        <p className="text-gray-300 mb-4">
          The goal is to:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Monitor ARP traffic on the network</li>
          <li>Identify inconsistent IP-to-MAC mappings</li>
          <li>Alert when potential spoofing is detected</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          How the Detection Tool Works
        </h3>

        <p className="text-gray-300 mb-4">
          The tool listens to ARP packets on the network and compares observed mappings over time.
        </p>

        <p className="text-gray-300 mb-4">
          Basic workflow:
        </p>

        <ol className="list-decimal list-inside text-gray-400 space-y-2 mb-6">
          <li>Capture ARP packets from the network</li>
          <li>Store known IP-to-MAC address mappings</li>
          <li>Compare new packets with stored values</li>
          <li>Flag mismatches as potential spoofing attempts</li>
        </ol>

        <p className="text-gray-300 mb-6">
          If a single IP address suddenly maps to a different MAC address, it may indicate suspicious activity.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Key Concepts Used
        </h3>

        <p className="text-gray-300 mb-4">
          This project helped reinforce several important networking and programming concepts:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Packet analysis and inspection</li>
          <li>Understanding ARP behavior</li>
          <li>Python networking libraries</li>
          <li>Real-time monitoring techniques</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These are essential skills for cybersecurity roles focused on network defense.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Challenges Faced
        </h3>

        <p className="text-gray-300 mb-4">
          Some of the main challenges included:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Capturing packets requires proper permissions</li>
          <li>Filtering relevant ARP traffic efficiently</li>
          <li>Avoiding false positives in detection</li>
          <li>Handling network noise in busy environments</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Working through these issues provided insight into real-world network monitoring.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-green-300">
          Future Improvements
        </h3>

        <p className="text-gray-300 mb-4">
          There are several ways to expand this tool:
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
          <li>Add real-time alerts or notifications</li>
          <li>Log suspicious activity for later analysis</li>
          <li>Visualize network relationships</li>
          <li>Integrate with intrusion detection systems</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These features would make the tool more practical in real environments.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-green-300">
          Final Thoughts
        </h3>

        <p className="text-gray-400 mb-4">
          ARP spoofing highlights a key weakness in traditional network design. Understanding it is important, but knowing how to detect and prevent it is far more valuable.
        </p>

        <p className="text-gray-400">
          This project reflects a broader principle in cybersecurity: the goal is not just to understand attacks, but to build systems that can defend against them effectively.
        </p>

      </div>
    </div>
  );
};

export default ARPSpoofDetector;