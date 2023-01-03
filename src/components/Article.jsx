import React from 'react'
import Aside from './Aside'
import Tom from '../assets/tom.jpeg'
import Fall from '../assets/fall.jpg'
import Tiger from '../assets/tiger.jpg'
import Arthur from '../assets/arthur.jpeg'
import Jonboy from '../assets/jonboy.jpeg'
import Dmit from '../assets/dmit.jpg'

const Article = () => {
  return (
    <div className='w-1/2 m-10 mt-2 '>
      <article>
        <h3 className=' text-left mt-10 text-2xl font-bold'>Recent articles</h3>
        <Aside
          img={Fall}
          dp={Tom}
          heading='Common Symbols And   Their Meanings'
          name='Thomas Shelby'
        />
        <Aside
          img={Tiger}
          dp={Arthur}
          heading='Sucess Steps For Your Business'
          name='Alfie Solomon'
        />
        <Aside
          img={Dmit}
          dp={Jonboy}
          heading='The strenght Of your Belief'
          name='Thomas Shelby'
        />
      </article>
    </div>
  )
}

export default Article
