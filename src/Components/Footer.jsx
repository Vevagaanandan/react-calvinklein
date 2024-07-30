import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const Footer = () => {
  
  const [open, setOpen] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [openthree, setOpenthree] = useState(false);
  const [openfour, setOpenfour] = useState(false);
  
  return (

    <div className='pt-8 lg:py-8 px-5 lg:px-12 lg:flex theFooter'>
      <ul className='mb-8 lg:mb-0 w-full lg:w-2/12'>
        <li>
          <div className='flex justify-between pb-3'><p className='font-semibold'>Your Orders</p> <button onClick={() => setOpen(!open) } className='text-xl lg:hidden text-black font-bold flex items-center'>{ open ? <span><FaMinus /></span> : <span><FaPlus /></span> }</button> </div>
          
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
      <ul className='mb-8 lg:mb-0 w-full lg:w-2/12'>
        <li>
          <div className='flex justify-between pb-3'><p className='font-semibold'>Customer Service</p> <button onClick={() => setOpentwo(!opentwo) } className='text-xl lg:hidden text-black font-bold flex items-center'>{ opentwo ? <span><FaMinus /></span> : <span><FaPlus /></span> }</button> </div>
       

          { opentwo ? 
          <div className='footer-true'>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Size Guides</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Returns Policy</a></li>
                <li><a href="#">Shipping Information</a></li>
                <li><a href="#">Payments</a></li>
              </ul>
          </div>
          : 
          <div className='footer-false'></div> }
        </li>  

        <li className='hidden lg:block'><a href="#">Contact Us</a></li>
        <li className='hidden lg:block'><a href="#">Size Guides</a></li>
        <li className='hidden lg:block'><a href="#">FAQ</a></li>
        <li className='hidden lg:block'><a href="#">Returns Policy</a></li>
        <li className='hidden lg:block'><a href="#">Shipping Information</a></li>
        <li className='hidden lg:block'><a href="#">Payments</a></li>
      </ul>
      <ul className='mb-8 lg:mb-0 w-full lg:w-2/12'>
        <li>
          <div className='flex justify-between pb-3'><p className='font-semibold'>About Calvin Klein</p> <button onClick={() => setOpenthree(!openthree) } className='text-xl lg:hidden text-black font-bold flex items-center'>{ openthree ? <span><FaMinus /></span> : <span><FaPlus /></span> }</button> </div>
       

          { openthree ? 
          <div className='footer-true'>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Store Locator</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Privacy Commitment</a></li>
                <li><a href="#">Counterfeit Products</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">My Calvins Loyalty Program</a></li>
              </ul>
          </div>
          : 
          <div className='footer-false'></div> }
        </li>  

        <li className='hidden lg:block'><a href="#">About Us</a></li>
        <li className='hidden lg:block'><a href="#">Store Locator</a></li>
        <li className='hidden lg:block'><a href="#">Terms and Conditions</a></li>
        <li className='hidden lg:block'><a href="#">Privacy Policy</a></li>
        <li className='hidden lg:block'><a href="#">Privacy Commitment</a></li>
        <li className='hidden lg:block'><a href="#">Counterfeit Products</a></li>
        <li className='hidden lg:block'><a href="#">Sustainability</a></li>
        <li className='hidden lg:block'><a href="#">My Calvins Loyalty Program</a></li>
      </ul>
      <ul className='mb-8 lg:mb-0 w-full lg:w-6/12'>
        <li>
          <div className='flex justify-between pb-3'><p className='font-semibold'>Explore</p> <button onClick={() => setOpenfour(!openfour) } className='text-xl lg:hidden text-black font-bold flex items-center'>{ openfour ? <span><FaMinus /></span> : <span><FaPlus /></span> }</button> </div>
       

          { openfour ? 
          <div className='footer-true'>
              <ul>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Underwear</a></li>
                <li><a href="#">Bra fit guide</a></li>
                <li><a href="#">Calvin Klein Denim</a></li>
                <li><a href="#">Denim Fit Guide</a></li>
                <li><a href="#">Denim Care</a></li>
                <li><a href="#">1-on-1 Styling Session Instore</a></li>
                <li><a href="#">Be The First To Know</a></li>
                <li><a href="#">Sale</a></li>
                <li><a href="#">View All</a></li>
              </ul>
          </div>
          : 
          <div className='footer-false'></div> }
        </li>  


        <li className='hidden lg:block'><a href="#">Men</a></li>
        <li className='hidden lg:block'><a href="#">Women</a></li>
        <li className='hidden lg:block'><a href="#">Underwear</a></li>
        <li className='hidden lg:block'><a href="#">Bra fit guide</a></li>
        <li className='hidden lg:block'><a href="#">Calvin Klein Denim</a></li>
        <li className='hidden lg:block'><a href="#">Denim Fit Guide</a></li>
        <li className='hidden lg:block'><a href="#">Denim Care</a></li>
        <li className='hidden lg:block'><a href="#">1-on-1 Styling Session Instore</a></li>
        <li className='hidden lg:block'><a href="#">Be The First To Know</a></li>
        <li className='hidden lg:block'><a href="#">Sale</a></li>
        <li className='hidden lg:block'><a href="#">View All</a></li>
      </ul>
    </div>
  )
}

export default Footer