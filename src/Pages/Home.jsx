import React from 'react'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Banner></Banner>

   
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