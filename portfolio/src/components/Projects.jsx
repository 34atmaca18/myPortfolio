import React from 'react'
import styles from '../style'
import { projects } from '../const'
import gotopage from '../assets/gotopage.png'
import git from '../assets/git.png'
import project1 from '../assets/project1.png'

const Projects = () => {
  return (
    <div id='Projects' className={`text-white font-poppins h-[100vh] max-mdp:py-[100px] max-md:h-fit ${styles.pagePaddingX} relative`}>
      <div className='white__gradient w-[35%] h-[35%] rounded-[50%] absolute bottom-0 right-0'></div>
      
        <div className='flex flex-col gap-[20px] h-[100%] justify-center'>
          <div className='top'>
            <h1 className={`${styles.pageHeadingTop}`}>MY PROJECTS</h1>
            <h1 className={`${styles.pageHeadingBottom} text-gradient`}>Unique Development!</h1>
          </div>
          {projects.map((project,index) => (
              <div key={project.id} className="w-[700px] max-md:w-full h-[300px] bg-black rounded-[50px] 
              flex flex-row items-center gap-3 max-md:flex-col max-md:h-fit max-md:py-5 max-md:px-3 justify-center max-md:justify-initial 
              border-[3px] border-white">
                  <img className='w-[250px] max-md:w-full h-[250px] max-md:h-[200px] py-3 px-3 rounded-[30px] brightness-50 border-white border-[2px]' src={project1} alt={project.name} />
                  <div id='yazilar' className='w-[50%] max-md:w-full h-[full] py-3 text-center
                   text-white px-6 flex flex-col justify-center gap-7 max-md:h-[350px]'>
                    <h1 className='text-[15px] font-bold'>{project.name}</h1>
                    <p className='text-[13px]'>{project.paragraph}</p>
                    <div className="w-full flex flex-row justify-between px-10 max-md:justify-center max-md:gap-[100px] max-ss:gap-[40px]">
                      <a href="https://github.com/34atmaca18/shoppingWebsite" rel="noreferrer" target='_blank' className='flex flex-row gap-2 items-center'>
                        <p className='text-[14px]'>Code</p>
                        <img className='h-[24px] w-[24px] border-[1px] border-white p-1 rounded-[5px]' src={git} alt="" />
                      </a>
                      <a href="#gotopage" rel="noreferrer" className='flex flex-row gap-2 items-center'>
                        <p className='text-[14px]'>Live Demo</p>
                        <img className='h-[24px] w-[24px] border-[1px] border-white p-1 rounded-[5px]' src={gotopage} alt="" />
                      </a>
                    </div>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Projects