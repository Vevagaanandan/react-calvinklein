import React from 'react'

const Footermobile = () => {
  return (
    <div>
        <ul className='mb-8 lg:mb-0 w-full lg:w-2/12'>
        <li>
          <div className='flex justify-between'><p className='font-semibold'>Your Orders</p> <button onClick={() => setOpen(!open) } className='text-xl lg:hidden text-black font-bold flex items-center'>{ open ? <span><FaMinus /></span> : <span><FaPlus /></span> }</button> </div>
          
          { open ? 
          <div className='footer-true'>
            <ul>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Returns And Refunds</a></li>
            </ul>
          </div>   
          : 
          <div className='footer-false'></div> }
          
          
        </li>
        <li className='hidden lg:block'><a href="#">Orders</a></li>
        <li className='hidden lg:block'><a href="#">Delivery</a></li>
        <li className='hidden lg:block'><a href="#">Returns And Refunds</a></li>
        
      </ul>
    </div>
  )
}

export default Footermobile