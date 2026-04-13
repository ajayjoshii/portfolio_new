import React from "react";

const NetSlayer = () => {
    return (
        <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
            <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg">

                <h2 className="text-3xl font-bold text-green-400 mb-4">
                    Net Slayer
                </h2>

                <h3 className="text-xl font-semibold mb-3 text-green-300">
                    ARCK-33: Net Slayer — Building a WiFi Deauther Smartwatch
                </h3>

                <p className="text-gray-300 mb-6">
                    After completing ARK-32 “Demon Killer,” I wanted to explore something more compact and practical. Not just a tool you carry, but something you can wear and access instantly.
                </p>

                <p className="text-gray-300 mb-6">
                    That idea led to ARCK-33: Net Slayer — a WiFi deauther built into a smartwatch form factor.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-green-300">The Idea Behind Net Slayer</h3>

                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                    <li>Small and portable</li>
                    <li>Fast to access</li>
                    <li>Built for real-world testing situations</li>
                </ul>

                <p className="text-gray-300 mb-6">
                    So instead of scaling up, I scaled down and turned it into a wearable device.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-green-300">What ARCK-33 Does</h3>

                <p className="text-gray-300 mb-6">
                    Net Slayer is designed for WiFi deauthentication testing, a common technique used in cybersecurity to evaluate how networks handle forced disconnections.
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                    <li>Simulate deauthentication scenarios</li>
                    <li>Observe how devices react to network disruptions</li>
                    <li>Identify weak or poorly configured access points</li>
                </ul>

                <p className="text-gray-300 mb-6">
                    Important: This tool is built strictly for ethical use, learning, and authorized security testing.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-green-300">Why a Smartwatch Form Factor</h3>

                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                    <li>You don’t need to carry extra gear</li>
                    <li> It’s always available on your wrist</li>
                    <li> Quick interaction without setup time</li>
                    <li> Makes testing more efficient in dynamic environments</li>
                </ul>

                <p className="text-gray-300 mb-6">
                    It changes how you interact with security tools. More direct, less friction.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-green-300">What Makes Net Slayer Different</h3>

                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                    <li>Custom-built for my own testing workflow </li>
                    <li>Designed with both hardware and software in mind </li>
                    <li>Focused on learning through building, not just using tools </li>
                    <li>Compact but purpose-driven </li>
                </ul>

                <p className="text-gray-300 mb-6">
                    It changes how you interact with security tools. More direct, less friction.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-green-300">Challenges During Development</h3>

                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                    <li>Limited hardware resources</li>
                    <li>Battery life management</li>
                    <li>Maintaining stable WiFi behavior</li>
                    <li>Designing a usable interface on a small screen</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-green-300">What I’ve Learned So Far</h3>

                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                    <li>WiFi protocols at a deeper level </li>
                    <li>How deauthentication attacks actually work in practice </li>
                    <li>Embedded system limitations </li>
                    <li>The importance of efficiency in both code and hardware </li>
                </ul>

            </div>
        </div>
    );
};

export default NetSlayer;