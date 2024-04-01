import React from 'react'
import styles from '../style'
import { experiences } from '../const'
import '../index.css'

const Experiences = () => {
  return (
    <div id='Experiences' className={`h-fit max-md:py-[100px] ${styles.pagePaddingX}
     text-white py-[50px] font-poppins relative`}>
      <div className='pink__gradient w-[30%] h-[30%] rounded-[50%] absolute bottom-0 left-0'></div>
      <div className='absolute top-0 right-0 blue__gradient w-[25%] h-[25%] rounded-[50%]'></div>
      <div className='flex flex-col gap-5'>
          <div className='top'>
            <h1 className={`${styles.pageHeadingTop}`}>MY EXPERIENCES</h1>
            <h1 className={`${styles.pageHeadingBottom} text-gradient`}>My worklife experiences in different fields so far..</h1>
          </div>
          <div className='flex flex-col gap-3'>
            {experiences.map((exp,index) => (
              <div
              key={index}
              className={`w-[70%] shadow-cc shadow-[#2f375c] max-md:w-[85%] max-ss:w-full min-h-[150px] ${index % 2 === 0 ? 'self-start' : 'self-end'}
              rounded-[20px] flex flex-row max-xs:flex-col justify-between py-[30px] max-ss:py-[13px] max-ss:gap-4 px-[20px] max-xs:px-[10px]`}
              >
                <div className="textleft w-[40%] max-xs:w-full text-gradient">
                  <h1 className='text-[16px] font-extrabold'>{exp.title}</h1>
                  <p className='text-[12px] font-semibold'>{exp.place}</p>
                  <p className='text-[12px] font-semibold'>{exp.date}</p>
                </div>
                <div className="textright w-[40%] max-xs:w-full text-[12px] max-ss:text-[11px]">
                  {exp.paragraph}
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Experiences