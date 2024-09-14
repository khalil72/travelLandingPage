import React from 'react';
import Container from '../../common/container';
import { Heading } from '../../common';
import ServiceData from '../../../data/service-data';


const ServicesSection = () => {
  return (
    <Container className='relative h-full lg:max-h-[525px]'>
      <img src='/asset/image/Group4.png' alt='text' className='hidden lg:block absolute right-0 top-[-15px]' />
      <Heading subtitle='CATEGORY' title='We Offer Best Services' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-[65px]   '>
        {ServiceData?.map((item, index) => (
          <div key={index} className={`relative group ${index === 0 ? 'z-[48]' : 'z-[50]'}`}>
            <div className='bg-white w-full lg:max-w-[302px] z-0 h-full max-h-[314px] flex flex-col items-center text-center relative   group-hover:shadow-lg  rounded-[36px] pt-[20px] pb-[20px]'>
              <div className='lg:h-[100px] mb-[10] overflow-hidden' >
                <item.image />
              </div>
              <div className='lg:pb-[20px]'>
                <p className='text-[18px] font-[600] mb-2 my-10 font-sans'>{item.title}</p>
                <p className='text-[14px] font-[400] font-sans text-subColor leading-[20px] w-full max-w-[145px] h-full max-h-[178px] '>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='/asset/image/Rectangle150.png'
        alt='img'
        className='hidden lg:block absolute  bottom-[-25px] z-[49] left-[23%]  w-[100px] h-[100px]  group-hover:opacity-100 transition-opacity '
      />
    </Container>
  );
};

export default ServicesSection;
