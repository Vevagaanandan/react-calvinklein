import React, { useState } from 'react'
import cklogo from '../assets/logo/Calvin-Klein-Logo.jpg'
import { IoLocationOutline, IoBagOutline, IoCloseSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import navOne from '../assets/img-7.jpg';
import navTwo from '../assets/img-3.jpg';
import navThree from '../assets/ck-img.jpg';

const Navbar = () => {

  const [mobilemenu, setMobilemenu] = useState(true);

  const themobileMenu = () => {
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true)
  }

  return (
    <div className="navbarmainone fixed w-full bg-white z-50">
      <div className='navbar-main gap-4 lg:gap-0 lg:justify-between lg:pb-4 pt-2 lg:py-6 px-5 lg:px-12 hidden lg:w-full lg:inline-flex'>
        <div className='navbarOne items-center lg:flex'>
          <div className="logo h-[50px] w-[130px] object-cover lg:mr-6">
            <img className='h-full w-full object-contain' src={cklogo} alt="Calvin Klein Logo" />
          </div>
          <div className="menuList ">
            <ul className='flex gap-4 items-center justify-center'>
              <li><a className='text-sm' href="#">MEN</a></li>
              <li><a className='text-sm' href="#">WOMEN</a></li>
            </ul>
          </div>
        </div>
        <div className='navbarTwo'>
          <input placeholder='Search Jeans'  className='h-10 bg-[#E8E8E8] border border-white p-4 pr-24 text-sm mb-5 lg:mb-0 w-full lg:w-auto' type="text" />
        </div>
        <div className='navbarThree'>
          <div className="menuListTwo">
            <ul className='flex pt-3'>
              <li><a href="#"><IoLocationOutline className='theIcons' /></a></li>
              <li className='lg:ml-4'><a href="#"><GoPersonFill className='theIcons' /></a></li>
              <li className='lg:ml-4'><a href="#"><FaRegHeart className='theIcons' /></a></li>
              <li className='lg:ml-4'><a href="#"><IoBagOutline className='theIcons' /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`  mobilemenu flex-row z-10 lg:hidden `}>
        <div className='navbarOne flex justify-between items-center mt-2'>
            <div><GiHamburgerMenu onClick={themobileMenu} className='text-xl ml-4' /></div>
            <div className="logo h-[50px] w-[130px] object-cover lg:mr-6">
              <img className='h-full w-full object-contain' src={cklogo} alt="Calvin Klein Logo" />
            </div>
            <div className='flex'>
              <a href="#"><FaRegHeart className='text-xl' /></a>
              <a href="#"><IoBagOutline className='text-xl mx-4 ml-4' /></a>
            </div>
        </div>
        <div className='navbarTwo mx-4'>
          <input placeholder='Search Jeans'  className='h-10 bg-[#E8E8E8] border border-white p-4 pr-24 text-sm mt-2 mb-4 lg:mb-0 w-full lg:w-auto' type="text" />
        </div>
        <div className={` navbarThree z-50 block duration-300 bg-black top-0 left-0 h-full fixed ease-out ${ mobilemenu ? 'hide-mobileMenu' : 'w-[350px]' } `}>
          <ul>
            <li className='flex justify-between px-3 py-4 pt-5'><span></span> <span  className='cursor text-2xl text-white'><IoCloseSharp onClick={themobileMenu} /></span></li>
            <li className='flex justify-between px-4 pb-2'><a className='text-white text-2xl' href="#">Men</a><span className='pointer text-3xl text-white'>+</span></li>
            <li className='flex justify-between px-4 pb-2'><a className='text-white text-2xl' href="#">Women</a><span className='pointer text-3xl text-white'>+</span></li>
            <li className='flex justify-between px-4 pb-14'><a className='text-white text-2xl' href="#">JENNIE's Look</a><span className='pointer text-4xl text-white'></span></li>
            <li className='flex justify-between px-4 pb-2 border-b border-[#bbb8b8]'>
              <div className='flex items-center'>
                <a href="#"><span className='pointer text-lg text-white'><GoPersonFill className='mr-4' /></span></a>
                <a className='text-white text-lg' href="#">Sign In / Register</a>
              </div>
              <span className='pointer text-4xl text-white'><MdOutlineKeyboardArrowRight className='text-3xl' /></span>
            </li>
          </ul>
          <ul className='pb-4'>
            <li className='flex justify-between px-3 pt-12 pb-2'><a className='text-white text-lg flex items-center' href="#"><IoLocationOutline className='text-xl mr-2' />Store Locator</a></li>
            <li className='flex justify-between px-3'><a className='text-white text-lg flex items-center' href="#"><AiOutlineQuestionCircle  className='text-xl mr-2' />Need Help</a></li>
          </ul>
          <ul className='px-4'>
            <li style={{backgroundImage: `url(${navOne})` }} className='mb-3 h-[100px] bg-no-repeat bg-cover bg-center flex items-center border border-[#929191]'><a className='py-4 px-6 block text-white' href="#">Apparel & Accessories</a></li>
            <li style={{backgroundImage: `url(${navTwo})` }} className='mb-3 h-[100px] bg-no-repeat bg-cover bg-center flex items-center border border-[#929191]'><a className='py-4 px-6 block text-white' href="#">Underwear, Selected items 30% off <br /> Buy 5 get extra 30% off </a></li>
            <li style={{backgroundImage: `url(${navThree})` }} className='h-[100px] bg-no-repeat bg-cover bg-center border border-[#929191] flex items-center'><a className='py-4 px-6 block text-white' href="#">Sign Up & Save 10% on Your Purchase </a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar