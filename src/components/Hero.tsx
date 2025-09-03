import { socialLinks } from '../lib/constants'

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse lg:flex-row justify-between items-center w-full min-h-screen bg-[url(/herobg.png)] bg-cover bg-center px-6 md:px-10 lg:px-20 pt-28 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-20"
    >
      {/* Left side content */}
      <div className="flex flex-col gap-5 max-w-xl pt-6 text-center lg:text-left">
        <span className="uppercase tracking-widest text-xs md:text-sm text-violet-400 font-semibold">
          Full-Stack Developer | React & Next.js Enthusiast
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug md:leading-tight">
          Turning ideas into scalable, beautiful{" "}
          <span className="text-violet-500">digital products</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-300">
          Hi, I’m Mohamed Nouar — a developer passionate about building apps that blend clean code with elegant design.
        </p>

        {/* Social links */}
        <ul className="flex justify-center lg:justify-start gap-4">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 hover:opacity-80 transition-all duration-200"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button className="w-40 md:w-56 bg-violet-700 text-white py-2 px-4 rounded-lg hover:bg-violet-700 hover:scale-105 transition-all duration-300 cursor-pointer mt-5 mx-auto lg:mx-0">
          View My Work
        </button>
      </div>

      {/* Right side image */}
      <div className="flex justify-center lg:justify-end mb-10 lg:mb-0">
        <img
          src="/stack-ulistation.png"
          alt=""
          className="w-56 md:w-80 lg:w-[32rem] opacity-70 hover:opacity-100 transition-all duration-300 rotate-[-10deg] md:rotate-[-15deg] lg:rotate-[-20deg] hover:rotate-0"
        />
      </div>
    </section>
  )
}

export default Hero
