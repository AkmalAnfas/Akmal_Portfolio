import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  }

  const iconHoverVariants = {
    hover: {
      rotate: [0, -5, 5, 0],
      scale: 1.15,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      id="skills"
      className="py-20 md:py-28 bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full inline-block mx-2"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full inline-block mx-2"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full inline-block mx-2"></div>
          </motion.div>
          
          <h2 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'> 
            Technical <span className='text-blue-400'>Expertise</span>
          </h2>
          <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            A comprehensive toolkit of technologies and frameworks I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className='group relative'
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <motion.div
                variants={cardHoverVariants}
                className='relative bg-dark-400/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 cursor-pointer h-full flex flex-col'
              >
                {/* Icon and Title */}
                <div className='flex items-start mb-6'>
                  <motion.div
                    variants={iconHoverVariants}
                    className='w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300'
                  >
                    <skill.icon className='w-7 h-7 text-white'/>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'>{skill.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-400 text-sm md:text-base mb-6 leading-relaxed flex-1'>
                  {skill.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-3'> 
                  {skill.tags.map((tech, techIndex) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + techIndex * 0.08,
                        ease: "backOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "rgba(59, 130, 246, 0.5)",
                        transition: { duration: 0.2 }
                      }}
                      className='px-4 py-2 bg-dark-300/80 text-blue-100 border border-gray-700 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md'
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Progress Indicator */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="w-full h-1 bg-gray-800 rounded-full mt-6 overflow-hidden"
                >
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ 
                      width: `${80 + (index % 3) * 10}%`,
                      transition: 'width 0.8s ease-out'
                    }}
                  ></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 text-gray-500 mb-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm font-medium">CONTINUOUS GROWTH</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Committed to mastering emerging technologies and adapting to the ever-evolving landscape of software development
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills