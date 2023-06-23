import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='pb-16 bg-slate-300 dark:bg-[#1c2833]'>
            <div className="container">
                <h2 className=' text-headingColor font-[700] text-[2.5rem] mb-8 dark:text-headingColorDark'>Get In Touch</h2>
                <div className=" md:flex justify-center items-center">   
                    <div className=" w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-slate-200 dark:bg-slate-700 lg:px-8 py-8">
                        <form className=' w-full'>
                            <div className=' px-5 text-center'>
                                <input  className=' w-10/12 p-2 rounded outline-none text-[15px] shadow-slate-200 placeholder:text-slate-400' 
                                        placeholder='Enter Your name'
                                        
                                />
                            </div> 
                            <div className=' px-5 text-center mt-3'>
                                <input   className=' w-10/12 p-2 rounded outline-none text-[15px] shadow-slate-200 placeholder:text-slate-400'
                                         placeholder='Enter Your Email'
                                        
                                         />
                            </div> 
                            <div className=' px-5 text-center mt-5'>
                                <textarea    className=' w-10/12 p-2 rounded outline-none text-[15px] shadow-slate-200 placeholder:text-slate-400'
                                             placeholder='Enter Your message'
                                           
                                             />
                            </div>
                            <div className=" px-5 text-center mt-5">
                                <button className='border border-1 border-teal-400 bg-teal-500 w-10/12 p-2 text-[17px] font-serif cursor-pointer hover:bg-teal-300' type="submit">
                                     Send Message
                                </button> 
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
    
};

export default Contact;