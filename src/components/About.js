import React from 'react';


//Icon
import heroIcon from '../assets/images/hero.svg';
import hero from '../assets/images/hero.jpg';



const About = () => {
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex md:flex-row items-center justify-between sm:flex-col'>
                    {/* Main left content */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos="fade-right" 
                            data-aos-duration="1500" 
                            className='text-headingColor font-[600] text-[16px] dark:text-white'
                            >
                            Hello Wellcome
                        </h5>
                        <h1 data-aos="fade-up" 
                            data-aos-duration="1500" 
                            className='text-headingColor font-[800] text-[1.5rem] sm:text-[40px] leading-[35px]
                            sm:leading-[46px] mt-5 dark:text-headingColorDark'
                            >
                                I'm Reza Dehghan <br />
                                Front-end Developer
                            </h1>

                            <div className='flex items-center gap-6 mt-7 dark:text-white'
                                 data-aos="fade-up"
                                 data-aos-duration="1900"
                                 data-aos-delay="200"
                                >
                                <a href='#contact'>
                                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] dark:text-white
                                    '>
                                        <i className="ri-folder-download-line">
                                            <span className='ml-2'>
                                                <a href='https://drive.google.com/file/d/1dUUKQG8KyoicQG_W1GPemPICYPbWlwuh/view?usp=sharing'>
                                                    Download CV
                                                </a>
                                            </span>
                                        </i>
                                    </button>
                                </a>
                                <a href='#portfolio' className='text-smallTextColor  font-[600] text-[16px]
                                    border-b border-solid border-smallTextColor dark:dark:text-smallTextColorDark dark:border-smallTextColorDark
                                '>See Portfolio</a>
                            </div>

                            <p data-aos="fade-left" 
                                   data-aos-duration="1500"
                                   className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-15 dark:text-white' 
                                >
                                <span><i className="ri-apps-2-line"></i></span>
                                My name is Reza, I have a bachelor's degree in IT from Payam Noor University.
                                 It has been a while since I started programming and acquired skills in the field of frontend developer
                                  and implemented them in the form of this project.
                            </p>

                            <div className='flex items-center gap-9 mt-14'>
                                <span className='text-smallTextColor text-[15px] font-[600] dark:text-smallTextColorDark'>
                                    Follow me :
                                </span>
                                <span>
                                    <a  href='https://www.linkedin.com/in/reza-dehghan-18a238201' 
                                        target='blank'
                                        className='text-smallTextColor text-[18px] font-[600] dark:text-smallTextColorDark cursor-pointer hover:text-red-200 hover:transition dark:hover:text-red-200'><i className="ri-linkedin-box-fill"></i></a>
                                </span>
                                <span>
                                    <a  href='https://github.com/rezadd7' 
                                        target='blank'
                                        className='text-smallTextColor text-[18px] font-[600] dark:text-smallTextColorDark cursor-pointer hover:text-red-200 hover:transition dark:hover:text-red-200'><i className="ri-github-fill"></i></a>
                                </span>
                                <span>
                                    <a  href='https://instagram.com/rezadd7?igshid=ZDc4ODBmNjlmNQ==' 
                                        target='blank'
                                        className='text-smallTextColor text-[18px] font-[600] dark:text-smallTextColorDark cursor-pointer hover:text-red-200 hover:transition dark:hover:text-red-200'><i className="ri-instagram-fill"></i></a>
                                </span>
                            </div>

                    </div>
                    {/* Main left content End */}

                    {/* Main image */}
                    <div className='mt-10 basis-1/3 sm:mt-5'>
                        <figure className='flex items-center justify-center'>
                            <img src={hero} alt='Hero' />
                        </figure>
                    </div>
                    {/* Main image end */}
      
                </div>
            </div>

        </section>
    );
};

export default About;