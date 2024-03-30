import React from 'react'
import styles from '../style'
import insta from '../assets/instagram.svg'
import phone from '../assets/phone.png'
import location from '../assets/location.png'
import mail from '../assets/mail.png'

const Contact = () => {
  return (
    <div id='Contact' className={` h-[100vh] w-full font-poppins ${styles.pagePaddingX} flex flex-col justify-center text-white`}>
      <div className='top'>
        <h1 className={`${styles.pageHeadingTop}`}>CONTACT</h1>
        <h1 className={`${styles.pageHeadingBottom} text-gradient`}>You can use my information down below to reach me!</h1>
      </div>
      <div className="mt-10 flex justify-between w-full flex-wrap max-md:flex-col gap-5">
        <div className='flex gap-3 items-center'>
            <div>
              <img className={`w-[25px] h-[17px]`} src={mail} alt="mail" />
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Mail</h1>
              <p className='text-[13px]'>aydogan.u18@gmail.com</p>
            </div>
        </div>
        <div className='flex gap-3 items-center'>
            <div>
              <img className={`w-[20px] h-[20px]`} src={phone} alt="mail" />
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Phone Number</h1>
              <p className='text-[13px]'>+90 (534) 888 93 24</p>
            </div>
        </div>
        <div className='flex gap-3 items-center'>
            <div>
              <img className={`w-[16px] h-[20px]`} src={location} alt="mail" />
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Location</h1>
              <p className='text-[13px]'>Istanbul/Turkey</p>
            </div>
        </div>
        <div className='flex gap-3 items-center'>
            <div>
              <img className={`w-[20px] h-[20px]`} src={insta} alt="mail" />
            </div>
            <div>
              <h1 className='text-[16px] font-bold'>Instagram</h1>
              <p className='text-[13px]'>aydogan.u3418</p>
            </div>
        </div>
    
  
      </div>
    </div>
  )
}

export default Contact