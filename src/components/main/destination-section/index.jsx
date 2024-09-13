import React from 'react'
import Container from '../../common/container'
import { Heading } from '../../common'
import Card from '../../common/card'
import DesinationData from '../../../data/desination-data'
import { Link } from 'react-router-dom'

const DestinationSection = () => {
  return (
    <Container className=''>
      <Heading subtitle={'Top Selling'} title={'Top Destinations'}/>
      
      <div className='flex flex-col  lg:flex-row justify-between gap-8  my-[65px]'>
        {DesinationData?.map((item,index)=>(
           <Card className='p-0 m-0 w-full rounded-[24px]' key={index}>
           <img src={item?.image}  alt='img' className='h-[307px] object-cover rounded-t-[24px]'/>
           <div className='p-7'>
           <div className='flex justify-between mb-5'>
            <p className='text-[18px] font-[400] leading-[22px] text-subColor'>{item?.text}</p>
            <p className='text-[18px] font-[400] leading-[22px] text-subColor'>{item?.price}</p>
           </div>
           <Link href='/' className='flex gap-2'>
              
             <img src='/asset/image/navigation.png' alt='navigation' />
              <p className='text-[14px] font-[400] leading-[20px]'>{item?.tourPlan}</p>
             
           
           </Link>
           </div>
           
           
         </Card>

        ))}
     
      
      </div>
     

    </Container>
  )
}

export default DestinationSection