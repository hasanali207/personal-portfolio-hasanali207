import React from 'react';

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

const rotatingImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];


const Skills = () => {
  return (
    <div className="relative w-full h-[80vh] flex justify-center items-center">
        
      <div className="absolute w-24 h-24 md:w-16 md:h-16 rounded-full bg-white flex justify-center items-center">
        <img src={img1} alt="center" className="rounded-full" />
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        {rotatingImages.map((src, index) => (
          <div
            key={index}
            className="absolute w-20 h-20 md:w-14 md:h-14 rounded-full bg-white"
            style={{
              transform: `rotate(${index * 36}deg) translate(12rem) rotate(-${index * 36}deg)`,
              animation: `rotate ${rotatingImages.length * 2}s linear infinite`,
            }}
          >
            <img src={src} alt={`circle-${index}`} className="rounded-full" />
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Skills