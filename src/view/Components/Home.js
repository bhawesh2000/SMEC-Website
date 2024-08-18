import React, { useEffect, useState } from 'react'
import ImageCarousel from './ImageCarousel'
import { Card, CardContent, CardMedia, CardHeader, CardActionArea, Typography } from '@mui/material'
import Partners from './Partners'
// import {partners} from './Partners';

function Home() {
    // const [activeIndex, setActiveIndex] = useState(0);

    // const getTranslateValue = () => {
    //     // Ensure that after displaying the last set of 3 cards, it wraps around smoothly
    //     if (activeIndex >= partners.length - 3) {
    //         return `translateX(-${(partners.length - 3) * (100 / 3)}%)`;
    //     }
    //     return `translateX(-${activeIndex * (100 / 3)}%)`;
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
    //     }, 1000); // Change card every 3 seconds
    //     return () => clearInterval(interval);
    //   }, [partners.length]);

  return (
   
    <div className="flex flex-col justify-center items-center w-full h-full gap-4">
      <ImageCarousel />
      <div className='flex flex-col gap-8   '>
        <div className='flex flex-col   gap-2 '>
            <h1 className='text-center font-bold text-[40px] text-[#42474B]'>Who Are We?</h1>
            <div className='grid justify-items-center '>
            <p className='text-center font-[Poppins] p-4   w-2/3'>
            SMEC is a one-stop solution for lighting and household electrical devices. We provide a variety of products through our robust B2B network . We are transforming the ecosystem through technology.
            </p>
            </div>
            
        </div>
        <div className='flex flex-col gap-6 '>
            <h1 className='text-center font-bold text-[24px] text-[#32cedc]'>Verticals</h1>
            <div className='grid  sm:grid-cols-2 gap-8 justify-items-center'>
            <Card sx={{ width: 350 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                image="/img/Strategic-marketing.jpg"
                alt="Strategic Marketing"
                style={{ height: "150px", objectFit: "cover" }}
            />
            <CardContent>
                
                <Typography variant="body2" color="text.secondary"
                 sx={{ fontWeight: 'bold', fontSize: '18px' }}
                >
                Strategic Marketing

                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            <Card sx={{ width: 350 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                image="/img/small-factory.jpg"
                alt="Contract Manufacturing"
                style={{ height: "150px", objectFit: "cover" }}
                
            />
            <CardContent>
                
                <Typography variant="body2" color="text.secondary"
                 sx={{ fontWeight: 'bold', fontSize: '18px' }}
                
                >
                Contract Manufacturing

                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            <Card sx={{ width: 350 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                image="/img/Consulting.jpg"
                alt="Consultancy- Energy Audit and GHG Emissions"
                style={{ height: "150px", objectFit: "cover" }}

            />
            <CardContent>
                
                <Typography variant="body2" color="text.secondary"
                 sx={{ fontWeight: 'bold', fontSize: '18px' }}
                
                >
                Consultancy- Energy Audit and GHG Emissions

                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            <Card sx={{ width: 350 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                image="/img/training.jpg"
                alt="Training and Development"
                style={{ height: "150px", objectFit: "cover" }}

            />
            <CardContent>
                
                <Typography variant="body2" color="text.secondary"
                 sx={{ fontWeight: 'bold', fontSize: '18px' }}
                >
                Training and Development


                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
            </div>
            
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[40px] text-[#42474B] font-bold text-center'>Vision | Mission | Values</h1>
            <div className='grid justify-items-center'>
            
            <div className='p-4   w-1/2   shadow-xl'>   
                <p className='text-center rounded-full'>To provide strategic marketing and engineering consulting services that drive growth and innovation for our clients, enabling them to achieve competitive advantage through tailored solutions in the fields of energy-efficient products and sustainable practices</p>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 '>
            <h1 className='text-[40px] text-[#42474B] font-bold text-center'>Key Partners</h1>
            <Partners />
        </div>
        
      </div>
    </div>
  
  )
}

export default Home
