const SkillsCard = ({ data }) => {
  const { field, skills } = data
  return (
    <div className='border-purple-900 border-2 h-full w-full rounded-3xl text-center max-w-[500px]  p-6 flex-1 flex flex-col  gap-2 shadow-lg'>
      <h4 className='text-3xl font-semibold m-2 text-gray-200'>{field}</h4>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-6 '>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='flex rounded-xl border-[#ADB7BE] shadow-2xl gap-2 border-2 justify-center items-center text-[#ADB7BE] p-2 hover:border-white hover:text-white '
          >
            <img
              src={skill.image}
              alt=''
              className='h-8 w-8 text-white'
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard
