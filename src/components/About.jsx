import React from 'react'
import { motion }  from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}} 
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    viewport={{once:true}}
    id='about'
    className='py-20 bg-dark-200'>
        <div className='container mx-0 px-6'>
            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About
                <span className='text-blue-500'> Me</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Discover More About Me</p>
            {/* Content */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* image */}
                <div className='md:w-1/2 rounded-2xl overflow-hidden '> 
                    <motion.img 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.9, ease:'easeOut'}}
                    viewport={{once: false, amount:0.2}}
                    className='w-full h-full object-cover'    
                    src={assets.profileImg} alt="Profile"/>
                </div>
                {/* text */}
                <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease:'easeOut'}}
                viewport={{once: false, amount:0.2}}
                className='md:w-1/2'>

                    <div className='rounded-2xl p-8'>
                        <h3 className='text-2xl font-semibold mb-6 '>My Journey</h3>
                        <p className='text-gray-300 mb-6 '>I started with zero knowledge about IT, but quickly adapted and discovered a strong passion for building software. I’m an enthusiastic full-stack developer who loves turning ideas into functional and user-friendly digital products. Over time, I have grown into creating modern web and mobile applications, always eager to learn, improve, and take on real-world challenges that help me become a better developer.</p>
                        <p className='text-gray-300 mb-12 '>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.</p>

                        {/* Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data, index) => (
                                    <div key={index} className='bg-dark-300 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 hover:-translate-y-2cursor-pointer'> 
                                        <div className='text-purple text-4xl mb-4'> 
                                            <data.icon/>
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                        <p className='text-gray-400'>{data.description}</p>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}
export default About
