import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

const Work = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 md:py-28 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-400 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <FaBriefcase className="text-blue-400 text-sm" />
            <span className="text-blue-400 text-sm font-medium">PROFESSIONAL JOURNEY</span>
          </motion.div>
          
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            Work 
            <span className='text-blue-400'> Experience</span>
          </h2>
          <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            My professional growth and career milestones in the tech industry
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            <div className='space-y-12'>
              {workData.map((data, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`relative group ${
                    index % 2 === 0 
                      ? 'md:pr-8 md:pl-0 md:text-right' 
                      : 'md:pl-8 md:pr-0 md:text-left'
                  } pl-20 md:pl-0`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    whileHover={{ scale: 1.3 }}
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-dark-400 z-10 group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300 ${
                      index % 2 === 0 ? 'md:left-1/2' : 'md:left-1/2'
                    }`}
                  />

                  {/* Content Card */}
                  <motion.div
                    variants={hoverVariants}
                    className={`bg-dark-400/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 cursor-pointer ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    {/* Duration Badge */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 ${
                        index % 2 === 0 ? 'md:float-right' : 'md:float-left'
                      }`}
                    >
                      <FaCalendarAlt className="text-blue-400 text-xs" />
                      <span className="text-blue-400 text-sm font-medium">{data.duration}</span>
                    </motion.div>

                    <div className="clear-both">
                      {/* Role and Company */}
                      <div className="mb-4">
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'>
                          {data.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 mb-3">
                          <FaMapMarkerAlt className="text-purple-400" />
                          <span className="text-lg font-medium text-purple-300">{data.company}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        className='text-gray-300 text-lg leading-relaxed mb-6'
                      >
                        {data.description}
                      </motion.p>

                      {/* Skills/Technologies */}
                      {data.skills && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                          className="flex flex-wrap gap-2 mb-4"
                        >
                          {data.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-medium hover:bg-blue-500/20 transition-all duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}

                      {/* Achievements */}
                      {data.achievements && (
                        <motion.ul 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                          className="space-y-2"
                        >
                          {data.achievements.map((achievement, achievementIndex) => (
                            <motion.li 
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + achievementIndex * 0.1 + 1 }}
                              className="flex items-start gap-3 text-gray-400 text-sm"
                            >
                              <FaArrowRight className="text-blue-400 mt-1 flex-shrink-0" size={12} />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </motion.div>

                  {/* Connecting Line */}
                  {index < workData.length - 1 && (
                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-full w-1 h-12 bg-gradient-to-b from-purple-600 to-blue-500 ${
                      index % 2 === 0 ? 'md:left-1/2' : 'md:left-1/2'
                    }`}></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 text-gray-500 mb-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <span className="text-sm font-medium">CONTINUOUS GROWTH</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Always seeking new challenges and opportunities to expand my expertise
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Work