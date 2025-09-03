import React, { useState } from 'react'
import { techStack } from '../lib/constants'

const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "javascriptjourney1@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // يرجع الأيقونة الأصلية بعد ثانيتين
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <section id='about' className='p-5 sm:p-20 grid grid-cols-6 gap-10 auto-rows-[220px]'>
      
      {/* بطاقة About Me */}
      <div className="col-span-6 sm:col-span-4 relative row-span-1 sm:row-span-2 border border-[#2c3646] rounded-2xl flex flex-col justify-center shadow-lg hover:scale-[1.02] transition duration-200">
        <img src="/labtop.png" alt="" className='ablolute top-0 left-0 size-full rounded-2xl'/>
        <div className='absolute max-w-[30%] right-2 top-10'>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className=" text-gray-300">
            I’m Mohamed Nouar, a Full-Stack Developer specialized in React & Next.js, 
            passionate about building scalable and elegant apps.
          </p>
        </div>
      </div>

      {/* بطاقة Skills */}
      <div className="border border-[#2c3646] col-span-6 sm:col-span-2 rounded-2xl pt-8 pl-8 overflow-hidden hover:scale-[1.02] transition duration-200">
        <p className='text-sm'>I constantly try to improve</p>
        <h2 className="text-3xl font-semibold mb-4">My tech stack</h2>
        <div className="grid grid-cols-5 gap-3 overflow-hidden">
          {techStack.map((tech) => (
            <img key={tech} src={`/tech/${tech}.png`} alt={tech} className="w-13" />
          ))}
        </div>
      </div>

      {/* بطاقة Experience */}
      <div className="border border-[#2c3646] relative col-span-6 sm:col-span-2 rounded-2xl flex flex-col justify-center items-center shadow-lg hover:scale-[1.02] transition">
        <img src="/location.png" alt="" className='ablolute top-0 left-0 size-full rounded-2xl'/>
        <div className='absolute max-w-2/3 left-4 bottom-2'>
          <h2 className='text-2xl font-semibold'>I'm very flexible with time zone communications</h2>
        </div>
      </div>

      {/* بطاقة Copy Email */}
      <div className="relative border border-[#2c3646] col-span-6 sm:col-span-2 rounded-2xl p-8 flex items-center justify-between shadow-lg hover:scale-[1.02] transition duration-200 cursor-pointer">

        <img src="/keyboard.png" alt="" className='absolute top-0 left-0 size-full rounded-2xl'/>
      </div>

      {/* بطاقة Location */}
      <div className="relative col-span-6 sm:col-span-4 row-span-1 sm:row-span-2 border border-[#2c3646] rounded-2xl flex flex-col justify-center items-center shadow-lg hover:scale-[1.02] transition">
        <img src="/code1.png" alt="" className='absolute top-0 left-0 size-full rounded-2xl'/>
        {/* <h2 className="text-2xl font-semibold mb-2">🌍 Location</h2>
        <p className="text-gray-300">Based in Algeria</p>
        <p className="text-gray-400 text-sm">Available for remote work</p> */}
      </div>
      
      {/* بطاقة Copy Email */}
      <div className="col-span-6 sm:col-span-2 bg-[url('/email-bg.png')] bg-cover border border-[#2c3646] rounded-2xl p-8 flex items-center justify-between shadow-lg hover:scale-[1.02] transition cursor-pointer">
        <button onClick={handleCopy} className="bg-white text-violet-700 p-1 rounded-lg font-semibold hover:bg-gray-100">
          <img
            src={copied ? "/copied.svg" : "/copy.svg"}
            alt="Copy Email"
            className="w-6"
          />
        </button>
        <p className="text-white text-xl">javascriptjourney1@gmail.com</p>
      </div>
    </section>
  )
}

export default About
