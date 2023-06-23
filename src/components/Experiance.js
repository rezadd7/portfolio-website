import React from 'react';

//Image
import frontendImg from '../assets/images/front-end.png'
import backendImg from '../assets/images/backend.png'
import designImg from '../assets/images/design.png'
import apssImg from '../assets/images/apps.png'

//SVG
import redux from '../assets/svg/redux.svg'
import react from '../assets/svg/react.svg'
import css3 from '../assets/svg/css3.svg'
import github from '../assets/svg/github.svg'
import html5 from '../assets/svg/html5.svg'
import js from '../assets/svg/js.svg'


const Experiance = () => {
    return (
            <section id='experiance'>
                <div className="container lg:pt-5">
                    <div className=" text-center">
                        <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 dark:text-headingColorDark"> 
                             Experiance
                        </h2>
                        <p className=' lg:max-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 dark:text-headingColorDark'>
                             During the time I stepped on the path of becoming a developer,
                                I managed to gain skills in the following fields:         
                        </p>
                    </div>
                    
                    <div className='flex flex-col justify-center sm:py-12'>
                        <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                            <div className="relative text-gray-700 antialiased text-sm font-semibold">
                                {/* Vertical line */}
                                <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2">             
                                </div>
                                {/* left card */}
                                <div className="mt-6 sm:mt-0 sm:mb-12">
                                    <div className=" flex items-center flex-col sm:flex-row">

                                        <div className="flex justify-start w-full max-auto items-center">
                                            <div className="w-full  sm:w-1/2 sm:pr-8">
                                                <div 
                                                data-aos="fade-right"
                                                data-aos-delay="50"
                                                data-aos-duration="1200"
                                                className=" bg-white p-4 rounded shadow group flex hover:bg-primaryColor cursor-pointer dark:bg-slate-600 dark:hover:bg-slate-400 text-center">
                                                    <img src={html5}  alt='html5'/>
                                                    <h3 className=' text-primaryColor pt-4 font-[700] mb-3  group-hover:text-white group-hover:font-[600] text-[30px] pl-2'>
                                                        HTML5
                                                    </h3> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" rounded-full bg-primaryColor border-white border-4 dark:border-[#1c2833] w-10 h-10 absolute left-1/2 transform
                                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center 
                                            ">
                                            <figure>
                                                <img src={frontendImg} alt="frontendImg"/>
                                            </figure>
                                        </div>

                                    </div>
                                </div>

                                {/* right card */}
                                <div className="mt-6 sm:mt-0 sm:mb-12">
                                    <div className=" flex items-center flex-col sm:flex-row">

                                        <div className="flex justify-end w-full max-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pl-8">
                                                <div 
                                                data-aos="fade-left"
                                                data-aos-delay="50"
                                                data-aos-duration="1300"
                                                className=" bg-white p-4 rounded shadow group flex hover:bg-primaryColor cursor-pointer dark:bg-slate-600 dark:hover:bg-slate-400">
                                                    <img src={css3} className=' text-[32px] ml-3' alt='css3'/>
                                                    <h3 className='  text-primaryColor pt-4 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[30px] pl-2'>
                                                        CSS3
                                                    </h3>                 
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" rounded-full bg-primaryColor border-white border-4 dark:border-[#1c2833] w-10 h-10 absolute left-1/2 transform
                                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center 
                                            ">
                                            <figure>
                                                <img src={backendImg} alt="backendImg"/>
                                            </figure>
                                        </div>

                                    </div>
                                </div>

                                 {/* left card */}
                                 <div className="mt-6 sm:mt-0 sm:mb-12">
                                    <div className=" flex items-center flex-col sm:flex-row">

                                        <div className="flex justify-start w-full max-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pr-8">
                                                <div 
                                                data-aos="fade-right"
                                                data-aos-delay="50"
                                                data-aos-duration="1400"
                                                className=" bg-white p-4 rounded shadow group flex hover:bg-primaryColor cursor-pointer dark:bg-slate-600 dark:hover:bg-slate-400">
                                                    <img src={js} className=' text-[32px] ml-3' alt='js'/>
                                                    <h3 className='  text-primaryColor pt-4 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[30px] pl-2'>
                                                        JavaScript
                                                    </h3> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" rounded-full bg-primaryColor border-white border-4 dark:border-[#1c2833] w-10 h-10 absolute left-1/2 transform
                                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center 
                                            ">
                                            <figure>
                                                <img src={designImg} alt="designImg"/>
                                            </figure>
                                        </div>

                                    </div>
                                </div>

                                {/* right card */}
                                <div className="mt-6 sm:mt-0 sm:mb-12">
                                    <div className=" flex items-center flex-col sm:flex-row">

                                        <div className="flex justify-end w-full max-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pl-8">
                                                <div 
                                                data-aos="fade-left"
                                                data-aos-delay="50"
                                                data-aos-duration="1500"
                                                className=" bg-white p-4 rounded shadow group flex hover:bg-primaryColor cursor-pointer dark:bg-slate-600 dark:hover:bg-slate-400">
                                                    <img src={react} className=' text-[32px] ml-3' alt='react'/>
                                                    <h3 className='  text-primaryColor pt-4 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[30px] pl-2'>
                                                        React
                                                    </h3> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" rounded-full bg-primaryColor border-white border-4 dark:border-[#1c2833] w-10 h-10 absolute left-1/2 transform
                                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center 
                                            ">
                                            <figure>
                                                <img src={apssImg} alt="apssImg"/>
                                            </figure>
                                        </div>

                                    </div>
                                </div>

                                 {/* left card */}
                                 <div className="mt-6 sm:mt-0 sm:mb-12">
                                    <div className=" flex items-center flex-col sm:flex-row">

                                        <div className="flex justify-start w-full max-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pr-8">
                                                <div 
                                                data-aos="fade-right"
                                                data-aos-delay="50"
                                                data-aos-duration="1400"
                                                className=" bg-white p-4 rounded shadow group flex hover:bg-primaryColor cursor-pointer dark:bg-slate-600 dark:hover:bg-slate-400">
                                                    <img src={redux} className=' text-[32px] ml-3' alt='redux'/>
                                                    <h3 className='  text-primaryColor pt-4 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[30px] pl-2'>
                                                        Redux
                                                    </h3> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" rounded-full bg-primaryColor border-white border-4 dark:border-[#1c2833] w-10 h-10 absolute left-1/2 transform
                                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center 
                                            ">
                                            <figure>
                                                <img src={designImg} alt="designImg"/>
                                            </figure>
                                        </div>

                                    </div>
                                </div>

                                {/* right card */}
                                <div className="mt-6 sm:mt-0 sm:mb-12">
                                    <div className=" flex items-center flex-col sm:flex-row">

                                        <div className="flex justify-end w-full max-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pl-8">
                                                <div 
                                                data-aos="fade-left"
                                                data-aos-delay="50"
                                                data-aos-duration="1500"
                                                className=" bg-white p-4 rounded shadow group flex hover:bg-primaryColor cursor-pointer dark:bg-slate-600 dark:hover:bg-slate-400">
                                                    <img src={github} className=' text-[32px] ml-3' alt='github'/>
                                                    <h3 className='  text-primaryColor pt-4 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-[30px] pl-2'>
                                                        Github
                                                    </h3> 
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" rounded-full bg-primaryColor border-white border-4 dark:border-[#1c2833] w-10 h-10 absolute left-1/2 transform
                                                        -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center 
                                            ">
                                            <figure>
                                                <img src={apssImg} alt="apssImg"/>
                                            </figure>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        
    );
};

export default Experiance;