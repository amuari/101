import React from 'react'
import { FaSortDown } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex justify-between   '>
      <nav className='justify-between'>
        <ul className='flex justify-between  space-x-5  '>
          <li className=' flex'>
            Products <FaSortDown className='my-1 mx-1' />
          </li>
          <li>Pricing</li>
          <li className='flex'>
            Use cases <FaSortDown className='my-1 mx-1' />
          </li>
          <li>Blog</li>
        </ul>
      </nav>
      <nav className='flex justify-between space-x-5'>
        <span className='border-2 rounded-3xl px-5'>Login</span>
        <span className='border-2 rounded-3xl px-5 bg-slate-900 text-white'>
          Get started
        </span>
      </nav>
    </nav>
  )
}

export default Navbar
