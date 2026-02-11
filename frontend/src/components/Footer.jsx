import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
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
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <motion.a
              key={link}
              href={`/${link.toLowerCase()}`}
              whileHover={{ y: -3, scale: 1.05 }}
              className="hover:text-gradient transition text-zinc-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* GitHub */}
          <motion.a
            href="https://github.com/ParajuliCoder"
            target="_blank"
            whileHover={{ scale: 1.3, rotate: 4, y: -3 }}
            className="text-zinc-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} className="hover:fill-white transition-colors duration-300" />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/1DpyZh4jp5/"
            target="_blank"
            whileHover={{ scale: 1.3, rotate: 4, y: -3 }}
            className="text-zinc-400 hover:text-red-400 transition-colors   duration-300"
          >
            <FaFacebook size={28} className="hover:fill-blue-400 fill-blue-500 transition-colors duration-300" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/anish-parajuli-9a9333398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            whileHover={{ scale: 1.3, rotate: 4, y: -3 }}
            className="text-blue-600 hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://www.tiktok.com/@anishparajuli21?_r=1&_t=ZS-93QTCf6fYns"
            target="_blank"
            whileHover={{ scale: 1.3, y: -3 }}
            className="text-white hover:text-white transition-colors duration-300"
          >
            <FaTiktok size={28} />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/parajuli5343?igsh=MXdxN3ltc2VtcnNmcQ=="
            target="_blank"
            whileHover={{ scale: 1.3, y: -3 }}
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </motion.a>
        </div>
      </div>

      {/* Optional: small tagline */}
      <p className="mt-6 text-center text-zinc-500 text-sm">
        Crafted with ❤️ by Anish Parajuli
      </p>
    </footer>
  );
}
