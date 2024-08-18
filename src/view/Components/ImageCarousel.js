import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/CaroselImages/Consulting.jpg'
import img2 from '../../assets/CaroselImages/Strategic marketing.jpg'
import img3 from '../../assets/CaroselImages/Training.jpg'
import img4 from '../../assets/CaroselImages/small-factory.jpg'

const img = [img1 , img2 , img3 , img4];


function ImageCarousel() {
  return (
    <>
    <div className="w-2/3"> 
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        className="rounded-lg shadow-lg "
      >
        {img.map((image, index) => (
          <div key={index} > 
            <img
              src={image}
              className="w-full h-64 object-contain" 
            />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  )
}

export default ImageCarousel
