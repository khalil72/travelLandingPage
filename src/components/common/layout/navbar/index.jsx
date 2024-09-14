/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import Container from '../../container';
import MenuData from '../../../../data/menu-data';
import CrossSvg from '../../../svgs/cross';
import MenuSvgs from '../../../svgs/menu';
import { Link } from 'react-router-dom';

const NavbarLayout = () => {
  const buttonText = 'Sign Up';
  const [open, setOpen] = useState(false);

  return (
    <Container className=''>
      
      <div className="hidden lg:block absolute right-0 top-0 z-[-1] opacity-[100%]">
        <img src='/asset/image/decoreimg.png' alt='Decorative image' className="w-full h-full object-cover" />
      </div>

      <header className="grid grid-cols-12 items-center w-full py-4 lg:py-[47px] z-10 relative">
        
        <div className="col col-span-6 lg:col-span-4">
          <img src="/asset/image/Logo.png" alt="Logo" className="w-auto h-10" />
        </div>

    
        <div className="lg:hidden col col-span-6 flex justify-end">
          <button
            onClick={() => setOpen(!open)} 
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="focus:outline-none"
          >
            {open ? <CrossSvg /> : <MenuSvgs />}
          </button>
        </div>

      
        <nav className="hidden lg:flex col-span-8 justify-between items-center space-x-10">
          {MenuData?.map((item, index) => (
            <Link href={item?.href} key={index} className='font-[500] text-[17px] leading-[22px] text-blackColor'>
              {item?.name}
            </Link>
          ))}
          <button className='rounded-[6px] border-[1px] border-blackColor h-[40px] font-[500] w-[102px] text-[17px] leading-[23px]'>
            {buttonText}
          </button>
          <select className="h-[40px] text-[17px] font-[500] leading-[23px] bg-transparent border-none">
            <option value="en">En</option>
            <option value="fr">Fr</option>
            <option value="es">Sp</option>
            <option value="de">Ger</option>
          </select>
        </nav>

        <nav
          id="mobile-menu"
          className={`${
            open ? 'flex' : 'hidden'
          } lg:hidden flex-col items-start p-4 space-y-4 absolute top-full left-0 w-full bg-white text-black`}
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {MenuData?.map((item, index) => (
              <li key={index}>
                <Link href={item?.href} className='font-[550] text-[16px] leading-[22px] text-blackColor'>
                  {item?.name}
                </Link>
              </li>
            ))}
            <button className='rounded-[6px] border-[1px] border-blackColor h-[40px] w-full text-[17px] leading-[23px]'>
              {buttonText}
            </button>
           
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default NavbarLayout;
