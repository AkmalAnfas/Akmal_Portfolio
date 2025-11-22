import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { FaCode, FaRocket, FaHeart, FaLightbulb } from 'react-icons/fa'

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      id='about'
      className='py-20 md:py-28 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-400 relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            <FaCode className="text-blue-400 text-sm" />
            <span className="text-blue-400 text-sm font-medium">MY STORY</span>
          </motion.div>
          
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            About 
            <span className='text-blue-400'> Me</span>
          </h2>
          <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Image Section */}
          <motion.div 
            variants={imageVariants}
            className='lg:w-1/2 relative'
          >
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Main Image */}
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className='relative w-full h-auto rounded-2xl shadow-2xl border-4 border-dark-400'
                src={assets.profileImg} 
                alt="Profile" 
              />
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <FaRocket className="text-sm" />
                  <span className="text-sm font-semibold">Full-Stack Developer</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <FaLightbulb className="text-sm" />
                  <span className="text-sm font-semibold">Problem Solver</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            className='lg:w-1/2'
          >
            <motion.div 
              variants={itemVariants}
              className='bg-dark-400/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl'
            >
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <h3 className='text-2xl md:text-3xl font-bold mb-6 text-white'>
                  My <span className="text-blue-400">Development</span> Journey
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
                
                <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                  I started with zero knowledge about IT, but quickly adapted and discovered a strong passion for building software. I'm an enthusiastic full-stack developer who loves turning ideas into functional and user-friendly digital products.
                </p>
                
                <p className='text-gray-300 text-lg leading-relaxed mb-8'>
                  Over time, I have grown into creating modern web and mobile applications, always eager to learn, improve, and take on real-world challenges that help me become a better developer. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials.
                </p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                variants={containerVariants}
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
              >
                {aboutInfo.map((data, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                    className='group relative'
                  >
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    <motion.div
                      variants={cardHoverVariants}
                      className='relative bg-dark-300/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 cursor-pointer h-full'
                    >
                      <div className='flex items-start mb-4'>
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                          className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg'
                        >
                          <data.icon className='text-white text-lg'/>
                        </motion.div>
                        <div>
                          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'>
                            {data.title}
                          </h3>
                          <p className='text-gray-400 text-sm leading-relaxed'>
                            {data.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 pt-6 border-t border-gray-800"
              >
                <div className="flex items-center gap-3 text-gray-400">
                  <FaHeart className="text-red-400 animate-pulse" />
                  <span className="text-sm">Passionate about creating impactful digital solutions</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About