import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className=' bg-[#12141e] pt-12'>
            
            {/* Footer top */}
                <div className="container">
                    <div className=" sm:flex items-center justify-between md:gap-8">
                        <div className=" w-full sm:w-1/2">
                            <h2 className=" text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                                Lorem ipsum dolor sit amet.
                            </h2>
                            <a href='#contact'>
                                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                                        hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] 
                                    '><i class="ri-mail-line" ><span className='ml-2'>Here Me</span></i></button>
                            </a>
                        </div>

                        <div className=" w-full sm:w-1/2">
                            <p className=' text-gray-300 leading-7 mt-4 sm:mt-0'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nobis impedit, nisi libero officiis delectus!
                            </p>

                            <div className=" flex items-center gap-4 flex-wrap md:gap-8 mt-10">
                                <span className=' text-gray-300 font-[600] text-[15px]'>
                                    Follow Me:
                                </span>

                                <span className=' w-[35] h-[35] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                    <a href="#github" className=' text-gray-300 font-[500] text-[18px]'>
                                        <i class="ri-github-line text-white"></i>
                                    </a>
                                </span>
                                <span className=' w-[35] h-[35] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                    <a href="#linkdin" className=' text-gray-300 font-[500] text-[18px]'>
                                        <i class="ri-linkedin-box-fill text-white"></i>
                                    </a>
                                </span>
                                <span className=' w-[35] h-[35] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                    <a href="#instagram" className=' text-gray-300 font-[500] text-[18px]'>
                                        <i class="ri-instagram-line text-white"></i>
                                    </a>
                                </span>
                            </div>
                        </div>

                    </div>

                    <div>
                        <ul className='flex items-center gap-10 mt-10 justify-center'>
                            <li>
                                <a className='text-gray-400 font-[600]' href='#about'>About</a>
                            </li>
                            <li>
                                <a className='text-gray-400 font-[600]' href='#services'>Services</a>
                            </li>
                            <li>
                                <a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a>
                            </li>
                            <li>
                                <a className='text-gray-400 font-[600]' href='#contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            {/* footer top end */}
            {/* footer bottom */}
            <div className=" bg-[#1b1e29] py-5 mt-4">
                <div className="container">
                    <div className=" flex items-center justify-center sm:justify-between">
                        <div className=" hidden sm:block">
                            <div className=" flex items-center gap-[10]">
                                <span className=' w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>R</span>

                                <div className=" leading-[20px]">
                                    <h2 className='text-gray-200 font-[500] text-[18px]'>Reza Dehghan</h2>
                                    <p className="text-gray-400 font-[300] text-[12px]">Frontend developer</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <p className=' text-gray-200 text-[14px]'>Copyright {year} Developed by Rezadd7 - All right reserved</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* footer bottom end */}


        </footer>
    );
};

export default Footer;