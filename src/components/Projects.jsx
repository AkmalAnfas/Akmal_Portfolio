import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaR } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
    initial={{opacity:0, y:50}} 
    whileInView={{opacity:1, y:0}}
    transition={{duration:1, ease:'easeOut'}}
    viewport={{once:false, amount:0.2}}
    id="projects"
    className="py-20 bg-dark-200 "
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4 '>
                My 
                <span className='text-blue '> Projects</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>  A selection of my recent work showcasing my skills and expertise in web development.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/* Project Card */}
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project}/>
                    ))
                }
            </div>
            <div className='mt-12 text-center'>
                <a href='http://github.com/AkmalAnfas' className='inline-flex items-center px-6 py-3 border border-purple rounded-lg hover:bg-purple/20 transition font-medium duration-300 '>
                    <span>View More Project</span>
                    <FaArrowRight className='ml-2'/>
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default Projects