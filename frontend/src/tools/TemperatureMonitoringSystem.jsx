import React from "react";

const TemperatureMonitoringSystem = () => {
  return (
    <div className="mt-22 mx-auto p-6 bg-zinc-400 shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">21. Temperature Monitoring System</h1>
      <p className="text-gray-700">
        <span className="font-semibold">Objective:</span> Collect real-time temperature data, process it using Python and C/C++, and provide alerts using embedded systems for reliable monitoring.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">How It Works:</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Temperature sensors (LM35, DHT11/DHT22) collect real-time readings.</li>
          <li>Microcontroller processes raw sensor data.</li>
          <li>Python logs, analyzes, visualizes data, and triggers alerts for abnormal readings.</li>
          <li>User interface displays graphs, dashboards, and notifications.</li>
        </ol>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Real-time temperature monitoring</li>
          <li>Data logging and visualization</li>
          <li>Threshold-based alerts</li>
          <li>Modular and scalable design</li>
          <li>Cost-effective implementation</li>
        </ul>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Future Improvements:</span> Cloud connectivity, multiple sensor types (humidity, pressure), predictive analytics, automated control, and mobile notifications.
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Final Thoughts:</span> Combines hardware, software, and real-time data processing for accurate, responsive, and practical environmental monitoring.
      </p>
    </div>
  );
};

export default TemperatureMonitoringSystem;