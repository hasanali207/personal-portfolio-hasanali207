import React from 'react'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <div>
         <section className="bg-gradient-to-r h-[80vh] from-[#2C3E50] to-[#34495E] text-white p-8 text-center flex justify-center items-center">
      <div className="container mx-auto">
        <div className="text-4xl font-bold mb-4 flex justify-center items-center">
          <span role="img" aria-label="waving hand" className="mr-2">👋</span>
          Hi, I'm HasanAli!
        </div>
        <div className="text-xl mb-8">
        I'm a Web Developer, I love to create beautiful and functional websites.
        </div>
        <div className="flex justify-center">
          <a className='mr-4' href=""><button>Contact Me</button></a>
         <a href=""> <button>Skilss</button></a>
        </div>
      </div>
    </section>

   
       <section>
       <div className='bg-slate-200 shadow-md mx-auto py-10'>
       
          <Portfolio></Portfolio>
        </div>
       </section>
        

        <section>
        <div className='flex justify-center items-center pt-10 pb-8'>
        <h2 className='text-4xl uppercase text-center font-semibold text-slate-600'>Skills</h2>
        </div>

        <Skills></Skills>
        </section>

        <About></About>
        <Timeline></Timeline>
    </div>
  )
}

export default Home