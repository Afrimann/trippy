import React from 'react'
import Image from 'next/image'
import Reviews from './Reviews'

interface ReviewDisplayProps{
    showNextReview: ()=> void
    showPrevReview: ()=> void
    currentIndex: number
}
const Review = ({showNextReview, showPrevReview,currentIndex}: ReviewDisplayProps) => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col items-center'>
                <h2 className='heading__head'>TESTIMONIALS</h2>
                <h1 className='heading__para'>Trust our clients</h1>
            </div>

            <div className='flex items-center gap-12 mt-12'>
                <div>
                    <Image
                        src='/left.png'
                        alt='left-arrow'
                        width={100}
                        height={100}
                        className='object-contain cursor-pointer'
                        onClick={showPrevReview}
                    />

                </div>
                <div>
                    <Reviews
                        currentIndex= {currentIndex}
                    />
                </div>
                <div>
                    <Image
                        src='/right.png'
                        alt='right-arrow'
                        width={100}
                        height={100}
                        className='object-contain cursor-pointer'
                        onClick={showNextReview}
                    />
                </div>
            </div>

            <div className='levels'></div>
        </div>
    )
}

export default Review