import about from '../assets/images/about-image.png'
import { uniData } from '../data/constants'
import { MdPlayArrow } from 'react-icons/md'
const AboutSection = () => {
  return (
    <section
      className='text-white'
      id='about'
    >
      <div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <img
          src={about}
          alt='about'
          width={500}
          height={500}
        />
        <div className='mt-4 lg:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-col'>
            <div className='mt-5 flex'>
              <p className='md:text-xl text-lg font-bold border-b border-purple-500'>
                Education
              </p>
            </div>
            <div>
              {uniData.map((uni) => (
                <div
                  key={uni.uniName}
                  className='flex items-start mt-1'
                >
                  <MdPlayArrow className='mt-1 mr-2' />
                  <div>
                    <h3 className='md:text-lg text-md font-semibold'>
                      {uni.uniName}
                    </h3>
                    <p className='italic text-slate-300 text-md'>
                      {uni.uniContent}
                    </p>
                    <p className='text-slate-400 font-normal text-sm '>
                      {uni.uniTL}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
