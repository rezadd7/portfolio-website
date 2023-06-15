import React from 'react';
import heroIcon from '../assets/images/hero.svg';
import CountUp from 'react-countup';


const Banner = () => {
    return (
        <section className='pt-0'>
            <div className='container pt-14'>
                <div className='md:flex md:flex-row items-center justify-between sm:flex-col'>
                    {/* Main left content */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos="fade-right" 
                            data-aos-duration="1500" 
                            className='text-headingColor font-[600] text-[16px]'
                            >
                            Hello Wellcome
                        </h5>
                        <h1 data-aos="fade-up" 
                            data-aos-duration="1500" 
                            className='text-headingColor font-[800] text-[1.5rem] sm:text-[40px] leading-[35px]
                            sm:leading-[46px] mt-5'
                            >
                                I'm Reza Dehghan <br />
                                Front-end Developer
                            </h1>

                            <div className='flex items-center gap-6 mt-7'
                                 data-aos="fade-up"
                                 data-aos-duration="1900"
                                 data-aos-delay="200"
                                >
                                <a href='#contact'>
                                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] 
                                    '><i class="ri-mail-line" ><span className='ml-2'>Here Me</span></i></button>
                                </a>
                                <a href='#portfolio' className='text-smallTextColor  font-[600] text-[16px]
                                    border-b border-solid border-smallTextColor
                                '>See Portfolio</a>
                            </div>

                            <p data-aos="fade-left" 
                                   data-aos-duration="1500"
                                   className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-15' 
                                >
                                <span><i class="ri-apps-2-line"></i></span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book.
                            </p>

                            <div className='flex items-center gap-9 mt-14'>
                                <span className='text-smallTextColor text-[15px] font-[600]'>
                                    Follow me :
                                </span>
                                <span>
                                    <a href='#Linkdin' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-linkedin-box-fill"></i></a>
                                </span>
                                <span>
                                    <a href='#github' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-github-fill"></i></a>
                                </span>
                                <span>
                                    <a href='#instagram' className='text-smallTextColor text-[18px] font-[600]'><i class="ri-instagram-fill"></i></a>
                                </span>
                            </div>

                    </div>
                    {/* Main left content End */}

                    {/* Main image */}
                    <div className='mt-10 basis-1/3 sm:mt-5'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroIcon} alt='Hero'/>
                        </figure>
                    </div>
                    {/* Main image end */}


                    {/* Main Count */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 
                        md:mt-0 md:flex-col md:justify-end md:text-end'
                        >
                        <div className='mb-10'>
                            <h2 className='text-smallTextColor font-[700] text-[32px]'>
                                <CountUp start={0} end={6} duration={2} suffix='+'/>
                            </h2>
                            <h4 className='text-smallTextColor font-[600] text-[18px]'>Years of experience</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-smallTextColor font-[700] text-[32px]'>
                                <CountUp start={0} end={100} duration={5} suffix='%'/>
                            </h2>
                            <h4 className='text-smallTextColor font-[600] text-[18px]'>Success Rate</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-smallTextColor font-[700] text-[32px]'>
                                <CountUp start={0} end={149} duration={5} suffix='+'/>
                            </h2>
                            <h4 className='text-smallTextColor font-[600] text-[18px]'>Happy Client</h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-smallTextColor font-[700] text-[32px]'>
                                <CountUp start={0} end={60} duration={5} suffix='+'/>
                            </h2>
                            <h4 className='text-smallTextColor font-[600] text-[18px]'>Project Complete</h4>
                        </div>
                    </div>
                    {/* Main Count end */}
                    
                </div>
            </div>

        </section>
    );
};

export default Banner;