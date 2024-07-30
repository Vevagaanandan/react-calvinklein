import React from 'react'
import { FaInstagram, FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between py-4 px-5 lg:px-12'>
      <div className="text">
        <p className='text-[14px] text-[#bdbdbd]'>Copyright © 2024 Calvin Klein. All rights reserved. PVH COMMERCIAL MALAYSIA SDN BHD (CO.REGISTRATION NO: 201101037589 (965723-W))</p>
      </div>
      <div className="socialicons pb-4 lg:pb-0">
        <ul className='flex'>
          <li><a href="#"><FaFacebookF className='theIcons' /></a></li>
          <li><a href="#"><FaPinterest className='theIcons' /></a></li>
          <li><a href="#"><FaTwitter className='theIcons' /></a></li>
          <li><a href="#"><FaInstagram className='theIcons' /></a></li>
          <li><a href="#"><FaYoutube className='theIcons' /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterBottom