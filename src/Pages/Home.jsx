import React from 'react'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
         <section className="bg-gradient-to-r from-teal-500 to-blue-900 text-white p-8 text-center">
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
        <div className='flex justify-center items-center pt-10 pb-8'>
            <h1 className='text-5xl font-medium'>Skills</h1>
        </div>

        <Skills></Skills>
    </section>


    </div>
  )
}

export default Home