import { socialLinks } from '../lib/constants'

const Hero = () => {
  return (
    <section id='hero' className='flex justify-between w-full min-h-screen bg-[url(/herobg.png)] bg-cover bg-center px-20 pt-40 pb-20'>
      <div className='flex flex-col gap-5 max-w-lg pt-10'>
        <span className="uppercase tracking-widest text-sm text-violet-400 font-semibold">
          Full-Stack Developer | React & Next.js Enthusiast
        </span>
        <h1 className='text-6xl font-semibold leading-tight'>Turning ideas into scalable, beautiful <span className='text-violet-500'>digital products</span></h1>
        <p>Hi, I’m Mohamed Nouar — a developer passionate about building apps that blend clean code with elegant design.</p>
        <ul className='flex gap-4'>
          {socialLinks.map(link => (
            <li key={link.name}>
              <a href={link.href}><img src={link.icon} alt={link.name} className='size-10 hover:size-12 hover:opacity-80 transition-all duration-200'/></a>
            </li>
          ))}
        </ul>
        <button className='w-56 bg-violet-700 text-white py-2 px-4 rounded-lg hover:bg-violet-700 hover:scale-105 transition-all duration-300 cursor-pointer mt-5'>View My Work</button>
      </div>
      <div>
        <img src="/stack-ulistation.png" alt="" className='w-130 opacity-70 hover:opacity-100 transition-all duration-300 rotate-[-20deg] hover:rotate-0'/>
      </div>

    </section>
  )
}

export default Hero