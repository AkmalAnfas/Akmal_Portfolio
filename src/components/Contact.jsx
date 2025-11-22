import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-gradient-to-br from-dark-200 to-dark-300"
    >
      <div className='container mx-auto px-6'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            Let's Work <span className='text-blue-400'>Together</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed'>
            Ready to bring your ideas to life? I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <h3 className='text-2xl font-semibold mb-6 text-white'>Send me a message</h3>
              <form className='space-y-6'>
                <div>
                  <label className='block text-gray-300 mb-3 font-medium' htmlFor="name">Your Name</label>
                  <input 
                    className='w-full px-4 py-3 bg-dark-400/50 border border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500' 
                    type="text" 
                    placeholder="What should I call you?" 
                  />
                </div>

                <div>
                  <label className='block text-gray-300 mb-3 font-medium' htmlFor="email">Your Email</label>
                  <input 
                    className='w-full px-4 py-3 bg-dark-400/50 border border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500' 
                    type="email" 
                    placeholder="your.email@example.com" 
                  />
                </div>

                <div>
                  <label className='block text-gray-300 mb-3 font-medium' htmlFor="message">Your Message</label>
                  <textarea 
                    className='w-full h-32 px-4 py-3 bg-dark-400/50 border border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 resize-none' 
                    placeholder="Tell me about your project..." 
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit' 
                  className='w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group'
                > 
                  <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='space-y-8'
          >
            {/* Contact Info Cards */}
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <h3 className='text-2xl font-semibold mb-6 text-white'>Get in touch</h3>
              
              {/* Location */}
              <motion.div 
                whileHover={{ x: 5 }}
                className='flex items-start mb-6 p-4 rounded-lg hover:bg-dark-400/30 transition-all duration-300'
              >
                <div className='text-blue-400 text-xl mr-4 mt-1'>
                  <FaMapMarkerAlt/>
                </div>
                <div> 
                  <h3 className='text-lg font-semibold mb-2 text-white'>Location</h3>
                  <p className='text-gray-400'>Colombo, Sri Lanka</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ x: 5 }}
                className='flex items-start mb-6 p-4 rounded-lg hover:bg-dark-400/30 transition-all duration-300'
              >
                <div className='text-blue-400 text-xl mr-4 mt-1'>
                  <FaEnvelope/>
                </div>
                <div> 
                  <h3 className='text-lg font-semibold mb-2 text-white'>Email</h3>
                  <a href="mailto:akmalanfas7@gmail.com" className='text-gray-400 hover:text-blue-400 transition duration-300'>
                    akmalanfas7@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                whileHover={{ x: 5 }}
                className='flex items-start mb-6 p-4 rounded-lg hover:bg-dark-400/30 transition-all duration-300'
              >
                <div className='text-blue-400 text-xl mr-4 mt-1'>
                  <FaPhone/>
                </div>
                <div> 
                  <h3 className='text-lg font-semibold mb-2 text-white'>Phone</h3>
                  <a href="tel:+94774392108" className='text-gray-400 hover:text-blue-400 transition duration-300'>
                    +94 77 439 2108
                  </a>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div 
                whileHover={{ x: 5 }}
                className='flex items-start p-4 rounded-lg hover:bg-dark-400/30 transition-all duration-300'
              >
                <div className='text-blue-400 text-xl mr-4 mt-1'>
                  <FaGithub />
                </div>
                <div> 
                  <h3 className='text-lg font-semibold mb-2 text-white'>GitHub</h3>
                  <a href="https://github.com/AkmalAnfas" className='text-gray-400 hover:text-blue-400 transition duration-300'>
                    github.com/AkmalAnfas
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <h3 className='text-2xl font-semibold mb-6 text-white'>Follow my journey</h3>
              <div className='flex space-x-4 justify-center'>
                <motion.a 
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://github.com/AkmalAnfas" 
                  className='w-14 h-14 rounded-2xl bg-dark-400 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700'
                >
                  <FaGithub size={20} />
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="http://linkedin.com/in/AkmalAnfas" 
                  className='w-14 h-14 rounded-2xl bg-dark-400 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700'
                >
                  <FaLinkedin size={20} />
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="#" 
                  className='w-14 h-14 rounded-2xl bg-dark-400 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700'
                >
                  <FaInstagram size={20} />
                </motion.a>
              </div>
              <p className='text-gray-400 text-center mt-4 text-sm'>
                Let's connect and create something amazing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact