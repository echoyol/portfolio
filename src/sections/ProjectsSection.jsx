import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/constants'

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-[70px] mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
