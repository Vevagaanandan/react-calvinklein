import React from 'react'

const Newsletter = () => {
  return (
    <div className='py-10 px-5 lg:px-12 bg-black'>
      <h3 className='text-white text-2xl pb-4'>Hello Sale Season</h3>
      <p className='text-white pb-6'>Be the first to know our latest news on new arrivals and exclusive promotions. Sign up now and save extra 10% off on your first order.</p>
      <div className="theform flex flex-col lg:flex-row">
        <input placeholder='Email' className='mr-4 h-10 bg-black border border-white p-4 pr-20 text-sm mb-5 lg:mb-0 w-full lg:w-auto' type="text" />
        <button className='bg-white text-black text-center py-2 px-12 font-normal'>Sign Up for Newsletter</button>
        
      </div>
    </div>
  )
}

export default Newsletter