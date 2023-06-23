import React, {useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';




const Header = ({darkMode, setDarkMode}) => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
 

  const stickyHeaderFunc = ()=> {
    window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop >  80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('sticky__header')
        } else {
            headerRef.current.classList.remove('sticky__header')
        }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc();

    return window.removeEventListener('scroll', stickyHeaderFunc)
  },[])

  const clickHandler = e => {
    e.preventDefault();


    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
        top: location - 80,
        left: 0
    });
  }

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu');



    return (
        <header 
            ref={headerRef}
            className='w-full h-[80px] leading-[80px]  flex items-center bg-white dark:bg-[#1c2833] '
        >
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/* logo */}
                    <Link to='/home' className='flex items-center gap-[10px]'>
                        <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
                        rounded-full flex items-center justify-center dark:text-white'>
                            R
                        </span>
                        <div className='leading-[20px]'>
                            <h2 className='text-xl text-smallTextColor font-[700] dark:text-smallTextColorDark'>Reza</h2>
                            <p className='text-smallTextColor text-[14px] font-[500] dark:text-smallTextColorDark'>dehghan</p>
                        </div> 
                    </Link>
                    {/* logo end */}
                    {/* Menu start */}
                    <div className={
                            setDarkMode(darkMode) ? "menu" : "menuDark"
                    } onClick={toggleMenu} ref={menuRef}> 
                        <ul className='flex items-center gap-10'>
                            <li>
                                <a 
                                    onClick={clickHandler}
                                    className='text-smallTextColor sm:text-white font-[600] dark:text-smallTextColorDark' 
                                    href='#about'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    onClick={clickHandler}
                                    className='text-smallTextColor font-[600] sm:text-white dark:text-smallTextColorDark' 
                                    href='#experiance'>
                                    Experiance
                                </a>
                            </li>
                            <li>
                                <a 
                                    onClick={clickHandler} 
                                    className='text-smallTextColor font-[600] sm:text-white dark:text-smallTextColorDark' 
                                    href='#portfolio'>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={clickHandler}
                                    className='text-smallTextColor font-[600] sm:text-white dark:text-smallTextColorDark' 
                                    href='#contact'>
                                    Contact                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Menu End */}
                    {/* Menu right */}
                    <div className='flex items-center gap-4'>
                        <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-smallTextColor
                            py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in
                            duration-300 dark:text-smallTextColorDark dark:border-smallTextColorDark                      
                        '>
                            <i className="ri-send-plane-line"></i><a href='mailto:rezadd7@gmail.com'> Let's Talk</a>
                        </button>

                        <span 
                               onClick={() => setDarkMode(!darkMode)}
                                className=' text-[22px] cursor-pointer'>
                                        <i className="ri-moon-clear-fill dark:text-white"></i>        
                                </span>

                        <span 
                            onClick={toggleMenu}
                            className='text-2xl md:hidden cursor-pointer'>
                            <i className="ri-menu-line dark:text-white"></i>
                        </span>
                    </div>
                    {/* Menu-right */}

                </div>
            </div>
        </header>
    );
};

export default Header;