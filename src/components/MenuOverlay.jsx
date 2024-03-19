// MenuOverlay.jsx
import { navLinks } from '../data/constants.jsx'
import NavLink from './NavLink'
import { motion } from 'framer-motion'

const MenuOverlay = ({ closeNavbar }) => {
  // Ensure closeNavbar function is received as prop
  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.ul
      variants={listVariants}
      initial='closed'
      animate='opened'
      className={`flex flex-col  items-center top-0 overflow-y-auto bottom-0 py-24 pl-4 w-screen h-screen justify-center gap-8`}
    >
      {navLinks.map((item) => (
        <li key={item.label}>
          <NavLink
            href={item.href}
            label={item.label}
            onClick={() => closeNavbar()}
          />
        </li>
      ))}
    </motion.ul>
  )
}

export default MenuOverlay
