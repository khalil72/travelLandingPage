import React from 'react';
import Container from '../../common/container';
import { Heading } from '../../common';
import ServiceData from '../../../data/service-data';

const ServicesSection = () => {
  return (
    <Container className='relative h-full max-h-[525px]'>
      <img src='/asset/image/Group4.png' alt='text' className='absolute right-0 top-[-15px]' />
      <Heading subtitle='CATEGORY' title='We Offer Best Services' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-[65px]'>
        {ServiceData?.map((item, index) => (
          <div key={index} className='relative group'>
            <div className='w-full max-w-[302px] h-full max-h-[314px] flex flex-col items-center text-center relative z-50    group-hover:shadow-lg group-hover:h-[290px] rounded-[36px]'>
              <img src={item?.image} alt={item?.title} className='w-[60px] h-[60px] mb-5' />
              <p className='text-[15px] font-[500] mb-2'>{item.title}</p>
              <p className='text-[13px] text-subColor leading-[20px] w-full max-w-[145px] h-full max-h-[178px]'>{item.desc}</p>
            </div>
            <img
        src='/asset/image/Rectangle150.png'
        alt='img'
        className='absolute  bottom-0 z-0 left-0 w-[100px] h-[100px] opacity-0 group-hover:opacity-100 transition-opacity '
      />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesSection;
