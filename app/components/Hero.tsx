import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
    return (
        <div className='heroWrapper'>
            <div className='heroText'>
                <Image
                    src='/explore.png'
                    alt='explore the world'
                    width={200}
                    height={50}
                />

                <p className='text-[40px] font-bold max-w-[100%]  md:max-w-[300px]'>
                    Travel <span className='text-secondaryOrange'>top destination</span> of the world
                </p>
                <p className='text-gray-500 max-w-[100%] md:max-w-[80%]'>
                    We always make our customer happy by providing as many choices as possible
                </p>

                <div className='heroTextBtns'>
                    <Button
                        styles='px-6 py-1.5 text-white font-semibold font-roboto bg-primaryBlue rounded-full'
                        event={() => alert('not yet avalable')}
                        title='Get Started'
                    />
                    <Button
                        styles='px-6 py-1.5 text-secondaryOrange font-semibold font-roboto border border-secondaryOrange bg-transparent rounded-full'
                        event={() => alert('not yet avalable')}
                        title='Watch Demo'
                    />
                </div>
            </div>
            <div className='heroImageDisplay'>
                <div className='flex flex-col gap-4'>
                    <div className='image'>
                        <Image
                            src='/Rectangle 1 (1).png'
                            alt='image'
                            width={400}
                            height={100}
                            className='object-contain'
                        />
                    </div>
                    <div className='image'>
                        <Image
                            src='/Rectangle 1 (1).png'
                            alt='image'
                            width={400}
                            height={100}
                            className='object-contain'
                        />
                    </div>
                </div>
                    <div>
                        <Image 
                        src='/Rectangle 3.png'
                        alt='img'
                        width={400}
                        height={100}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Hero