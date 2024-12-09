import { ServiceCardProps } from '@/types'
import React from 'react'
import Image from 'next/image'

const ServiceCard = ({ title, img, description, aos, delay }: ServiceCardProps) => {
  return (
    <div data-aos={aos} data-aos-delay={delay} className='serviceCard'>
      <div className='serviceImage'>
        <Image
          src={img}
          alt='service'
          width={50}
          height={50}
          className='object-contain'
        />
      </div>
      <div className='serviceTitle font-bold'>
        <h2>{title}</h2>
      </div>
      <div className='serviceDescription'>
        <p className='px-2 text-[14px] text-headingBlue'>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard