import React, { useState } from 'react'
import { menu, close, logo } from '../assets'
import { navLinks } from '../constants'
import { HiMenuAlt3 } from 'react-icons/hi'


export default function Sidebar() {

  
  const [toggle, setToggle] = useState(false)

  return (
    <section className='flex gap-6'>
      <div className={`bg-[#0e0e0e] min-h-screen ${toggle ? "w-72" : "w-16" } text-gray-100 px-4`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3 size={30} className="cursor-pointer" onClick={() => setToggle((prev) => !prev)}></HiMenuAlt3>
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {
            navLinks.map((nav, index) => (
              <a key={nav.id} id={nav.id} href={nav.link} className='group flex items-center text-md gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'>
                <div>{React.createElement(nav.icon, { size: 20 })}</div>
                <h2
                  style={{transitionDelay: toggle ? `${index + 3}00ms` : ``}} 
                  className={`whitespace-pre duration-500 ${!toggle && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                    {nav.title}
                  </h2>

              </a>
            ))
          }
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}
