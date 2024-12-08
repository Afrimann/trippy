import React from 'react'
import { Sponsors } from '@/constants'
import Image from 'next/image'
const SponsorsList = () => {
    return (
        <div className='SponsorsList'>
            {
                Sponsors.map((sponsor) => (
                    <div
                        key={sponsor.id}
                    >
                        <Image
                            src={sponsor.img}
                            alt={sponsor.alt}
                            width={125}
                            height={100}
                            className='boject-contain'
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SponsorsList