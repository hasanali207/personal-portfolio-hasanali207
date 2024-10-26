import React from 'react'
import img9 from '../assets/Bootsrap.png';
import img2 from '../assets/css.png';
import img3 from '../assets/express.png';
import img4 from '../assets/firebase.png';
import img5 from '../assets/HTML.png';
import img6 from '../assets/JavaScript.png';
import img7 from '../assets/mongo.png';
import img8 from '../assets/node.png';
import img1 from '../assets/react.png';
import img10 from '../assets/sass.png';
import img11 from '../assets/tailwind.png';


export default function Skills() {
  return (
    <div className='bg-[#0a192f]'>
     <div className="flex justify-center items-center ">
      <div className="text-5xl leading-tight font-bold gradient-text py-4 ">
       
        My Skills


        </div>

      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="h-32 w-32 bg-cover rounded-full" style={{ backgroundImage: `url(${img1})` }}></div>
        <div className="h-32 w-32 bg-cover rounded-full" style={{ backgroundImage: `url(${img2})` }}></div>
        <div className="h-32 w-32 bg-cover rounded-full" style={{ backgroundImage: `url(${img3})` }}></div>
        <div className="h-32 w-32 bg-cover rounded-full" style={{ backgroundImage: `url(${img4})` }}></div>
        <div className="h-32 w-32 bg-cover rounded-full" style={{ backgroundImage: `url(${img5})` }}></div>
        
      </div>

    </div>
  )
}
