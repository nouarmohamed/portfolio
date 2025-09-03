import { socialLinks } from "../lib/constants"

const Contact = () => {
  return (
    <footer
      id="contact"
      className="mt-20 bg-[#0f111a] border-t border-white/10 px-6 md:px-10 lg:px-20 py-10 sm:py-16 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Let’s <span className="text-violet-500">Connect</span>
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Have a project in mind, or just want to say hi?  
        Feel free to reach out anytime.
      </p>

      <a
        href="mailto:javascriptjourney1@gmail.com"
        className="inline-block bg-violet-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-violet-700 hover:scale-105 transition-all duration-300"
      >
        javascriptjourney1@gmail.com
      </a>

      <ul className="flex justify-center gap-5 mt-8">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <img
                src={link.icon}
                alt={link.name}
                className="w-8 h-8 hover:scale-110 hover:opacity-80 transition-all duration-200"
              />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Mohamed Nouar. All rights reserved.
      </p>
    </footer>
  )
}

export default Contact
