import React from 'react'
import imageOne from '../assets/img-4.jpg'
import imageTwo from '../assets/img-6.jpg'
import bgtwo from '../assets/img-2.jpg'

const SectionTwo = () => {
  return (
    <div className='sectionTwo-main mb-3'>
      <a title='Summer Edit' href="#">

        <div className='flex flex-col-reverse lg:flex-row'>
          <div style={{backgroundImage: `url(${bgtwo})` }} className='lg:w-2/3 lg:mr-3 bg-no-repeat bg-cover bg-center lg:pl-12 h-[980px] flex flex-col justify-end lg:pb-16'>
            <h3 className='text-white text-center lg:text-left text-3xl drop-shadow-2xl pb-3'>Summer Edit</h3>
            <p className='text-white px-6 lg:px-0 text-center lg:text-left drop-shadow-2xl pb-8 lg:font-semibold'>Transitioning your wardrobe to mark the beginning of a new season.</p>
            <div className="linksOne">
              <ul className='flex gap-8 justify-center lg:justify-start pb-12 lg:pb-0'>
                <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white ' href="#">Shop Tees</a></li>
                <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white' href="#">Shop Jeans</a></li>
                <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white' href="#">Shop Accessories</a></li>
              </ul>
            </div>
          </div>
          <div className='lg:w-1/3'>
            <ul className='flex lg:flex-col w-full'>
              <li className='mb-3 mr-3 lg:mr-0 lg:h-[550px]'><img className='w-full h-full object-cover' src={imageOne} alt="" /></li>
              <li className='mb-3 lg:mb-0 lg:h-[420px]'><img  className='w-full h-full object-cover' src={imageTwo} alt="" /></li>
            </ul>
          </div>
        </div>

      </a>
      
    </div>
  )
}

export default SectionTwo