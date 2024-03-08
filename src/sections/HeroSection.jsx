import avatar from '../assets/images/hero-image.png'
import { TypeAnimation } from 'react-type-animation'
import Button from '../components/Button'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Yanyu Sun',
                1000,
                'Frontend Developer',
                1000,
                'FullStack Developer',
                1000,
              ]}
              wrapper='span'
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 '>
            As a frontend developer, I am passionate about creating beautiful
            and functional websites. I am always looking for new challenges and
            ways to improve my skills.
          </p>
          <div>
            <Button>Download CV</Button>
          </div>
        </div>
        <div className='col-span-5 place-self-center max-lg:mt-4 '>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <img
              src={avatar}
              alt='avatar'
              width={300}
              height={300}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
