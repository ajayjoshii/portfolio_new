import React from "react";

const CodeInjectorC = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex justify-center items-center p-6">
      <div className="mt-22 w-full bg-[#0b1120] border border-green-400/30 rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] animate-[float_6s_ease-in-out_infinite]">

        <h2 className="text-3xl font-bold text-green-400 mb-6 animate-bounce">
          Understanding Code Injection and Building Safer Systems in C
        </h2>

        <p className="text-gray-300 mb-4">
          Code injection is one of the most common and dangerous classes of software vulnerabilities. It occurs when an attacker is able to insert and execute unintended code within a program, often due to improper input handling or weak validation. In this project, I focused on understanding how code injection vulnerabilities arise and how to prevent them using secure programming practices in C.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          What Is Code Injection?
        </h3>
        <p className="text-gray-300 mb-3">
          Code injection happens when a program executes data as if it were code. This usually occurs when user input is not properly validated or sanitized. Common examples include:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Command injection</li>
          <li>SQL injection</li>
          <li>Buffer overflow-based execution</li>
          <li>Script injection in web environments</li>
        </ul>
        <p className="text-gray-300 mb-4">
          These vulnerabilities can lead to unauthorized access, data loss, or full system compromise.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Why C Requires Extra Care
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Memory management</li>
          <li>Input validation</li>
          <li>Buffer boundaries</li>
        </ul>
        <p className="text-gray-300 mb-4">
          C is a powerful low-level language, but it does not provide built-in protections against many common vulnerabilities. Developers must manually handle these tasks, making it easier to introduce security flaws if not handled carefully.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Project Focus: Prevention and Awareness
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Identifying unsafe coding patterns</li>
          <li>Demonstrating how vulnerabilities can occur</li>
          <li>Applying secure coding practices to prevent them</li>
        </ul>
        <p className="text-gray-300 mb-4">
          The goal is to build safer, more reliable software.
        </p>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Common Vulnerability Example
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Using unsafe functions like gets()</li>
          <li>Not checking input length</li>
          <li>Writing beyond buffer boundaries</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Secure Coding Practices
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Always validate and sanitize input</li>
          <li>Use safer alternatives like fgets() instead of gets()</li>
          <li>Check buffer sizes before writing data</li>
          <li>Avoid executing user-provided input as commands</li>
          <li>Implement proper error handling</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Key Features of the Project
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Demonstrates safe input handling techniques</li>
          <li>Highlights insecure vs secure coding patterns</li>
          <li>Provides clear examples of risk mitigation</li>
          <li>Focuses on defensive programming in C</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Skills Developed
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Secure coding practices in C</li>
          <li>Understanding of low-level vulnerabilities</li>
          <li>Debugging and testing skills</li>
          <li>Awareness of real-world attack vectors</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Challenges Faced
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Identifying subtle unsafe patterns in code</li>
          <li>Balancing performance with security</li>
          <li>Handling edge cases in input validation</li>
          <li>Ensuring portability across systems</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Future Improvements
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li>Adding automated vulnerability checks</li>
          <li>Integrating static analysis tools</li>
          <li>Expanding examples to cover more attack types</li>
          <li>Building a testing suite for validation</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">
          Final Thoughts
        </h3>
        <p className="text-gray-300 mb-2">
          Code injection is not just a theoretical problem. It is one of the most exploited weaknesses in real systems. Understanding how it works is important, but preventing it is what truly matters.
        </p>
        <p className="text-gray-300">
          This project highlights a key principle: strong developers don’t just write code that works, they write code that is secure, reliable, and resilient.
        </p>

      </div>
    </div>
  );
};

export default CodeInjectorC;