/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Container from '../../common/container';
import { Button, Heading } from '../../common';
import SubcribeLine1 from '../../svgs/subcribeline1';
import SubscribeLine2 from '../../svgs/subscribe-line2';
import SubscribeNavigation from '../../svgs/subcribe-navigation';

const SubscribeSection = () => {
    return (
        <Container className='relative rounded-custom h-full lg:max-h-[407px]  p-5 lg:p-10 pt-16 lg:pt-20'>
            <button className='hidden lg:block absolute top-0 lg:top-[-25px]  lg:right-[-18px] z-10 '>
           <SubscribeNavigation />             
            </button>
           
       
            <div className='absolute inset-0 before:rounded-custom  z-0 before:content-[""] before:absolute before:inset-0 before:bg-custombg before:opacity-[20%]'></div>

            
            <div className=' lg:block absolute top-0  right-[0px]  '>
            <SubscribeLine2 />
            </div>
            

            <div className='relative w-full max-w-[881px] flex flex-col justify-center mx-auto z-50'>
            
                <Heading 
                    title='Subscribe to get information, latest news and other interesting offers about Jadoo'
                    className={{ 
                        title: 'text-subColor !text-[33px] !leading-[54px] !font-[600] !text-center !items-center mx-5' 
                    }}
                />
                <form className='flex  flex-col lg:flex-row justify-center items-center gap-4 my-10'>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none'>
                            <img src='/asset/image/email.png' alt='Email Icon' className='w-5 h-5' />
                        </div>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full lg:w-[421px] lg:max-w-[421px] pl-12 p-4 rounded-md border border-gray-300 shadow-md'
                        />
                    </div>
                    <Button
                        text='Subscribe'
                        className='bg-orange-500 lg:!max-w-[180px]'
                    />
                </form>
            </div>

            {/* Background Image with Opacity */}
            <div className='absolute bottom-0 top-[135px] left-8  opacity-[7%] z-0 overflow-hidden'>
           <SubcribeLine1 />

            </div>
        </Container>
    );
};

export default SubscribeSection;
