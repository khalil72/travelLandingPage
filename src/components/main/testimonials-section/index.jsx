import React from 'react';
import Container from '../../common/container';
import { Heading } from '../../common';
import Slider from 'react-slick';
import TestimonailData from '../../../data/testimonial-data'; // Import your testimonial data
import Card from '../../common/card';


const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <Container className='py-[110px] h-full max-h-[356px]'>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        
        <div className='w-full lg:w-[409px]'>
          <Heading 
            title={'What people say about Us'} 
            subtitle={'Testimonials'}
            className='!items-start !text-start'
          />
        </div>

  
        <div className="slider-container w-full lg:w-[669px] h-full max-h-[356px] flex justify-end mx-auto items-end">
          <Slider {...settings} className="w-full flex justify-end">
            {TestimonailData?.map((testimonial, index) => (
              <div key={index} className="testimonial-slide flex justify-end relative">
                <Card className='shadow-md w-[335px] h-[auto] p-6 rounded-md mx-auto justify-end '>
                 
                  <p className="text-[16px] font-[400] leading-[32px] mb-4">{testimonial.desc}</p>
                  <h4 className="font-bold text-[18px]">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.address}</span>
                  
                  <img src={testimonial?.image}  alt='testimonial' className='absolute-0 top-0 left-0 w-[56px] h-[56px] rounded-[50%]'/>
                </Card>
              
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
