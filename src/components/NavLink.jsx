const NavLink = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white font-light'
    >
      {label}
    </a>
  )
}

export default NavLink
