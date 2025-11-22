import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaGithub, FaLinkedin, FaArrowDown, FaCode, FaRocket } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  }

  const pulseGlowVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300'
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={pulseGlowVariants}
          animate="animate"
          className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseGlowVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseGlowVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className='container mx-auto px-6 flex flex-col items-center justify-between lg:flex-row relative z-10'>
        {/* Left Side Content */}
        <motion.div 
          variants={containerVariants}
          className='lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left'
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mt-16 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">WELCOME TO MY PORTFOLIO</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight'
          >
            Hi, I'm <br />
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
              Akmal Anfas
            </span> 
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <div className="w-4 h-0.5 bg-blue-500"></div>
            <motion.h2 
              className='text-2xl md:text-4xl font-semibold text-gray-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Full Stack Developer
            </motion.h2>
            <div className="w-4 h-0.5 bg-purple-500"></div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className='text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed'
          >
            I craft <span className="text-blue-400 font-semibold">fast, scalable, and user-centric</span> web applications. From engaging frontend to robust backend, I bring ideas to life as seamless, high-quality digital experiences that make an impact.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start'
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group'
            >
              <FaCode className="group-hover:scale-110 transition-transform duration-300" />
              <span>View My Work</span>
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 border-2 border-blue-500/50 rounded-2xl font-semibold text-white hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-3 group'
            >
              <FaRocket className="group-hover:scale-110 transition-transform duration-300" />
              <span>Start Project</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 justify-center lg:justify-start"
          >
            <motion.a
              href="https://github.com/AkmalAnfas"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-12 h-12 rounded-2xl bg-dark-400/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
            >
              <FaGithub size={20} />
            </motion.a>
            
            <motion.a
              href="http://linkedin.com/in/AkmalAnfas"
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-12 h-12 rounded-2xl bg-dark-400/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div 
          variants={itemVariants}
          className='lg:w-1/2 flex justify-center relative'
        >
          <div className='relative w-80 h-80 md:w-96 md:h-96'>
            {/* Outer Glow */}
            <motion.div
              variants={pulseGlowVariants}
              animate="animate"
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-600/30 blur-xl"
            />
            
            {/* Main Image Container */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-dark-400 p-2">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-full object-cover relative z-10"
                    src={assets.profileImg} 
                    alt="Akmal Anfas - Full Stack Developer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -top-4 -right-4 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-4 py-2"
            >
              <span className="text-blue-300 text-sm font-semibold">React.js</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-4 py-2"
            >
              <span className="text-purple-300 text-sm font-semibold">Springboot</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="absolute top-1/2 -right-12 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl px-4 py-2"
            >
              <span className="text-green-300 text-sm font-semibold">MongoDB</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <FaArrowDown className="text-lg" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero