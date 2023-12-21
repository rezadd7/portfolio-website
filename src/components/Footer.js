import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className=' bg-[#12141e] pt-12 dark:bg-[#182737]'>
            
            {/* Footer top */}
                <div className="container">
                    <div className=" sm:flex items-center justify-between md:gap-8">
                        

                    <div className=" w-full  flex items-center gap-4 flex-wrap md:gap-8 mt-10 text-center justify-center">
                                
                                <span className=' w-[35] h-[35] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                    <a  href="https://github.com/rezadd7" 
                                        target='blank'
                                        className=' text-gray-300 font-[500] text-[18px] dark:text-smallTextColorDark'>
                                        <i className="ri-github-line text-white"></i>
                                    </a>
                                </span>
                                <span className=' w-[35] h-[35] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                    <a  href="https://www.linkedin.com/in/reza-dehghan-18a238201" 
                                        target='blank'
                                        className=' text-gray-300 font-[500] text-[18px] dark:text-smallTextColorDark'>
                                        <i className="ri-linkedin-box-fill text-white"></i>
                                    </a>
                                </span>
                                <span className=' w-[35] h-[35] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                                    <a  href="#" 
                                        target='blank'
                                        className=' text-gray-300 font-[500] text-[18px] dark:text-smallTextColorDark'>
                                        <i className="ri-instagram-line text-white"></i>
                                    </a>
                                </span>
                    </div>
                        

                    </div>

                    <div>
                        <ul className='flex items-center gap-10 mt-10 justify-center'>
                            <li>
                                <a className='text-gray-400 font-[600] dark:text-smallTextColorDark' href='#about'>About</a>
                            </li>
                            <li>
                                <a className='text-gray-400 font-[600] dark:text-smallTextColorDark' href='#services'>Services</a>
                            </li>
                            <li>
                                <a className='text-gray-400 font-[600] dark:text-smallTextColorDark' href='#experiance'>Experiance</a>
                            </li>
                            <li>
                                <a className='text-gray-400 font-[600] dark:text-smallTextColorDark' href='#contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className=" items-center justify-center sm:justify-between mt-5 text-center">
                                <p className=' text-gray-200 text-[14px] dark:text-smallTextColorDark'>
                                    Copyright {year} Developed by Rezadd7 - All right reserved
                                </p>
                    </div>
                  

                </div>
            {/* footer top end */}
        </footer>
    );
};

export default Footer;