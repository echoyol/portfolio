import { IoLogoGithub } from 'react-icons/io'
import Button from './Button'

const ProjectCard = ({ imgUrl, title, description, githubUrl, previewUrl }) => {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      ></div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 flex flex-col justify-between'>
        <div className='flex-1'>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#ADB7BE]'>{description}</p>
        </div>

        <div className='flex justify-start gap-2'>
          <Button href={previewUrl}>Live demo</Button>

          <Button href={githubUrl}>
            <IoLogoGithub className='mr-1 text-lg' />
            <p>Github</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
