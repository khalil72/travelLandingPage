import React from 'react'
import Slider from 'react-slick';
import { Heading } from '../../../common';

const TextSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
 <Slider {...settings}>
        <div>
        <Heading
            title={'What people say about Us'} 
            subtitle={'Testimonials'}
            className='!items-start !text-start'
          />
        </div>
        <div>
        <Heading
            title={'What people say about Us'} 
            subtitle={'Testimonials'}
            className='!items-start !text-start'
          />
        </div>
        <div>
        <Heading
            title={'What people say about Us'} 
            subtitle={'Testimonials'}
            className='!items-start !text-start'
          />
        </div>
       
       
        
        
      </Slider>
    </div>
  )
}

export default TextSlider