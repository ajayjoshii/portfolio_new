import { Link } from "react-router-dom"; // Use react-router-dom for SPA routing
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="bg-black/90 text-zinc-300 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 mb-2">
            Anish Parajuli
          </h2>
          <p className="text-sm text-zinc-400">
            © 2025 All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {quickLinks.map((link) => (
            <motion.div key={link} whileHover={{ y: -3, scale: 1.05 }}>
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="hover:text-gradient transition text-zinc-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <motion.a
            href="https://github.com/ParajuliCoder"
            target="_blank"
            whileHover={{ scale: 1.3, rotate: 4, y: -3 }}
            className="text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/1DpyZh4jp5/"
            target="_blank"
            whileHover={{ scale: 1.3, rotate: 4, y: -3 }}
            className="text-zinc-400 hover:text-red-400 transition-colors duration-300"
          >
            <FaFacebook size={28} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/anish-parajuli-9a9333398"
            target="_blank"
            whileHover={{ scale: 1.3, rotate: 4, y: -3 }}
            className="text-blue-600 hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@anishparajuli21"
            target="_blank"
            whileHover={{ scale: 1.3, y: -3 }}
            className="text-white hover:text-white transition-colors duration-300"
          >
            <FaTiktok size={28} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/parajuli5343"
            target="_blank"
            whileHover={{ scale: 1.3, y: -3 }}
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </motion.a>
        </div>
      </div>

      <p className="mt-6 text-center text-zinc-500 text-sm">
        Crafted with ❤️ by Anish Parajuli
      </p>
    </footer>
  );
}