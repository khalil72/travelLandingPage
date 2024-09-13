/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Container from '../../container'
import MenuData from '../../../../data/menu-data'




const NavbarLayout = () => {
  const buttonText = 'Sign Up'
  return (
    <Container className=''>
   <div className="absolute right-0 top-0 z-[-1] opacity-[100%] ">
   <img src='/asset/image/decoreimg.png' alt='Decorative image' className=" w-full h-full object-cover"/>

      </div>
     
      <header className="grid grid-cols-12 items-center w-full py-[47px] h-full max-h-[40px] z-10">
        <div className="col col-span-4  items-center">
          <img src="/asset/image/Logo.png" alt="Logo" className="w-auto h-10" />
        </div>
        <nav className="col col-span-8  justify-start space-x-10">
          {MenuData?.map((item, index) => (
            <a href={item?.href} key={index} className='font-[550] text-[16px] leading-[22px]  text-blackColor'>
              {item?.name}
            </a>
          ))}
          <button className=' rounded-[6px] border-[1px] border-blackColor h-[40px] w-[102px] text-[17px] leading-[23px]'>{buttonText}</button>
          <select className="h-[40px] text-[17px] font-[400]  leading-[23px] bg-transparent">
            <option value="en">En</option>
            <option value="fr">Fr</option>
            <option value="es">Sp</option>
            <option value="de">Ger</option>
          </select>
        </nav>
      </header>
    </Container>



  )
}

export default NavbarLayout