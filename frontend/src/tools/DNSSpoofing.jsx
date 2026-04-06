import React from "react";

const DNSSpoofDetector = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition animate-[float_6s_ease-in-out_infinite]">

        <h2 className="text-3xl font-bold text-green-400 mb-6 animate-bounce">
          Understanding DNS Spoofing and Building a Detection Tool in Python
        </h2>

        <p className="text-gray-300 mb-4 text-justify">
          The Domain Name System (DNS) is one of the core components of the internet. It translates human-readable domain names into IP addresses that machines use to communicate. While DNS makes browsing simple, it also introduces security risks when not properly protected.
        </p>

        <p className="text-gray-300 mb-4">
          One of the most notable threats is DNS spoofing. In this project, I focused on understanding this attack and building a Python-based tool to detect suspicious DNS activity in a controlled environment.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          What Is DNS?
        </h3>
        <p className="text-gray-300 mb-4">
          DNS acts like the internet’s phonebook. When you type a website address into your browser, a DNS server resolves that name into an IP address so your device can connect to the correct server.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          What Is DNS Spoofing?
        </h3>
        <p className="text-gray-300 mb-3">
          DNS spoofing occurs when false DNS information is introduced into a system, causing users to be redirected to the wrong destination. This can result in:
        </p>

        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Redirecting users to fake websites</li>
          <li>Credential theft</li>
          <li>Data interception</li>
        </ul>

        <p className="text-gray-300 mb-4">
          Because DNS operates behind the scenes, users often don’t realize anything is wrong.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Project Focus: Detection and Analysis
        </h3>
        <p className="text-gray-300 mb-3">
          Instead of creating offensive tools, this project focuses on detecting suspicious DNS behavior. The tool is designed to:
        </p>

        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Monitor DNS responses on a network</li>
          <li>Compare responses against expected IP addresses</li>
          <li>Identify inconsistencies or anomalies</li>
          <li>Alert when potential spoofing is detected</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          How the Tool Works
        </h3>

        <p className="text-gray-300 mb-3">
          The Python-based tool uses packet inspection techniques to analyze DNS traffic. Basic workflow:
        </p>

        <ol className="list-decimal list-inside text-gray-400 mb-4 space-y-1">
          <li>Capture DNS request and response packets</li>
          <li>Extract domain names and resolved IP addresses</li>
          <li>Compare responses with trusted or previously known values</li>
          <li>Flag mismatches as potential spoofing attempts</li>
        </ol>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Key Features
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Real-time DNS traffic monitoring</li>
          <li>Domain-to-IP mapping analysis</li>
          <li>Simple alert system for anomalies</li>
          <li>Lightweight and easy to run</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Skills Developed
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Python networking and packet analysis</li>
          <li>Understanding DNS protocol behavior</li>
          <li>Identifying abnormal network patterns</li>
          <li>Building defensive security tools</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Challenges Faced
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Capturing DNS packets efficiently</li>
          <li>Avoiding false positives due to legitimate DNS changes</li>
          <li>Handling encrypted DNS (DoH/DoT)</li>
          <li>Managing performance during real-time monitoring</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Future Improvements
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Integration with trusted DNS databases</li>
          <li>Logging and reporting features</li>
          <li>Visualization of DNS activity</li>
          <li>Support for detecting advanced attack patterns</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Final Thoughts
        </h3>
        <p className="text-gray-300 mb-2">
          DNS spoofing highlights how critical trust is in internet infrastructure. Understanding the threat is important, but building tools to detect and prevent it is far more valuable.
        </p>
        <p className="text-gray-300">
          This project reinforces a key idea: strong cybersecurity skills are built by protecting systems, not exploiting them.
        </p>

      </div>
    </div>
  );
};

export default DNSSpoofDetector;