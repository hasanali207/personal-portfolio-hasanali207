import React from "react";

const About = () => {
  return (
    <section className="p-10 section sec2 about bg-slate-200"  id="about">
      <div className="flex justify-center items-center ">
        <h2 className="text-4xl text-center font-semibold text-slate-600">
          ABOUT <span>ME</span>
        </h2>
      </div>
      <div className="about-container grid grid-cols-1 lg:grid-cols-2 gap-8 py-14">
        <div className="left-about pr-0 lg:pr-20">
          <h4 className="text-2xl text-center font-semibold text-slate-600">Information About me</h4>
          <p className="py-4 leading-8 text-gray-600">
            I'll give your business/brand a fresh, clean look and will craft the
            right web-site messaging to keep things clear and concise, yet
            memorable and impactful. If you would like any specific features,
            integrations, or capabilities on your website, just let me know.
            Chances are, I have already done it before or can figure out the
            best way to do it.
            <br /> <br /> La musica delectus dolore fugiat exercitationem a,
            ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non
            necessitatibus deleniti eum soluta.
          </p>
          <div className="btn-con">
            <a
              download
              href="assets/pdf/Alexa-Cv.pdf"
              className="button button_flex bg-teal-600  text-white py-2 px-4 rounded flex items-center"
            >
              Download CV
              <i className="uil uil-download-alt button_icon ml-2"></i>
            </a>
          </div>
        </div>
        <div className="right-about grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 sm:pt-0">
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-purple-600 hover:shadow-lg">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-teal-600">
                50+
              </p>
              <p className="small-text uppercase text-gray-600 text-lg relative">
                Projects Completed
               
              </p>
            </div>
          </div>
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-purple-600 hover:shadow-lg">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-teal-600">
                4+
              </p>
              <p className="small-text  uppercase text-gray-600 text-lg relative">
                Years of experience
                
              </p>
            </div>
          </div>
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-purple-600 hover:shadow-lg">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-teal-600">
                80+
              </p>
              <p className="small-text uppercase text-gray-600 text-lg relative">
                Happy Clients
                
              </p>
            </div>
          </div>
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400 hover:border-purple-600 hover:shadow-lg">
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

