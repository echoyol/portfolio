import { useState } from 'react'
import NavLink from '../components/NavLink'
import { navLinks } from '../data/constants.jsx'
import { HiOutlineXMark } from 'react-icons/hi2'
import { FiMenu } from 'react-icons/fi'
import MenuOverlay from '../components/MenuOverlay'
import { IoLogoGithub } from 'react-icons/io'
import { MdLanguage } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { MdOutlineLightMode } from 'react-icons/md'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeNavbar = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 first-line:file:'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-5 py-2'>
        <a
          href='/'
          className='text-4xl md:text-5xl text-white font-Racing font-bold'
        >
          YANYU
        </a>

        <div className='mobile-menu block md:hidden'>
          {navbarOpen ? (
            <button
              onClick={toggleNavbar}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <HiOutlineXMark />
            </button>
          ) : (
            <button
              onClick={toggleNavbar}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <FiMenu />
            </button>
          )}
        </div>
        <div
          className='menu md:block hidden md:w-auto justify-center items-center mx-auto'
          id='navbar'
        >
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  label={item.label}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex gap-5 text-white text-2xl mr-4 max-md:hidden'>
          <a href='https://github.com/echoyol'>
            <IoLogoGithub />
          </a>
          <a href='https://www.linkedin.com/in/yanyu-sun-b39b63221/'>
            <FaLinkedin />
          </a>
          {/* <MdLanguage />
          <MdOutlineLightMode className='font-weight-600 font-bold' /> */}
        </div>
      </div>

      {navbarOpen && <MenuOverlay closeNavbar={closeNavbar} />}
    </nav>
  )
}

export default Navbar
