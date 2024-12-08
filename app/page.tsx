'use client'

import React from 'react'
import { Header, Review, Sponsors, TravelPoint } from './components'
import { Hero } from './components'
import SponsorsList from './components/Sponsors'
import { ListofDestination, Services } from '@/constants'
import ServiceCard from './components/ServiceCard'
import TopDestinations from './components/TopDestination'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-backgroundWheat min-h-[100vh] w-full px-5 md:px-12 flex flex-col overflow-hidden'>
      <section className='flex items-center justify-center mt-4'>
        <Header />
      </section>

      <section className="hero">
        <Hero />

        <div className='Sponsors  w-[80%]'>
          <SponsorsList />
        </div>
      </section>

      <section className="services w-[100%] px-24 flex flex-col mt-12">
        <div className=''>
          <h2 className='heading__head'>Services</h2>
          <p className='heading__para'>Our top value categories for you</p>
        </div>

        <div className='serviceList mt-8 mb-8'>
          {
            Services.map
              ((service, index) =>
              (
                <ServiceCard

                  title={service.title}
                  description={service.description}
                  img={service.img}
                  key={index}

                />
              ))
          }
        </div>
      </section>

      <section className='topDestinations'>
        <TopDestinations
          ListofDestination={ListofDestination} />;

      </section>

      <section className='travelPoint mt-12 ml-24 w-[100%] overflow-hidden'>
        <TravelPoint />
      </section>

      <section className='keyFeautures mt-12 mx-24 w-full flex items-center gap-12 mb-12'>
        {/* left side */}
        <div className='image '>
          <Image
            src='/Group 3.png'
            alt='group'
            width={500}
            height={500}
            className='object-contain'
          />
        </div>

        {/* right side */}
        <div className='w-[430px] h-[300px] flex flex-col gap-3 '>
          <div className="head">
            <h2 className='heading__head'>key features</h2>
            <h2 className='heading__para'>We offer best services</h2>
          </div>
          <div>
            <p>We help you discover your ideal destination with tailored reccomendations. Find your dream locations effortlessly for an unforgettable journey.</p>
          </div>
          <div className='flex gap-4 border border-textSecondary items-center p-2 rounded-lg'>
            <span className='image'>
              <Image
                src='/image 2.png'
                alt='icon'
                width={50}
                height={50}
                className='object-contain'
              />
            </span>
            <span className='content'>
              <h3 className='text-secondaryOrange font-semibold text-[15px]'>Get the best recommendations
              </h3>
              <h3 className='text-headingBlue text-[13px]'>It has roots in a piece of classical</h3>
            </span>
          </div>
          <div className='flex gap-4 border border-textSecondary items-center p-2 rounded-lg'>
            <span className='image'>
              <Image
                src='/image 5.png'
                alt='icon'
                width={50}
                height={50}
                className='object-contain'
              />
            </span>
            <span className='content'>
              <h3 className='text-secondaryOrange font-semibold text-[15px]'>Schedule trips</h3>
              <h3 className='text-headingBlue text-[13px]'>It has roots in a piece of classical</h3>
            </span>
          </div>
        </div>
      </section>

      <section className='review'>
        <Review />
      </section>
    </div>
  )
}

export default page