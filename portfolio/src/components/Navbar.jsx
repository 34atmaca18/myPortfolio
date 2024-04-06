import React from 'react'
import '../App.css'
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';
import { useState } from 'react';
import { navLinks } from '../const';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState("Home");
  const myFunction = (a) => {
    setToggle(!toggle);
    setActive(a)
  }
  return (
    <div>
        <nav className= 'flex relative justify-between items-center h-[100px] px-[150px] max-md:px-[50px] max-ss:px-[20px] text-white'>
            <a className='text-[21px] font-extrabold min-xl:text-[25px] max-ss:text-[17px]' href="#home">aydogan.dev</a>
            <div className={`z-[10] flex flex-row gap-5 font-poppins font-medium 
            min-xl:text-[20px] ${toggle ? 'max-md:right-0' : 'max-md:right-[100%]'}
            max-md:absolute max-md:top-0 max-md:right-0 max-md:w-full max-md:h-[100vh] max-md:flex-col max-md:gap-[40px] max-md:text-[23px]
            max-md:text-center max-md:bg-black justify-center `}>
                {navLinks.map((nav,index) => (
                  <a
                  key={nav.id}
                  href={`#${nav.title}`}
                  className={`cursor-pointer ${active === nav.title ? 'text-[#517aa0]' : 'text-white' }`}
                  onClick={() => myFunction(nav.title)}
                  >{nav.title}</a>
                ))}
            </div>
            <img src= {toggle ? close : menu} 
            alt="menu" 
            className='absolute right-[20px] hidden max-md:block max-md:z-10'
            onClick={() => setToggle(!toggle)}
            />
        </nav>
    </div>
  )
}

export default Navbar