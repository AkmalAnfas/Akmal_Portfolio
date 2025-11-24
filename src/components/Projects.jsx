import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight, FaGithub, FaEye } from 'react-icons/fa'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reduced stagger for mobile
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.1 }} // Lower threshold for mobile
      id="projects"
      className="py-16 md:py-28 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-400 relative overflow-hidden min-h-screen" // Added min-h-screen
    >
      {/* Background Elements - Reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 md:-top-20 md:-right-20 md:w-60 md:h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 md:-bottom-20 md:-left-20 md:w-60 md:h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='container mx-auto px-4 md:px-6 relative z-10'> {/* Adjusted padding */}
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">PORTFOLIO SHOWCASE</span>
          </motion.div>
          
          <h2 className='text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            Featured 
            <span className='text-blue-400'> Projects</span>
          </h2>
          <p className='text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4'>
            A curated collection of my work, demonstrating innovative solutions and technical expertise in modern web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Very low threshold for mobile
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12 md:mb-16'
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.a 
            href='https://github.com/AkmalAnfas'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-white shadow-lg hover:shadow-xl group'
          >
            <FaGithub className="mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm md:text-base">Explore More Projects</span>
            <FaArrowRight className='ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300'/>
          </motion.a>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6"
          >
            Continuously building and learning
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects