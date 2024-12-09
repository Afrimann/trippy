import React from 'react'

const Newsletter = () => {
  return (
    <div className='Newsletter w-[600px] h-[250px] bg-bgGreen rounded-xl'>
        <div className='wrapper flex flex-col items-center mt-8 gap-5'>
            <span className="title text-white font-bold mb-4">
                SUBSCRIBE TO OUR NEWSLETTER
            </span>
            <h1 className='text-white font-bold text-[27px] px-8 leading-[1.6rem] text-center'>Prepare yourself & let’s explore the beauty of the world</h1>

            <div className='input flex gap-4'>
                <input type="email" placeholder={ ` Your Email`} className='px-8 py-3 rounded-full focus: outline-none' />
                <label htmlFor="email" className='px-8 py-3 bg-secondaryOrange rounded-full cursor-pointer text-white font-bold'>Subscribe</label>
            </div>
        </div>
    </div>
  )
}

export default Newsletter