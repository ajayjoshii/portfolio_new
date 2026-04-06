import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Wildlife Intrusion Detection System",
    desc: "Built an IoT-based system using motion sensors and cameras to detect wildlife intrusion in farms and protected areas, sending real-time alerts and triggering automated deterrents.",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5",
    route: "/projects/iot-robotics-project/wildlife-intrusion",
  },
  {
    title: "Smart Sensor System",
    desc: "Developed a multi-purpose smart sensor module capable of monitoring environmental conditions like temperature, humidity, and motion with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    route: "/projects/iot-robotics-project/smart-sensor",
  },
  {
    title: "Human Following Robot",
    desc: "Designed an autonomous robot that tracks and follows a human using computer vision and ultrasonic sensors for navigation and obstacle avoidance.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
    route: "/projects/iot-robotics-project/human-following-robot",
  },
  {
    title: "Smart Doorbell System",
    desc: "Created a smart doorbell integrated with a camera and mobile notifications, enabling remote monitoring and communication with visitors in real time.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    route: "/projects/iot-robotics-project/smart-doorbell",
  },
  {
    title: "Automatic Sensor Light",
    desc: "Implemented an energy-efficient lighting system that automatically turns on/off based on motion detection and ambient light levels.",
    image: "https://images.unsplash.com/photo-1507477338202-487281e6c27e",
    route: "/projects/iot-robotics-project/sensor-light",
  },
  {
    title: "Face Tracking Drone",
    desc: "Developed a drone system capable of detecting and tracking human faces using computer vision, maintaining stable positioning and smooth movement.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
    route: "/projects/iot-robotics-project/face-tracking-drone",
  },
  {
    title: "Office Attendance System",
    desc: "Built an automated attendance system using biometric or face recognition technology to record employee presence with accuracy and real-time reporting.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    route: "/projects/iot-robotics-project/attendance-system",
  },
];

export default function IoTRoboticsProjects() {
  return (
    <section className="bg-gray-950 py-25 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-green-500 bg-clip-text"
        >
          IoT & Robotics Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} to={project.route} className="block">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/20 transition duration-300"
              >
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl w-full h-48 object-cover shadow-lg hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{project.title}</h3>
                <p className="text-gray-300 text-justify">{project.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}