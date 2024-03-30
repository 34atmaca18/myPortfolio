import React from 'react'
import '../index.css'
import git from '../assets/git.png'
import linkdn from '../assets/linkdn.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tw from '../assets/tailwind.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import c from '../assets/c.png'
import foto1 from '../assets/foto1.png'
import styles from '../style'
import 'animate.css';

const Main = () => {
  return (
    <div id='Home' className={`h-[calc(100vh-100px)] ${styles.pagePaddingX} 
    flex flex-col justify-center w-full max-mdp:h-fit py-[250px] relative mavi`}>
        <div className='blue__gradient w-[50%] h-[50%] rounded-[50%] absolute top-10 right-0'></div>
        <div className='absolute top-[200px] left-0 pink__gradient w-[20%] h-[20%] rounded-[50%]'></div>
        <div id='üst' className='mt-[-150px] w-full flex flex-row justify-between items-initial flex-wrap
        max-mdp:gap-[40px]'>
            <div className='font-poppins text-white flex flex-col gap-3'>
                <h1 className='text-[35px] leading-[43px] text-gradient font-bold '>Frontend React Developer</h1>
                <p className='text-[16px] font-semibold max-md:hidden'>Hi I'm Aydoğan Uyanıkoğlu. A Frontend Developer<br />based in Istanbul/Turkey.</p>
                <p className='text-[16px] font-semibold hidden max-md:block'>Hi I'm Aydoğan Uyanıkoğlu. A Frontend Developer based in Istanbul/Turkey.</p>
                <div className="flex flex-row gap-2 ">
                    <a href="https://www.linkedin.com/in/aydoğan-uyanıkoğlu-337a62285/" rel="noreferrer" target='_blank'>
                        <img className='w-[32px] h-[32px] border-[1px] border-white p-1 rounded-[5px]' src={linkdn} alt="" />
                    </a>
                    <a href="https://github.com/34atmaca18" rel="noreferrer" target='_blank'>
                        <img className='w-[32px] h-[32px] border-[1px] border-white p-1 rounded-[5px]' src={git} alt="" />
                    </a> 
                </div>
            </div>
            <img className='brightness-[60%] rounded-[50px] w-[300px] h-[300px] shadow-cc' src={foto1} alt='vesikalik'></img>
        </div>
        <div id='alt' className='flex gap-4 mt-[80px] absolute bottom-[190px] w-full max-md:relative max-md:bottom-0'>
            <p className='font-poppins border-r-[2px] border-white text-[18px] max-md:text-[16px] text-white pr-7 max-ss:pr-2'>Tech Stack</p>
            <div className="flex gap-5 flex-wrap">
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={html} alt="html" />
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={css} alt="css" />
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={js} alt="js" />
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={react} alt="react" />
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={tw} alt="tailwind" />
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={java} alt="java" />
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={python} alt="python" />
                <img className={`${styles.icons} border-[1px] border-white rounded-[5px] p-2 bg-hover`} src={c} alt="c" />
            </div>
        </div>
    </div>
  )
}

export default Main