import { motion } from 'framer-motion'
import EducationItem from '../components/EducationItem'
import { uniData } from '../data/constants'

const EducationSection = () => {
  return (
    <div className='flex flex-col gap-12 justify-center  pb-48 '>
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: '-300px' }}
        animate={{ x: '0' }}
        transition={{ delay: 0.2 }}
        className='font-bold text-4xl text-white text-center mt-5'
      >
        Education
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: '-300px' }}
        animate={{ x: '0' }}
        className=''
      >
        <EducationItem
          uniData={uniData[0]}
          direction='right'
        />
        <EducationItem
          uniData={uniData[1]}
          direction='left'
        />
      </motion.div>
    </div>
  )
}

export default EducationSection
