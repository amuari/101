import React from 'react'
import Jas from '../assets/jas.jpg'
import Alfie from '../assets/alfie.jpeg'

const Section = () => {
  return (
    <div className='w-1/2'>
      <section>
        <h1 className='text-left text-3xl font-bold py-3'>Productivity</h1>
        <img
          src={Jas}
          alt=''
          className='w-3/4 h-1/2 bg-contain bg-center object-cover '
        />
      </section>
      <p className='text-left text-3xl font-bold my-5'>
        Little Things Do Make A
        <br />
        Difference
      </p>
      <p className='text-left font-light'>
        Why do you want to motivate yourself ? Actually,justify
        <br />
        answering that question fully can be one of the better ways
        <br />
        to get motivation
      </p>
      <div className='flex space-x-2 mt-8'>
        <img
          src={Alfie}
          alt=''
          className='rounded-full rounded-t-full'
          width='50px'
          height='140px'
        />
        <span> Alfie Solomon</span>
      </div>
    </div>
  )
}

export default Section
