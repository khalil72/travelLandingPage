import React from 'react';
import Container from '../../container';
import Heading from '../../heading';
import FooterData from '../../../../data/footer-data';
import CopyRight from './copy-right';
import { Link } from 'react-router-dom';
import FacebookSvg from '../../../svgs/facebook';

const FooterLayout = () => {
  return (
    <footer className='lg:py-[105px] pb-[20px] lg:pb-[40px] '>
      <Container className='h-full lg:max-h-[153px] mb-10 md:mb-15 lg:mb-20'>
        <div className='flex flex-col lg:flex-row  justify-between lg:items-start'>
          <div className='w-full lg:max-w-[207px] h-full lg:max-h-[133px] mb-8 md:mb-0'>
            <Heading title={'Jadoo'}  className='lg:!items-start !text-[25px] lg:!text-[44px]'  />
            <p className='text-[13px] font-[400] text-subColor md:text-center lg:text-start'>
              Book your trip in a minute, get full control for much longer.
            </p>
          </div>
          
          <div className='w-full lg:max-w-[474px] h-full lg:max-h-[153px]'>
            <div className='flex flex-col lg:flex-row   lg:justify-between gap-0'>
              {FooterData?.map((section) => (
                  <div key={section.id} className='w-full md:w-auto'>
                  <Heading title={section.title} className={{title:'lg:!text-[21px]'}} />
                  <ul className='space-y-1 text-center lg:text-start'>
                    {section.menu.map((item) => (
                      <li key={item.id}>
                        <Link href={item.to} className='text-[15px] font-[400] text-blackColor hover:underline'>
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                
                </div>
                
              ))}
            </div>
          </div>
          <div className='w-full lg:max-w-[214px] h-full lg:max-h-[217px] my-5 lg:my-3'>
            <div className='flex gap-2 justify-center items-center  '>
              <Link href='/'>
           <FacebookSvg />
              </Link>
              <Link href='/'>
              <img src='/asset/image/instagram.png' alt='instagaram' />
              </Link>
              <Link href='/'>
              <img src='/asset/image/skype.png' alt='skype' />
              </Link>
            </div>
            <div className='w-full md:w-auto my-2'>
              <p className='text-center text-[20px] font-serif font-[400] text-blackColor'>Discover our app</p>
            </div>
            <div className='flex justify-center  flex-row gap-2'>
              <Link href='/'>
              <img src='/asset/image/GooglePlay.png' alt='playstore' />
              </Link>
              <Link href='/'>
              <img src='/asset/image/PlayStore.png' alt='playstore' />
              </Link>
            </div>
          </div>
        </div>

        
      </Container>

      
        <CopyRight />
    
    </footer>
  );
}

export default FooterLayout;
