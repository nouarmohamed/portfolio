import { navLinks } from '../lib/constants'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center bg-background fixed top-0 left-0 w-full px-20 py-5 z-10'>
      <a href="#hero">
        <h1 className='text-3xl font-black'>Mohamed<span className='text-violet-500'>Dev</span></h1>
      </a>
      <a>
        <ul className='flex gap-10'>
          {navLinks.map(link => (
            <li key={link.name}>
              <a className='hover:text-purple-400 transition-all duration-200' href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </a>
    </nav>
  )
}

export default NavBar