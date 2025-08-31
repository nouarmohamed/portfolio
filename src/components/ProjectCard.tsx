import React from 'react'

const ProjectCard = ({ title, description, tech, image, href }) => {
  return (
    <div className="border border-[#13162D] rounded-2xl shadow-md p-7 w-130 cursor-pointer">
      <img src={image} alt={title} className="w-full object-cover rounded-2xl" />
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-lg">{description}</p>
        <div className='flex justify-between items-center mt-10'>
            <div className="flex">
                {tech.map((item) => (
                    <div key={item} className="w-11 -ml-2 p-2 rounded-full border bg-[#13162D]">
                    <img src={`/tech/${item}.png`} alt={item} className='w-full object-center'/>
                    </div>
                ))}
            </div>
            <a href={href} className="text-violet-400 text-xl">View Project</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard