
import React, { useEffect, useState } from 'react'

import p1 from '../../assets/PartnersImages/pirelli.jpg';
import p2 from '../../assets/PartnersImages/cg.png';
import p3 from '../../assets/PartnersImages/ceat.avif'

import p4 from '../../assets/PartnersImages/tata.svg';

import { Carousel } from 'react-responsive-carousel';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Partners() {

    const [activeIndex, setActiveIndex] = useState(0);

    const partners = [
        p1,p2,p3,p4
    ]
    

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
        }, 2000); // Change card every 2 seconds
        return () => clearInterval(interval);
    }, []);

    const getTranslateValue = () => {
        if (activeIndex >= partners.length - 3) {
            return `translateX(-${(partners.length - 3) * (100 / 3)}%)`;
        }
        return `translateX(-${activeIndex * (100 / 3)}%)`;
    };
  return (
   
    <div className='grid justify-items-center  p-2'>
                <div className="overflow-hidden w-9/12  mx-auto ">
                    <div className="flex transition-transform duration-500 ease-out p-2 " style={{ transform: getTranslateValue() }}>
                        {partners.map((imageUrl, index) => (
                            <div key={index} className={`flex-shrink-0 w-[20%] h-24 sm:h-32 md:h-48 mx-[7.5%]`}>
                                <div className="p-4 bg-gray-50 shadow-lg rounded-lg h-full flex items-center justify-center">
                                 <img src={imageUrl} alt="Card" className="w-full h-full object-contain rounded-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default Partners
