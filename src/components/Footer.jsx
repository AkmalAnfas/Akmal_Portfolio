import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaCode, FaRegSmile } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/AkmalAnfas",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-800"
    },
    {
      icon: FaLinkedin,
      href: "http://linkedin.com/in/AkmalAnfas",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20"
    },
    {
      icon: FaInstagram,
      href: "#",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-12 bg-gradient-to-t from-dark-400 to-dark-300 border-t border-gray-800/50"
    >
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-start gap-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-5">Akmal Anfas</span>
                <span className="text-gray-400 text-sm">Full Stack Developer</span>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences that make a difference through code and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5, color: "#8B5CF6" }}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-right"
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Let's Connect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ready to start your next project? Let's talk!
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl bg-dark-400 border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} ${social.bgColor}`}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Akmal Anfas. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-gray-400 text-sm"
          >
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaCode className="text-blue-400" />
            </motion.div>
            <span>by Akmal</span>
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaRegSmile className="text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <div className="text-gray-400 text-sm">
            <span>Always learning, always building</span>
          </div>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-8 pt-6 border-t border-gray-800/30"
        >
          <p className="text-gray-500 text-xs italic">
            "The web is what you make of it. Let's make something amazing together."
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer