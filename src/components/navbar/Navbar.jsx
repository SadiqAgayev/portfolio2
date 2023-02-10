import React from 'react'
import { logo } from '../../assets'
import { navLinksData } from '../../constants'

const Navbar = () => {
  return (
    <div className='w-full sticky top-0 z-50 h-24 bg-black flex justify-between items-center font-titleFont border-b-[1px] border-b-white'>
        <div className='h-[100%] flex items-center'>
            <img src={logo} alt="logo" className='h-[60px] w-[60px] rounded-[50%]' />
            <span className='pl-3'>Agayev</span>
        </div>
        <div>
            <ul className='flex gap-10'>
                {navLinksData.map(navLink => (
                    <li
                     className='font-normal tracking-wide cursor-pointer hover:text-red-700 duration-300'
                    key={navLink.id}>
                        {navLink.title}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar