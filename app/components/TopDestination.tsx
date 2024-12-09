import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import Destination from './Destination'; // Assuming you have a Destination component
import { DestinationProps } from '@/types';

const TopDestinations = ({ListofDestination}: any) => {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentIndex < ListofDestination.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first slide
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(0); // Loop back to the last slide
    }
  };

  return (
    <div className="destinations mt-24 min-w-[200%] mb-8 mx-24">
      <div className="flex gap-[30%] items-center">
        <div className="heading">
          <h2 className="heading__head">Top Destinations</h2>
          <p className="heading__para">Explore top destinations</p>
        </div>
        <div className="arrows flex">
          <Image
            src="/left.png"
            alt="left arrow"
            width={60}
            height={60}
            className="object-contain cursor-pointer"
            onClick={prevSlide} // Navigate to previous slide
          />
          <Image
            src="/right.png"
            alt="right arrow"
            width={60}
            height={60}
            className="object-contain cursor-pointer"
            onClick={nextSlide} // Navigate to next slide
          />
        </div>
      </div>

      <div
        className="destination__lists mt-6 w-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide the content based on index
      >
        {ListofDestination.map((list:DestinationProps, index:string) => (
          <Destination
            image={list.image}
            alt={list.alt}
            name={list.name}
            location={list.location}
            price={list.price}
            rate={list.rate}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
