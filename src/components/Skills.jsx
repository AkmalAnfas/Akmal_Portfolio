import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      id="skills"
      className="py-16 md:py-20 bg-dark-100"
    >
      <div className='container mx-auto px-4 sm:px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className='text-2xl md:text-3xl font-bold mb-3 text-white'> 
            My <span className='text-blue-500'>Skills</span>
          </h2>
          <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto'>
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className='group'
            >
              <motion.div
                variants={cardHoverVariants}
                className='bg-dark-300 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer h-full'
              >
                {/* Icon and Title */}
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300'>
                    <skill.icon className='w-6 h-6 text-white'/>
                  </div>
                  <h3 className='text-lg md:text-xl font-semibold text-white'>{skill.title}</h3>
                </div>

                {/* Description */}
                <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                  {skill.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'> 
                  {skill.tags.map((tech, techIndex) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className='px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-medium hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-200'
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills