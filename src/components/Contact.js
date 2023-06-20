import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='pb-16'>
            <div className="container">
                <h2 className=' text-headingColor font-[700] text-[2.5rem] mb-8 dark:text-headingColorDark'>Get In Touch</h2>
                <div className=" md:flex justify-between items-center">
                    <div className=" w-full md:w-1/2 h-[450px] sm:h-[450]">
                    <iframe title='google-maps' 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.07543742796!2d51.182848338456246!3d35.70774021645276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1686903278922!5m2!1sen!2s" 
                            className=' border-0 w-full h-full'
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                    <div className=" w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 lg:px-8 py-8 dark:bg-[#1c2833]">
                        <form className=' w-full'>
                            <div className=" mb-5">
                                <input  type="text" 
                                        placeholder='Enter Your Name' 
                                        className=' w-full p-3 focus:outline-none rounded-lg'/>
                            </div>
                            <div className=" mb-5">
                                <input  type="text" 
                                        placeholder='Enter Your Email' 
                                        className=' w-full p-3 focus:outline-none rounded-lg'/>
                            </div>
                            <div className=" mb-5">
                                <textarea   type="text" 
                                            rows={3}
                                            placeholder='Subject' 
                                            className=' w-full p-3 focus:outline-none rounded-lg'/>
                            </div>

                            <button className=' w-full p-3 focus:outline-none rounded-[5px] bg-primaryColor hover:bg-headingColor text-white text-center ease-linear duration-150'>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
    
};

export default Contact;