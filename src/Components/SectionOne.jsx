import React from 'react'
import bgOne from '../assets/imgone.jpg'

const SectionOne = () => {
  return (
    <div className='pt-[100px]'>
      <div style={{backgroundImage: `url(${bgOne})` }} className="thebanner mb-3 bg-no-repeat bg-cover bg-center h-[600px] lg:h-screen flex pt-16 items-center lg:items-start lg:p-0 lg:justify-center flex-col lg:pl-12">
        
        <p className='text-white text-xl drop-shadow-2xl'>Final Sale Last Call</p>
        <h1 className='text-white text-4xl lg:text-6xl font-normal py-4 drop-shadow-2xl'>Up to 50% off</h1>
        <div className="linksOne">
          <ul className='flex gap-8'>
            <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white ' href="#">Shop Men</a></li>
            <li><a className='text-white text-sm drop-shadow-2xl lg:text-lg border-b pb-1 border-white lg:hover:border-b lg:duration-75 lg:border-transparent lg:hover:border-white' href="#">Shop Women</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SectionOne