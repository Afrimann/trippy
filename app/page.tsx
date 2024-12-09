'use client'

import React, { useEffect, useState } from 'react'
import { Header, Review, TravelPoint } from './components'
import { Hero } from './components'
import SponsorsList from './components/Sponsors'
import { ListofDestination, ReviewDetails, Services } from '@/constants'
import ServiceCard from './components/ServiceCard'
import TopDestinations from './components/TopDestination'
import Image from 'next/image'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { log } from 'console'

const Page = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out when scrolling past them
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0)
  const [extreme, setExtreme] = useState(false)
  console.log(extreme);
  

  const showNexReview = () => {
    if (currentIndex < ReviewDetails.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setExtreme(false)
    }
    else {
      const lastLine = ReviewDetails.length - 1
      setExtreme(true)
      setCurrentIndex(lastLine)
    }
  }

  const showPrevReview = () => {
    if (currentIndex === 0) {
      setExtreme(true)
      setCurrentIndex(0)
    }
    else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className='bg-backgroundWheat min-h-[100vh] w-full px-5 md:px-12 flex flex-col overflow-hidden'>
      <section className='flex items-center justify-center mt-4'>
        <Header />
      </section>

      <section className="hero" id='home'>
        <Hero />

        <div className='Sponsors  w-[80%]'>
          <SponsorsList />
        </div>
      </section>

      <section className="services w-[100%] px-24 flex flex-col mt-12" id='discover'>
        <div className=''>
          <h2 data-aos='fade-in-right' className='heading__head'>Services</h2>
          <p data-aos='fade-down-left' className='heading__para'>Our top value categories for you</p>
        </div>

        <div className='serviceList mt-8 mb-8'>
          {
            Services.map
              ((service, index) =>
              (
                <ServiceCard
                  aos='fade-up'
                  delay={`${index * 200}`}

                  title={service.title}
                  description={service.description}
                  img={service.img}
                  key={index}

                />
              ))
          }
        </div>
      </section>

      <section className='topDestinations' id='specials'>
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

      <section className='review mb-12'>
        <Review
          showNextReview={showNexReview}
          showPrevReview={showPrevReview}
          currentIndex={currentIndex}
        />
      </section>

      <section className='newsletter w-full flex flex-col items-center mb-12' id='contact'>
        <Newsletter />
      </section>

      <section className='footer bg-bgGrey w-{100%} overflow-hidden p-0 m-0'>
        <Footer />
      </section>
    </div>
  )
}

export default Page