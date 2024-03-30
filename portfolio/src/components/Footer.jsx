import React from 'react'
import copy from '../assets/copyright.png'
import styles from '../style'
import insta from '../assets/instagram.svg'
import face from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkdn from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <div className={`w-full h-[100px] ${styles.pagePaddingX} flex flex-row items-center 
    justify-between max-ss:flex-col max-ss:justify-initial max-ss:py-4`}>
      <div className='text-white h-full flex flex-row items-center text-[13px] max-ss:text-[10.5px] font-poppins font-bold w-fit'>
        <span>Copyright</span><span><img className='w-[12px] h-[12px] mt-[-1px] mx-1' src={copy} alt="" /></span>
        <span>2023. All rights are reserved.</span>
      </div>
      <div id='logos' className='flex flex-row gap-3'>
        <img className={`${styles.iconskucuk} icons-class cursor-pointer`} src={insta} alt="" />
        <img className={`${styles.iconskucuk} icons-class cursor-pointer`} src={face} alt="" />
        <img className={`${styles.iconskucuk} icons-class cursor-pointer`} src={twitter} alt="" />
        <img className={`${styles.iconskucuk} icons-class cursor-pointer`} src={linkdn} alt="" />
      </div>
    </div>
  )
}

export default Footer