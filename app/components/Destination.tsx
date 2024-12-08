import { DestinationProps } from '@/types'
import React from 'react'
import Image from 'next/image'

const Destination = ({ image, name, location, price, rate, alt }: DestinationProps) => {
    return (
        <div className='destinationCard'>
            <div className='dest__image'>
                <Image
                    src={image}
                    alt={alt}
                    width={200}
                    height={100}
                    className='object-cover w-[100%] z-10'
                />
            </div>
            <div className='dest__details z-[100]'>
                <span className='flex gap-5'>
                    <p className='text-primaryBlue'>{name}</p>
                    <p>{price}</p>
                </span>
                <span>
                    {location}
                </span>
                {/* remember to put an icon (the star icon) */}
                <span className='flex'>{rate}
                    <Image
                        src='/right.png'
                        alt='ratings'
                        width={20}
                        height={20}
                        className='object-contain'
                    />
                </span>
            </div>
        </div>
    )
}

export default Destination