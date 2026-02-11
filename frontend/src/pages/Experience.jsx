import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2019 – Present",
    title: "Full-Stack Developer & System Analyst",
    description:
      "Designed, built, and maintained scalable systems with focus on performance, security, and user experience. Specialized in both frontend and backend development.",
  },
  {
    period: "2022 – Present",
    title: "Malware Researcher & ML Engineer",
    description:
      "Focused on reverse engineering, exploit analysis, and machine learning applications in cybersecurity for threat detection and mitigation.",
  },
  {
    period: "2021 – 2022",
    title: "Quality Assurance Specialist",
    description:
      "Gained practical skills in test planning, performance validation, and bug tracking, enhancing attention to detail and system reliability.",
  },
  {
    period: "2020 – Present",
    title: "Digital Marketing & Content Creator",
    description:
      "Created engaging bilingual content, educational posts, and technical videos while contributing to SEO strategy and brand promotion.",
  },
];

/* Animation Variants */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section className="bg-[#0b0b0f] py-28 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-emerald-400">
            Experience
          </h2>
          <div className="w-16 h-[2px] bg-emerald-400 mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-400/40 via-emerald-400/20 to-transparent" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-20"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ x: 6 }}
                className="relative flex gap-8 group"
              >
                {/* Timeline Dot */}
                <motion.span
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute -left-[2px] top-2
                    w-3 h-3 rounded-full
                    bg-emerald-400
                    shadow-[0_0_16px_rgba(16,185,129,0.9)]
                  "
                />

                {/* Content Card */}
                <div
                  className="
                    relative
                    rounded-xl left-6 bottom-5
                    p-6
                    transition
                    duration-300
                    group-hover:bg-[#121217]
                    group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
                  "
                >
                  <p className="text-sm font-semibold px-1 text-emerald-400">
                    {exp.period}
                  </p>

                  <h3 className="text-lg font-semibold mt-1">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
