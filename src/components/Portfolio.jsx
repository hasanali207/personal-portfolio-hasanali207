import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import portfolio1 from '../assets/img/port1.jpg';
import portfolio2 from '../assets/img/port2.jpg';
import portfolio3 from '../assets/img/port3.jpg';

const Portfolio = () => {
  return (
   <>
    <div className=''>
              <h2 className='text-4xl uppercase text-center font-semibold text-slate-600 my-10'>Recent Project</h2>
              
            </div>  
    <div className=' max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 lg:p-0'>
        {/* portfolio 1  */}
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full'>
      <Link to="/some-path">  {/* Ensure to replace "/some-path" with the actual path */}
        <img
          src={portfolio1}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            Web Development
          </p>
          <div className='flex items-center gap-1'>
            <p className='text-sm text-gray-600 truncate w-full'>
              Dhaka, Bangladesh
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            This is a description
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            {/* Add any additional information here */}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {/* Add any additional information here */}
            </div>
            <div className='font-bold text-xs'>
              {/* Add any additional information here */}
            </div>
          </div>
        </div>
      </Link>
        </div>
         {/* portfolio 2  */}
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full'>
      <Link to="/some-path">  {/* Ensure to replace "/some-path" with the actual path */}
        <img
          src={portfolio2}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            Web Development
          </p>
          <div className='flex items-center gap-1'>
            <p className='text-sm text-gray-600 truncate w-full'>
              Dhaka, Bangladesh
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            This is a description
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            {/* Add any additional information here */}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {/* Add any additional information here */}
            </div>
            <div className='font-bold text-xs'>
              {/* Add any additional information here */}
            </div>
          </div>
        </div>
      </Link>
        </div>
         {/* portfolio 3  */}
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full'>
      <Link to="/some-path">  {/* Ensure to replace "/some-path" with the actual path */}
        <img
          src={portfolio3}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            Web Development
          </p>
          <div className='flex items-center gap-1'>
            <p className='text-sm text-gray-600 truncate w-full'>
              Dhaka, Bangladesh
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            This is a description
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xl flex space-x-4'>
             <FaGlobe></FaGlobe>
             <FaGithub></FaGithub>
            </div>
            <div className='font-bold text-xs'>
                
            </div>
          </div>
        </div>
      </Link>
        </div>
         {/* portfolio 4 */}
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full'>
      <Link to="/some-path">  {/* Ensure to replace "/some-path" with the actual path */}
        <img
          src={portfolio3}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            Web Development
          </p>
          <div className='flex items-center gap-1'>
            <p className='text-sm text-gray-600 truncate w-full'>
              Dhaka, Bangladesh
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            This is a description
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xl flex space-x-4'>
             <FaGlobe></FaGlobe>
             <FaGithub></FaGithub>
            </div>
            <div className='font-bold text-xs'>
                
            </div>
          </div>
        </div>
      </Link>
        </div>
         {/* portfolio 5 */}
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full'>
      <Link to="/some-path">  {/* Ensure to replace "/some-path" with the actual path */}
        <img
          src={portfolio3}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            Web Development
          </p>
          <div className='flex items-center gap-1'>
            <p className='text-sm text-gray-600 truncate w-full'>
              Dhaka, Bangladesh
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            This is a description
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xl flex space-x-4'>
             <FaGlobe></FaGlobe>
             <FaGithub></FaGithub>
            </div>
            <div className='font-bold text-xs'>
                
            </div>
          </div>
        </div>
      </Link>
        </div>
         {/* portfolio 6 */}
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full'>
      <Link to="/some-path">  {/* Ensure to replace "/some-path" with the actual path */}
        <img
          src={portfolio3}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            Web Development
          </p>
          <div className='flex items-center gap-1'>
            <p className='text-sm text-gray-600 truncate w-full'>
              Dhaka, Bangladesh
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            This is a description
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xl flex space-x-4'>
             <FaGlobe></FaGlobe>
             <FaGithub></FaGithub>
            </div>
            <div className='font-bold text-xs'>
                
            </div>
          </div>
        </div>
      </Link>
        </div>
    </div>
   </>
  );
};

export default Portfolio;
