import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tech, code, demo, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.15
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -12,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='group relative'
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      <motion.div
        variants={hoverVariants}
        className='relative bg-dark-400/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 cursor-pointer h-full flex flex-col'
      >
        {/* Image Container */}
        <div className='relative overflow-hidden'>
          <motion.img 
            variants={imageVariants}
            src={image} 
            alt={title} 
            className='w-full h-48 md:h-56 object-cover'
          />
          {/* Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
          
          {/* Tech Stack Badge */}
          <div className='absolute top-4 left-4'>
            <span className='px-3 py-1 bg-dark-400/90 backdrop-blur-sm text-blue-300 text-xs font-medium rounded-full border border-blue-500/30'>
              {tech[0]}
            </span>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className='absolute bottom-4 right-4 flex gap-2'
          >
            {demo && (
              <motion.a 
                href={demo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 shadow-lg'
              >
                <FaExternalLinkAlt size={14} />
              </motion.a>
            )}
            <motion.a 
              href={code}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-10 h-10 bg-dark-400/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-300 border border-gray-700 transition-all duration-300 shadow-lg'
            >
              <FaGithub size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className='p-6 flex-1 flex flex-col'>
          <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300'>
            {title}
          </h3>
          
          <p className='text-gray-400 text-sm mb-6 leading-relaxed flex-1'>
            {description}
          </p>

          {/* Tech Stack */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {tech.map((item, techIndex) => (
              <motion.span 
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  borderColor: "rgba(59, 130, 246, 0.4)",
                }}
                className='px-3 py-1.5 bg-dark-300/80 text-blue-100 border border-gray-700 rounded-lg text-xs font-medium transition-all duration-300 backdrop-blur-sm'
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3 pt-4 border-t border-gray-800'>
            {demo && (
              <motion.a 
                href={demo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-white shadow-lg hover:shadow-xl'
              >
                <FaExternalLinkAlt size={12} />
                <span>Live Demo</span>
              </motion.a>
            )}
            <motion.a 
              href={code}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-dark-300 border border-gray-700 rounded-xl hover:bg-dark-200 hover:border-blue-500/30 transition-all duration-300 font-medium text-white'
            >
              <FaCode size={12} />
              <span>Source Code</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard