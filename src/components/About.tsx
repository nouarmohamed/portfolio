import { useState } from 'react'
import { techStack } from '../lib/constants'

const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "javascriptjourney1@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <section id='about' className='p-5 sm:p-20 grid grid-cols-6 gap-10 auto-rows-[220px]'>
      
      <div className="col-span-6 sm:col-span-4 row-span-1 sm:row-span-2 bento-card-wrapper">
        <img src="/labtop.png" alt="Labtop" className='bento-card-img'/>
        <div className='absolute max-w-[40%] right-2 top-2 sm:top-10'>
          <h2 className="bento-card-header">About Me</h2>
          <p className="bento-card-description">
            I’m Mohamed, a Full-Stack Developer specializing in React & Next.js, based in Algeria.
          </p>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2 pt-8 pl-8 overflow-hidden bento-card-wrapper">
        <p className='text-sm'>I constantly try to improve</p>
        <h2 className="text-3xl font-semibold mb-4">My tech stack</h2>
        <div className="grid grid-cols-5 gap-3 overflow-hidden">
          {techStack.map((tech) => (
            <img key={tech} src={`/tech/${tech}.png`} alt={tech} className="w-13" />
          ))}
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2 bento-card-wrapper">
        <img src="/location.png" alt="" className='bento-card-img'/>
        <div className='absolute max-w-2/3 left-4 bottom-2'>
          <h2 className='bento-card-header'>I'm very flexible with time zone communications</h2>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-2 bento-card-wrapper">
        <img src="/keyboard.png" alt="" className='bento-card-img'/>
        <div className='absolute z-10 left-4 top-4 sm:top-10 max-w-1/2'>
          <h2 className="bento-card-header">Beyond Code</h2>
          <p className="bento-card-description">When I’m not coding, I enjoy chess, anime, and exploring creative ideas.</p>
        </div>
      </div>

      <div className="col-span-6 sm:col-span-4 row-span-1 sm:row-span-2 bento-card-wrapper">
        <img src="/code1.png" alt="" className='bento-card-img'/>
        <div className='absolute z-10 left-4 top-4 sm:top-10 max-w-1/2'>
          <h2 className="bento-card-header">What I’m Working On</h2>
          <p className="bento-card-description">I’m currently working on Animo Code — an interactive platform that makes coding more engaging and creative.</p>
        </div>
      </div>
      
      <div className="col-span-6 sm:col-span-2 flex items-center justify-center gap-2 bg-[url('/email-bg.png')] bg-cover bento-card-wrapper">
        <button onClick={handleCopy} className="bg-white text-violet-700 p-1 rounded-lg font-semibold hover:bg-gray-100">
          <img
            src={copied ? "/copied.svg" : "/copy.svg"}
            alt="Copy Email"
            className="w-6"
          />
        </button>
        <h2 className="text-white text-xl">Copy my email</h2>
      </div>
    </section>
  )
}

export default About
