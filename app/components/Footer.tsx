import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex min-h-[150px] py-4 flex-col items-center'>
            <div className='first flex flex-wrap gap-8 items-center'>
                <div className=''>
                    <h2 className='text-secondaryOrange  mb-4 '>Payment Methods</h2>
                    <p className='max-w-[50%] text-[13px]  mb-2 text-textGrey'>Pay anyway you choose we support most payment methods.</p>
                    <Image
                        src='/Frame 56.png'
                        alt='payment methods'
                        width={100}
                        height={100}
                        className='object-contain '
                    />
                </div>

                <div className=''>
                    <h2 className='text-secondaryOrange'>Links</h2>
                    <ul>
                        <li  className='text-textGrey '>Home</li>
                        <li  className='text-textGrey '>Discover</li>
                        <li  className='text-textGrey '>Special Deals</li>
                        <li  className='text-textGrey '>Contact</li>
                    </ul>
                </div>
                <div className=''>
                    <div className='second'>
                        <h2 className='text-secondaryOrange mb-2'>Contact Us</h2>
                        <p className='max-w-[60%] text-[13px] text-textGrey mb-2'>Follow us on social media and keep in touch with NaNa Cover</p>
                        <Image
                            src='/Frame 57.png'
                            alt='socials'
                            width={100}
                            height={100}
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer