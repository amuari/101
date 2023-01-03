import React from 'react'

const Aside = ({ img, name, dp, heading }) => {
  return (
    <div className='mt-6'>
      <article className='flex '>
        <div className='w-1/4 object-cover'>
          <img src={img} alt='' />
        </div>
        <div className=''>
          <h1 className='font-bold text-2xl text-left px-4'>{heading}</h1>
          <div className='flex flex-row'>
            <span>
              <img
                src={dp}
                alt='img'
                width='30px'
                className='rounded-full m-6'
              />
            </span>
            <h4 className='font-extralight mt-9 '>{name}</h4>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Aside
