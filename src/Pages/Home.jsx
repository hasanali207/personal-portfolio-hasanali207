import React from 'react'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <div>
         <section className="z-0 bg-gradient-to-r h-[80vh] from-[#2C3E50] to-[#34495E] text-white p-8 text-center flex justify-center items-center">
      <div className="container mx-auto">
        <div className="text-4xl font-bold mb-4 flex justify-center items-center">
          <span role="img" aria-label="waving hand" className="mr-2">👋</span>
          Hi, I'm HasanAli!
        </div>
        <div className="text-xl mb-8">
        I'm a Frontend Developer,  <br /> I love to create beautiful and functional websites.
        </div>
        <div className="flex justify-center">
          <a className='mr-4' href="/contact"><button>CONTACT ME</button></a>
         <a href="#skills"> <button>SKILLS</button></a>
        </div>
      </div>
    </section>

   
       <section>
       <div className='bg-slate-200 shadow-md mx-auto py-10'>
       
          <Portfolio></Portfolio>
        </div>
       </section>
        

        <section id='skills'>
        <div className='flex justify-center items-center pt-10 pb-8'>
        <h2 className='text-4xl uppercase text-center font-semibold text-slate-600'>Skills</h2>
        </div>

        <Skills></Skills>
        </section>

        <div className='bg-slate-200'>
        <About></About>
        </div>
        <Timeline></Timeline>
    </div>
  )
}

export default Home