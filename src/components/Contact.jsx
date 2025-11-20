import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarked, FaMapMarkerAlt, FaPhone , FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
            initial={{opacity:0, y:50}} 
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease:'easeOut'}}
            viewport={{once:false, amount:0.2}}
            id="contact"
            className="py-20 bg-dark-200 "
            >

                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4 '> Get In
                        <span className='text-blue '> Touch</span>
                     </h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                        {/* Contact Form */}
                        <div>
                            <form className='space-y-6'>
                                <div>
                                    <label className='block text-gray-300 mb-2' htmlFor="name">Your Name</label>
                                    <input 
                                    className='w-full px-4 py-3 bg-dark-300 border-dark-400 rounded-lg outline-none ' 
                                    type="text" 
                                    placeholder="Enter your name" />
                                </div>

                                <div>
                                    <label className='block text-gray-300 mb-2' htmlFor="email">Your Email </label>
                                    <input 
                                    className='w-full px-4 py-3 bg-dark-300 border-dark-400 rounded-lg outline-none ' 
                                    type="email" 
                                    placeholder="Enter your mail" />
                                </div>

                                <div>
                                    <label className='block text-gray-300 mb-2' htmlFor="message">Message</label>
                                    <textarea 
                                    className='w-full h-40 px-4 py-3 bg-dark-300 border-dark-400 rounded-lg outline-none ' 
                                    type="text" 
                                    placeholder="Type Here..." />

                                    <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer  '> 
                                    Send Message
                                    </button>
                                </div>

                            </form>
                        </div>

                        {/* Contact Information */}

                        <div className='space-y-8'>
                            {/* Location */}
                            <div className='flex items-start'>
                                <div className='text-purple text-2xl mr-4'>
                                   <FaMapMarkerAlt/>
                                </div>
                                <div> 
                                    <h3 className='text-lg font-semibold mb-2 '>Location</h3>
                                    <p className='text-gray-400'>Colombo, Sri Lanka</p>
                                </div>
                            </div>
                           {/* Email */}
                            <div className='flex items-start'>
                                <div className='text-purple text-2xl mr-4'>
                                   <FaEnvelope/>
                                </div>
                                <div> 
                                    <h3 className='text-lg font-semibold mb-2 '>Email</h3>
                                    <p className='text-gray-400'>akmalanfas7@gmail.com</p>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className='flex items-start'>
                                <div className='text-purple text-2xl mr-4'>
                                   <FaPhone/>
                                </div>
                                <div> 
                                    <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
                                    <p className='text-gray-400'>+94774392108</p>
                                </div>
                            </div>
                            {/* GitHub */}
                              <div className='flex items-start'>
                                    <div className='text-purple-500 text-2xl mr-4'>
                                      <FaGithub />
                                     </div>
                                     <div> 
                                         <h3 className='text-lg font-semibold mb-2 text-white'>GitHub</h3>
                                         <a href="https://github.com/yourusername" className='text-gray-400 hover:text-blue-400 transition duration-300'>
                                             https://github.com/AkmalAnfas
                                         </a>
                                    </div>
                                </div>
                                {/* End */}

                                <div className='pt-4'>
                                    <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                                    <div className='flex space-x-4'>
                                        <a href="" className='w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 '>
                                            <FaGithub size={24} />
                                        </a>

                                         <a href="" className='w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300 '>
                                            <FaLinkedin size={24} />
                                        </a>

                                         <a href="" className='w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300 '>
                                            <FaInstagram size={24} />
                                        </a>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>

    </motion.div>
  )
}

export default Contact