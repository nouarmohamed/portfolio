import { projects } from '../lib/constants'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='p-20'>
        <h1 className="text-center text-5xl font-bold mb-20">Things I’ve <span className='text-violet-500'>Built</span></h1>
        <div className="flex justify-center flex-wrap gap-10">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>       
    </section>
  )
}

export default Projects