import React from 'react';
import Container from '../../common/container';
import TextSlider from './text-slider';
import CardSlider from './card-slider';


const TestimonialsSection = () => {
  

  return (
    <Container className='py-[110px] h-full max-h-[356px] relative'>
    <div className="grid grid-cols-12 gap-4">
      
      <div className='col-span-4'>
        <div className='w-full lg:w-[409px]'>
          <TextSlider />
        </div>
      </div>
  
      <div className='col-span-8 '>
       <CardSlider />
      </div>
    </div>
  </Container>
  
  );
};

export default TestimonialsSection;
