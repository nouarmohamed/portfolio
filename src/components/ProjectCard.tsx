
const ProjectCard = ({ title, description, tech, image, href }) => {
  return (
    <div className="border border-blue-500 rounded-2xl shadow-md p-7 w-130 cursor-pointer">
      <img src={image} alt={title} className="w-full object-cover rounded-2xl" />
      <div className="min-sm:px-4 py-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-base sm:text-lg">{description}</p>
        <div className='flex justify-between items-center mt-5 sm:mt-10'>
            <div className="flex">
                {tech.map((item) => (
                    <div key={item} className="w-9 sm:w-11 -ml-2 p-2 rounded-full border bg-blue-700">
                      <img src={`/tech/${item}.png`} alt={item} className='w-full object-center'/>
                    </div>
                ))}
            </div>
            <a href={href} className="text-violet-400 min-sm:text-xl">View Project</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard