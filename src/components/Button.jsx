const Button = ({ children }) => {
  return (
    <button className='px-1 py-1 rounded-full   sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white  mt-3 '>
      <span className=' bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex items-center justify-center'>
        {children}
      </span>
    </button>
  )
}

export default Button
