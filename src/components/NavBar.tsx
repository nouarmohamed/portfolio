import { useState } from 'react'
import { navLinks } from '../lib/constants'
import { Menu, X } from 'lucide-react'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center bg-blue-900 fixed top-0 left-0 w-full px-6 md:px-10 lg:px-20 py-4 md:py-5 z-10">
      <a href="#hero" className='flex items-center gap-3'>
        <img src="/logo.png" alt="Logo" className='w-8 sm:w-12' />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black">
          Mohamed<span className="text-violet-500">Dev</span>
        </h1>
      </a>

      <ul className="hidden md:flex gap-6 lg:gap-10 text-sm md:text-base">
        {navLinks.map(link => (
          <li key={link.name}>
            <a
              className="hover:text-purple-400 transition-all duration-200"
              href={link.href}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-900 border-t border-white/10 md:hidden">
          <ul className="flex flex-col gap-4 p-6 text-sm">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  className="block hover:text-purple-400 transition-all duration-200"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar
