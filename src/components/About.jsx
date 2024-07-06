import React from "react";

const About = () => {
  return (
    <section className="p-10 section sec2 about"  id="about">
      <div className="flex justify-center items-center ">
        <h2 className="text-4xl text-center font-semibold text-slate-600">
          ABOUT <span>ME</span>
        </h2>
      </div>
      <div className="about-container grid grid-cols-1 lg:grid-cols-2 gap-8 py-14">
        <div className="left-about pr-0 lg:pr-20">
          <h4 className="text-2xl text-center font-semibold text-slate-600">Information About me</h4>
          <p className="py-4 leading-8 text-gray-600">
          My name is Hasan Ali. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. 
            <br /> <br /> I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
          </p>
          <div className="btn-con">
            <a
              download
              href="assets/HASANALICV.pdf"
              className="button button_flex bg-teal-600  text-white py-2 px-4 rounded flex items-center"
            >
              Download CV 
              <i className="uil uil-download-alt button_icon ml-2"></i>
            </a>
          </div>
        </div>
        <div className="right-about grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 sm:pt-0">
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-teal-600 hover:shadow-lg">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-teal-600">
                50+
              </p>
              <p className="small-text uppercase text-gray-600 text-lg relative">
                Projects Completed
               
              </p>
            </div>
          </div>
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-teal-600 hover:shadow-lg">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-teal-600">
                4+
              </p>
              <p className="small-text  uppercase text-gray-600 text-lg relative">
                Years of experience
                
              </p>
            </div>
          </div>
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-teal-600 hover:shadow-lg">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-teal-600">
                80+
              </p>
              <p className="small-text uppercase text-gray-600 text-lg relative">
                Happy Clients
                
              </p>
            </div>
          </div>
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-teal-600 hover:shadow-lg">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-teal-600">
                10+
              </p>
              <p className="small-text  uppercase text-gray-600 text-lg relative">
                Customer reviews
               
              </p>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};

export default About;

