import React from 'react'

export default function Banner() {
  return (
    <>

<section className="z-0 h-[90vh] bg-[#0a192f] text-white p-8  flex justify-between items-center">
      <div className="container mx-auto">
        <div className="text-5xl font-bold mb-4">
          
          I am HasanAli
        </div>
        <div className="text-6xl leading-tight font-bold gradient-text py-4 ">
        Front End Developer .
        </div>
        <div className="mt-6">
          <a className='mr-4' href="/contact"><button>CONTACT ME</button></a>
         <a href="#skills"> <button>SKILLS</button></a>
        </div>
      </div>

      <div>

      </div>
    </section>
    </>
  )
}
