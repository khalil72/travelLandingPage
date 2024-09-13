import React from 'react';
import Container from '../../container';
import Heading from '../../heading';
import FooterData from '../../../../data/footer-data';

const FooterLayout = () => {
  return (
    <footer className='py-[105px] '>
      <Container>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          <div className='w-full max-w-[207px] h-full max-h-[133px] mb-8 md:mb-0'>
            <Heading title={'Jadoo'} className='text-[20px] !items-start' />
            <p className='text-[13px] font-[400] text-subColor'>
              Book your trip in a minute, get full control for much longer.
            </p>
          </div>
          
          <div className='w-full max-w-[474px] h-full max-h-[153px]'>
            <div className='flex justify-between gap-8'>
              {FooterData?.map((section) => (
                <div>
                  <div key={section.id} className='w-full md:w-auto'>
                  <Heading title={section.title} className={{title:'lg:!text-[21px]'}} />
                  <ul className='space-y-2'>
                    {section.menu.map((item) => (
                      <li key={item.id}>
                        <a href={item.to} className='text-base text-blackColor hover:underline'>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
                
              ))}
            </div>
          </div>
          <div className='ww-full max-w-[214px] h-full max-h-[217px]'></div>
        </div>
      </Container>
    </footer>
  );
}

export default FooterLayout;
