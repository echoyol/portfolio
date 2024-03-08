import { IoLogoGithub } from 'react-icons/io'
import Button from './Button'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      ></div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>

        <div className='flex justify-start gap-2'>
          <Button>Live demo</Button>

          <Button>
            <IoLogoGithub className='mr-1 text-lg' />
            <p>Github</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
