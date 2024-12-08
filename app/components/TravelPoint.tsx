import { TravelPointDetails } from '@/constants';
import React from 'react';
import Image from 'next/image';

const TravelPoint = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Section */}
            <div className="flex-1 box-border h-[400px] md:h-[500px]">
                <div className="heading mb-2">
                    <h2 className="heading__head text-2xl font-bold">Travel Point</h2>
                    <p className="heading__para max-w-[80%] md:max-w-[50%] text-gray-600">
                        We’re helping you find your dream location
                    </p>
                </div>
                <div className="para mb-2 text-gray-500 leading-relaxed">
                    We help you discover your ideal destination with tailored recommendations. Find your dream location effortlessly for an unforgettable journey.
                </div>
                <div className="flex flex-wrap gap-4">
                    {TravelPointDetails.map((det, index) => (
                        <div
                            key={index}
                            className="frame w-[38%] bg-transparent shadow-md p-4 rounded-md flex flex-col items-start"
                        >
                            <h2 className="text-[14px] font-bold text-gray-800">{det.num}</h2>
                            <h2 className="text-[12px] text-gray-600">{det.package}</h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section: Images */}
            <div className="image flex-1 relative">
                <div className="relative w-full h-[400px] md:h-[500px]">
                    {/* Background image */}
                    <Image
                        src="/Rectangle 5.png"
                        alt="Background"
                        layout="fill"
                        className="object-contain z-0"
                    />
                    {/* Foreground image */}
                    <Image
                        src="/Group 1.png"
                        alt="Ambassador"
                        layout="fill"
                        className="object-contain z-10"
                    />
                </div>
            </div>
        </div>
    );
};

export default TravelPoint;
