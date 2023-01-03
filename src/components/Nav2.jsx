import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Nav2 = () => {
  return (
    <nav className='flex justify-between flex-row'>
      <ul className='flex space-x-8'>
        <li>Project</li>
        <li>Remote</li>
        <li>Teamwork</li>
        <li>Productivity</li>
        <li>Marketing</li>
      </ul>
      <span>
        <FaSearch />
      </span>
    </nav>
  )
}

export default Nav2
