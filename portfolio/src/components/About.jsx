import React from 'react'
import foto2 from '../assets/foto2.jpeg'
import styles from '../style'

export const About = () => {
  return (
    <div id='About' className={`h-[100vh] flex flex-row flex-wrap items-center justify-center  
    gap-5 max-mdp:px-[200px] max-md:h-fit max-md:py-[150px] ${styles.pagePaddingX} relative`}>
        <div className='absolute top-0 left-0 white__gradient w-[30%] h-[30%] rounded-[50%]'></div>
        <div className="sol">
            <img className='w-[300px] h-[300px] rounded-[50px] brightness-50' src={foto2} alt="computer" />
        </div>
        <div className="w-[400px] max-mdp:w-full text-white font-poppins flex flex-col gap-4">
            <div>
                <h1 className={`${styles.pageHeadingTop}`}>ABOUT ME</h1>
                <h1 className={`${styles.pageHeadingBottom} text-gradient`}>a Dedicated Frontend Developer!</h1>
            </div>
            <p className='text-[14px]'>I am a student at Ankara University currently. I am studying at computer engineering and I am
                at my third year. I had so many different job experiences in my life before and during the university. 
                Right now I'm trying to improve myself as a top level React Frontend Developer and trying to do a lot of projects. 
                I trust my tech stack skills as I mentioned above. Besides my skills for programming I believe in myself that 
                I have a high level discipline at work. Apart from these, I really like to spend my free time on boxing,fitness and chess.
            </p>
        </div>
    </div>
  )
}
