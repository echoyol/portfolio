import { motion } from 'framer-motion'

const Education = () => {
  return (
    <div className='flex flex-col gap-12 justify-center pb-48'>
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: '-300px' }}
        animate={{ x: '0' }}
        transition={{ delay: 0.2 }}
        className='font-bold text-2xl'
      >
        EXPERIENCE
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: '-300px' }}
        animate={{ x: '0' }}
        className=''
      >
        {/* EXPERIENCE LIST ITEM 1 */}
        <div className='flex justify-between h-48'>
          <div className='w-1/3'>
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
              Senior JavaScript Engineer
            </div>
            <div className='p-3 text-sm italic'>
              I led web development, offering expertise in JavaScript
              frameworks.
            </div>
            <div className='p-3 text-red-400 text-sm font-semibold'>
              2024 - Present
            </div>
            <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
              Apple
            </div>
          </div>
          <div className='w-1/6 flex justify-center'>
            <div className='w-1 h-full bg-gray-600 rounded relative'>
              <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
            </div>
          </div>
          <div className='w-1/3'></div>
        </div>
        {/* EXPERIENCE LIST ITEM 2 */}
        <div className='flex justify-between h-48'>
          <div className='w-1/3'></div>
          <div className='w-1/6 flex justify-center'>
            <div className='w-1 h-full bg-gray-600 rounded relative'>
              <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
              Senior React Developer
            </div>
            <div className='p-3 text-sm italic'>
              I spearheaded React-based application development, leveraging
              advanced skills.
            </div>
            <div className='p-3 text-red-400 text-sm font-semibold'>
              2019 - 2024
            </div>
            <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
              Microsoft
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Education
