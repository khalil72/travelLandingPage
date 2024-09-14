import React from 'react';
import Container from '../../common/container';
import TextSlider from './text-slider';
import CardSlider from './card-slider';

const TestimonialsSection = () => {
  return (
    <Container className='lg:py-[110px] h-full lg:max-h-[356px] relative'>
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className='col-span-12 lg:col-span-4  mb-5 lg:mb-0'>
          <div className='w-full lg:w-[409px]'>
            <TextSlider />
          </div>
        </div>
        <div className='col-span-12 lg:col-span-8 '>
          <CardSlider />
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
