import React from "react";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const WildlifeBlog = () => {
  return (
    <div className="bg-zinc-600 mt-10 min-h-screen py-12 px-6 md:px-24">
      <div className="max-w-4xl bg-zinc-600 mx-auto shadow-2xl rounded-2xl p-10 animate-fadeIn">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 animate-slideIn">
            IoT-Based Wildlife Intrusion Detection System for Nepali Farms
          </h1>
          <p className="text-lg text-white mb-1">
            <span className="font-semibold">Anish Parajuli</span> - Founder, Smile To The Future, Nepal
          </p>
          <p className="text-white">
            Email: <a href="mailto:anishparajuli704@gmail.com" className="text-blue-400 hover:underline">anishparajuli704@gmail.com</a>
          </p>
        </header>

        {/* Abstract */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Abstract</h2>
          <p className="animate-fadeIn delay-100">
            Wildlife intrusion into agricultural land is a major challenge faced by farmers in rural regions of Nepal. Animals such as elephants, wild boars, and monkeys frequently enter farms, causing severe crop damage and economic loss. Traditional methods like manual guarding and fencing are often inefficient and labor intensive.
          </p>
          <p className="animate-fadeIn delay-200">
            This research proposes a low-cost IoT-based wildlife intrusion detection system for small and medium-scale farms in Nepal. It integrates motion sensors, AI-enabled cameras, and embedded microcontrollers to detect animal movement and respond automatically. Upon detection, deterrent mechanisms such as sirens and flashing lights are activated while farmers receive SMS or mobile notifications.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Introduction</h2>
          <p className="animate-fadeIn delay-100">
            Agriculture is a key sector of Nepal’s economy, yet farmers in rural areas face persistent challenges from wildlife intrusion. Animals often enter farms at night, damaging crops and contributing to human-wildlife conflict. Traditional guarding and fencing require constant human presence and are often ineffective.
          </p>
          <p className="animate-fadeIn delay-200">
            IoT technologies now enable automated monitoring systems capable of detecting environmental events and responding in real time. By integrating sensors, embedded microcontrollers, and wireless communication, IoT-based farm monitoring provides affordable protection tools.
          </p>
        </section>

        {/* Background & Motivation */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Background and Motivation</h2>
          <p className="animate-fadeIn delay-100">
            Human-wildlife conflict is growing in regions near forests. Common animals responsible for crop damage include:
          </p>
          <ul className="list-disc list-inside space-y-1 animate-fadeIn delay-200">
            <li>Asian elephants</li>
            <li>Wild boars</li>
            <li>Monkeys</li>
            <li>Deer and other herbivores</li>
          </ul>
          <p className="animate-fadeIn delay-300">
            Traditional solutions like electric fencing and manual monitoring are expensive or labor-intensive. A low-cost automated detection system can provide early warning alerts and deterrence to improve farm protection.
          </p>
        </section>

        {/* System Overview */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">System Overview</h2>
          <p className="animate-fadeIn delay-100">
            The IoT-based wildlife detection and deterrence system aims to detect animal intrusion early and alert farmers while activating deterrent mechanisms. Components include:
          </p>
          <ul className="list-disc list-inside space-y-1 animate-fadeIn delay-200">
            <li>Motion detection sensors</li>
            <li>AI-enabled camera module</li>
            <li>Embedded microcontroller (ESP32-S3)</li>
            <li>Alert and deterrence system (siren, LEDs)</li>
            <li>Wireless communication module (GSM/SMS)</li>
            <li>Solar-powered energy system</li>
          </ul>
        </section>

        {/* System Architecture */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">System Architecture</h2>
          <p className="animate-fadeIn delay-100">
            The architecture is divided into four layers:
          </p>
          <ul className="list-disc list-inside space-y-1 animate-fadeIn delay-200">
            <li><strong>Detection Layer:</strong> PIR motion sensors detect heat signatures and trigger the AI camera to capture images.</li>
            <li><strong>Processing Layer:</strong> ESP32-S3 processes inputs and runs lightweight AI for image classification.</li>
            <li><strong>Deterrence Layer:</strong> Sirens, flashing LEDs, and image capture activate to scare animals.</li>
            <li><strong>Communication Layer:</strong> Sends SMS or mobile alerts to farmers for immediate response.</li>
          </ul>
        </section>

        {/* Hardware Components */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Hardware Components</h2>
          <ul className="list-disc list-inside space-y-1 animate-fadeIn delay-100">
            <li>ESP32-S3 AI Camera Module</li>
            <li>PIR Motion Sensor</li>
            <li>GSM Communication Module (SIM800L)</li>
            <li>High-Decibel Siren</li>
            <li>LED Flashing Light</li>
            <li>Solar Panel & Rechargeable Battery</li>
            <li>Weatherproof Enclosure</li>
          </ul>
        </section>

        {/* Software Design */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Software Design</h2>
          <p className="animate-fadeIn delay-100">
            Firmware developed in C/C++ monitors sensors, triggers cameras, classifies images, activates deterrents, and sends alerts:
          </p>
          <ol className="list-decimal list-inside space-y-1 animate-fadeIn delay-200">
            <li>Monitor motion sensors continuously</li>
            <li>Trigger camera capture on motion</li>
            <li>Process images with AI model</li>
            <li>Activate deterrent mechanisms</li>
            <li>Send SMS alerts to farmers</li>
          </ol>
        </section>

        {/* Expected Impact */}
        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Expected Impact</h2>
          <ul className="list-disc list-inside space-y-1 animate-fadeIn delay-100">
            <li>Reduced crop damage caused by wildlife</li>
            <li>Early warning alerts for farmers</li>
            <li>Reduced manual night monitoring</li>
            <li>Improved agricultural productivity</li>
            <li>Reduced human-wildlife conflict without harming animals</li>
          </ul>
        </section>

        <footer className="mt-10 text-center text-gray-300 text-sm animate-fadeIn delay-200">
          © 2026 Anish Parajuli. All rights reserved.
        </footer>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        .animate-slideIn { animation: slideIn 0.8s ease forwards; }
        .animate-slideInUp { animation: slideInUp 0.8s ease forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default WildlifeBlog;