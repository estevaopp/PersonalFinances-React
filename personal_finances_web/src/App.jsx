import React from 'react'
import styles from './style'
import { menu, close, logo } from './assets'
import { navLinks } from './constants'
import { HiMenuAlt3 } from 'react-icons/hi'

const App = () => (

  <section className='flex gap-6'>
    <div className="bg-[#0e0e0e] min-h-screen w-72 text-gray-100 px-4">
      <div className="py-3 flex justify-end">
        <HiMenuAlt3 size={30} className="cursor-pointer"></HiMenuAlt3>
      </div>
      <div className='mt-4 flex flex-col gap-4 relative'>
        {
          navLinks.map((nav, index) => (
            <a id={nav.id} to={"/"}>
              <h2>{nav.title}</h2>
            </a>
          ))
        }
      </div>
    </div>
    <div>

    </div>
  </section>

)


export default App