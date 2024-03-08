import { skillsData } from '../data/constants'
import SkillsCard from '../components/SkillsCard'

const SkillsSection = () => {
  return (
    <section
      className='flex flex-col mb-8 justify-center'
      id='skills'
    >
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        Skills
      </h2>
      <div className='flex max-md:flex-col   gap-7  justify-between  '>
        {skillsData.map((item) => (
          <div
            key={item.field}
            className='flex-1 flex justify-center '
          >
            <SkillsCard data={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
