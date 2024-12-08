'use client'
import { ReviewDetails } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

interface ReviewIndexProps{
    currentIndex: number
}
const Reviews = ({currentIndex}: ReviewIndexProps) => {

    // client review details
    const currentReview = ReviewDetails[currentIndex]; // Fetch the current review

    return (
        <div>

            <div
                className='flex flex-col gap-4 items-center'
            >
                <Image
                    src={currentReview.image}
                    alt='client image'
                    width={150}
                    height={150}
                    className='object-contain'
                />

                <div>
                    <span className='text-secondaryOrange font-semibold'>{currentReview.name} / </span><span className='text-headingBlue'>{currentReview.role}</span>
                </div>
                <Image
                    src='/Frame 52.png'
                    alt='ratings'
                    width={200}
                    height={50}
                    className='object-contain'
                />

                <span className='text-center max-w-[70%]'>
                    {currentReview.desc}
                </span>
            </div>

        </div>
    )
}

export default Reviews