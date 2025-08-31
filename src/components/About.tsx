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
    <section id='about' className='p-20 grid grid-cols-6 gap-6 auto-rows-[220px]'>
      
      {/* بطاقة About Me */}
      <div className="col-span-4 row-span-2 bg-[#13162D] rounded-2xl p-8 flex flex-col justify-center shadow-lg hover:scale-[1.02] transition">
        <h2 className="text-3xl font-semibold mb-4">👨‍💻 About Me</h2>
        <p className="text-lg text-gray-300">
          I’m Mohamed Nouar, a Full-Stack Developer specialized in React & Next.js, 
          passionate about building scalable and elegant apps.
        </p>
      </div>

      {/* بطاقة Experience */}
      <div className="col-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 flex flex-col justify-center items-center shadow-lg hover:scale-[1.02] transition">
        <h2 className="text-4xl font-bold text-white">3+ Years</h2>
        <p className="text-lg text-white">Coding Experience</p>
      </div>

      {/* بطاقة Skills */}
      <div className="col-span-2 bg-[#13162D] rounded-2xl hover:pl-10 pt-8 pl-8 overflow-hidden">
        <p className='text-sm'>I constantly try to improve</p>
        <h2 className="text-3xl font-semibold mb-4">My tech stack</h2>
        <div className="grid grid-cols-5 gap-3 overflow-hidden">
          {techStack.map((tech) => (
            <img key={tech} src={`/tech/${tech}.png`} alt={tech} className="w-13" />
          ))}
        </div>
      </div>

      {/* بطاقة Copy Email */}
      <div className="col-span-2 bg-gradient-to-r from-violet-600 to-purple-500 rounded-2xl p-8 flex items-center justify-between shadow-lg hover:scale-[1.02] transition cursor-pointer">
        <button onClick={handleCopy} className="bg-white text-violet-700 p-1 rounded-lg font-semibold hover:bg-gray-100">
          <img
            src={copied ? "/copied.svg" : "/copy.svg"}
            alt="Copy Email"
            className="w-6"
          />
        </button>
        <p className="text-white text-xl">javascriptjourney1@gmail.com</p>
      </div>

      {/* بطاقة Location */}
      <div className="col-span-4 bg-[#13162D] rounded-2xl p-8 flex flex-col justify-center items-center shadow-lg hover:scale-[1.02] transition">
        <h2 className="text-2xl font-semibold mb-2">🌍 Location</h2>
        <p className="text-gray-300">Based in Algeria</p>
        <p className="text-gray-400 text-sm">Available for remote work</p>
      </div>
    </section>
  )
}

export default About
