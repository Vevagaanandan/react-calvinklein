import React from 'react'
import sectionThreeOne from '../assets/img-3.jpg'
import sectionThreeTwo from '../assets/img-7.jpg'

const SectionThree = () => {
  return (
    <div className='lg:flex'>
        <a style={{backgroundImage: `url(${sectionThreeOne})` }} title='Calvin Klein Underwear' className='bg-no-repeat lg:pb-16 bg-cover bg-center h-screen lg:w-1/2 lg:mr-3 lg:h-screen flex pt-16 drop-shadow-2xl justify-end items-center lg:items-start lg:p-0 lg:justify-end flex-col lg:pl-12 pb-12' href="#">
          <h3 className='text-white text-3xl drop-shadow-2xl pb-3 text-center lg:text-left'>Every Day Underwear</h3>
          <p className='text-white drop-shadow-2xl pb-8 px-6 lg:px-0 lg:font-semibold text-center lg:text-left'>The breathable cotton stretch pieces for under everything.</p>
          <div className="linksOne">
              <ul className='flex gap-8'>
                <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white ' href="#">Shop Bras</a></li>
                <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white' href="#">Shop Panties</a></li>
              </ul>
          </div>
        </a>
        <a style={{backgroundImage: `url(${sectionThreeTwo})` }} title='Calvin Klein Activewear' className='lg:pb-16 bg-no-repeat bg-cover bg-center h-screen lg:w-1/2 flex flex-col justify-end lg:pl-12 pb-12' href="#">
          <h3 className='text-white text-3xl drop-shadow-2xl pb-3 text-center lg:text-left'>Daily Activewear Outfits</h3>
          <p className='text-white drop-shadow-2xl pb-8 lg:font-semibold text-center lg:text-left'>See the styles blend the lines between fashion and function.</p>
          <div className="linksOne">
              <ul className='flex gap-8 justify-center lg:justify-start'>
                <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white' href="#">Shop Active Tops</a></li>
                <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white' href="#">Shop Leggings</a></li>
              </ul>
          </div>
        </a>
      
    </div>
  )
}

export default SectionThree