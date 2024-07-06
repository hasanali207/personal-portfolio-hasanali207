import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nu63e1l', 'template_a20lb3l', form.current, {
        publicKey: 'rRzpTsJxAh7UA6No7',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Success!',
            text: 'Thanks for Your Message',
            icon: 'success',
            confirmButtonText: 'Okay'
          })

        },
        (error) => {
          console.log('FAILED...', error.text);
        },  
      );
  };


  return (
    <div>
      
      <div className="flex justify-center items-center min-h-32 bg-slate-200">
            <h1 className= "animate__animated uppercase animate__flash text-slate-600 font-bold text-3xl">Contact Me</h1>
      </div>    
      <section className="py-10">
        <div className="grid grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2  ">
          <div data-aos="fade-right" className="py-6 md:py-0 md:px-6">
            <p className="pt-2 pb-4 text-2xl text-slate-600">
              Fill in the form to start a conversation
            </p>
            <p className="pt-2 pb-4 text-xl text-slate-600">
              Find Out here
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Gulshan-1, Dhaka-1212, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801861026837</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>hasanali142228@gmail.com</span>
              </p>

              
            </div>
            <div className="flex space-x-4 mt-10"> 
                  <a className="text-4xl text-teal-500 " href=""><FaGithub />
                  </a>
                  <a  className="text-4xl text-teal-500"  href=""><FaLinkedin   /></a>
                  <a  className="text-4xl text-teal-500"  href=""><FaFacebookSquare />
                  </a>
              </div>
          </div>
         
          <form ref={form} onSubmit={sendEmail} class="mx-auto p-6 w-full bg-white rounded-lg shadow-md">
  <div class="mb-4">
    <label class="block text-slate-600 text-sm font-bold mb-2" for="user_name">Name</label>
    <input
      type="text"
      name="user_name"
      class="w-full shadow appearance-none focus:border-teal-200 border rounded py-2 px-3 text-slate-700 "
    />
  </div>  
  <div class="mb-4">
    <label class="block text-sm text-slate-600 font-bold mb-2" for="user_email">Email</label>
    <input
      type="email"
      name="user_email" 
      class="shadow appearance-none border rounded w-full py-2 px-3"
    />
  </div>
  <div class="mb-4">
    <label class="block text-slate-600 text-sm font-bold mb-2" for="subject">Subject</label>
    <input
      type="text"
      name="subject" 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700"
    />
  </div>
  <div class="mb-4">
    <label class="block  text-slate-600 text-sm font-bold mb-2" for="message">Message</label>
    <textarea
      name="message"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700"
      rows="4"
    ></textarea>
  </div>
  <div class="flex items-center justify-between">
    <input
      type="submit"
      value="Send"
      class="bg-teal-500 hover:bg-blue-500 cursor-pointer text-lg text-slate-200   font-bold px-8 py-2 rounded"
    />
  </div>
</form>




        </div>
      </section>
      
    </div>
  );
};

export default Contact;
