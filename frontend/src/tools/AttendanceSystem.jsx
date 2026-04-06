import React from "react";

const AttendanceSystem = () => {
  return (
    <div className="mt-22 mx-auto p-6 bg-zinc-400 shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">20. Office Attendance System</h1>
      <p className="text-gray-700">
        <span className="font-semibold">Objective:</span> Automate office attendance using facial recognition, Python, C/C++, and embedded systems with secure, real-time logging and reporting.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">How It Works:</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Cameras or RFID readers capture employee identification.</li>
          <li>Python + ML/DL algorithms identify employees in real time.</li>
          <li>Attendance is logged with timestamps in a secure database.</li>
          <li>Admin interface allows monitoring, editing, and report generation.</li>
        </ol>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Real-time employee identification</li>
          <li>Automated logging with timestamps</li>
          <li>Secure database storage</li>
          <li>User-friendly admin interface</li>
          <li>Scalable for small to large offices</li>
        </ul>
      </div>

      <p className="text-gray-700">
        <span className="font-semibold">Future Improvements:</span> Mobile notifications, office scheduling integration, multiple recognition methods, cloud storage, AI-based anomaly detection.
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Final Thoughts:</span> Shows how AI, embedded systems, and software can combine for efficient, reliable, and user-centered office attendance solutions.
      </p>
    </div>
  );
};

export default AttendanceSystem;