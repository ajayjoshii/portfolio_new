import React from "react";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const Blog = () => {
  return (
    <div className="bg-zinc-600 mt-10 min-h-screen py-12 px-6 md:px-24">
      <div className="max-w-4xl bg-zinc-600 mx-auto shadow-2xl rounded-2xl p-10 animate-fadeIn">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 animate-slideIn">
            Smart Sensor Cane for Visually Impaired Using IoT
          </h1>
          <p className="text-lg text-white mb-1">
            <span className="font-semibold">Anish Parajuli</span> - Founder, Smile To The Future, Nepal
          </p>
          <p className="text-white">
            Email: <a href="mailto:anishparajuli704@gmail.com" className="text-blue-400 hover:underline">anishparajuli704@gmail.com</a>
          </p>
        </header>

        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Abstract</h2>
          <p className="animate-fadeIn delay-100">
            Visually impaired individuals face daily challenges in navigating both indoor and outdoor environments safely. Traditional mobility aids, such as canes, provide limited obstacle detection and lack smart alert capabilities. 
          </p>
          <p className="animate-fadeIn delay-200">
            This research proposes a Smart Sensor Stick designed for visually impaired people, integrating IoT connectivity, ultrasonic sensors, vibration feedback, and real-time alerts. The system uses multiple ultrasonic sensors mounted on a custom-designed PCB to detect obstacles in front, above, and at ground level. Detected obstacles trigger haptic feedback through vibration motors and optional audio alerts.
          </p>
          <p className="animate-fadeIn delay-300">
            The stick also integrates IoT modules to allow family members or caregivers to receive real-time location and obstacle notifications via a mobile application. The design prioritizes affordability, portability, and energy efficiency. The proposed solution enhances independent mobility, safety, and confidence for visually impaired individuals while leveraging custom PCB design to optimize size, cost, and power consumption.
          </p>
        </section>

        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Software Architecture</h2>
          <p className="animate-fadeIn delay-100">
            The embedded firmware performs the following tasks:
          </p>
          <ul className="list-disc list-inside space-y-1 animate-fadeIn delay-200">
            <li>Continuous monitoring of ultrasonic sensors</li>
            <li>Distance computation and obstacle classification</li>
            <li>Triggering vibration and audio feedback based on proximity thresholds</li>
            <li>IoT message generation and transmission to the mobile app</li>
            <li>Battery and system status monitoring</li>
          </ul>
          <p className="mt-2 animate-fadeIn delay-300">
            A simple algorithm for haptic feedback is:
          </p>
          <div className="my-4 p-4 bg-zinc-700 rounded-lg shadow-inner animate-fadeIn delay-400">
            <BlockMath math={`V = V_{max} \\times \\frac{D_{max} - D_{obs}}{D_{max}}`} />
          </div>
          <p className="text-sm text-gray-300 animate-fadeIn delay-500">
            Where <InlineMath math="V" /> is vibration intensity, <InlineMath math="D_{obs}" /> is obstacle distance, and <InlineMath math="D_{max}" /> is maximum detection range.
          </p>
        </section>

        <section className="mb-8 text-justify space-y-4 text-white leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 animate-slideInUp">Expected Impact</h2>
          <ul className="list-disc list-inside space-y-1 animate-fadeIn delay-100">
            <li>Improved independent mobility and safety for visually impaired users</li>
            <li>Reduced risk of collisions and accidents</li>
            <li>Remote monitoring and alerts for caregivers</li>
            <li>Compact, affordable, and energy-efficient design</li>
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

export default Blog;