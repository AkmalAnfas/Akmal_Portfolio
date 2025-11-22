import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleNavClick = () => {
        setShowMenu(false);
    };

    // Navigation items
    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" }
    ];

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        open: {
            opacity: 1,
            height: "100vh",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed w-full z-50 py-4 px-6 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-dark-400/95 backdrop-blur-xl shadow-2xl border-b border-gray-800' 
                    : 'bg-transparent'
            }`}
        >
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                >
                    <a href="#home" className='flex items-center gap-3'>
                        <div className="relative">
                            <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                                <span className='text-white font-bold text-lg'>A</span>
                            </div>
                            <div className='absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-dark-400'></div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl font-bold text-white leading-5'>Akmal</span>
                            <span className='text-purple-400 font-semibold text-sm leading-4'>Anfas</span>
                        </div>
                    </a>
                </motion.div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-8'> 
                    {navItems.map((item, index) => (
                        <motion.a 
                            key={item.href}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                            href={item.href}
                            className='relative text-white/80 transition duration-300 hover:text-purple-400 group py-2'
                        >
                            <span className='font-medium'>{item.label}</span>
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full'> </span>
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.div 
                    whileTap={{ scale: 0.9 }}
                    className='md:hidden z-60'
                >
                    {showMenu ? (
                        <FaXmark 
                            onClick={() => setShowMenu(false)} 
                            className='text-2xl cursor-pointer text-white hover:text-purple-400 transition-colors duration-300'
                        />
                    ) : (
                        <FaBars 
                            onClick={() => setShowMenu(true)} 
                            className='text-2xl cursor-pointer text-white hover:text-purple-400 transition-colors duration-300'
                        />
                    )}
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {showMenu && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className='md:hidden absolute top-full left-0 w-full bg-dark-400/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden'
                    >
                        <div className='container mx-auto px-6 py-8'>
                            <div className='flex flex-col space-y-6'>
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        onClick={handleNavClick}
                                        href={item.href}
                                        className='text-xl text-white/80 font-medium py-4 px-4 rounded-2xl hover:bg-dark-300 hover:text-purple-400 transition-all duration-300 border-l-4 border-transparent hover:border-purple-500'
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Mobile Menu Footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-12 pt-8 border-t border-gray-800"
                            >
                                <div className="text-center text-gray-400 text-sm">
                                    <p>Let's build something amazing together</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;