import { Container } from 'postcss';
import React from 'react';

const Hero = () => {
    return (
        <div className='mb-10'>
            <swiper-container slides-per-view="1" duration="3000" speed="50" loop="true" navigation="false" pagination="true" autoplay="true"> 
                <swiper-slide className="w-full">
                    <div className='w-full h-[70vh] bg-yellow-200 py-[2%] '>
                        <div className="w-full bg-baseColor mx-auto h-full flex justify-center items-center text-white">slide1</div>
                    </div>
                </swiper-slide>
                <swiper-slide className="w-full">
                    <div className='w-full h-[70vh] bg-yellow-200 py-[2%] '>
                        <div className="w-full bg-baseColor mx-auto h-full flex justify-center items-center text-white">slide2</div>
                    </div>
                </swiper-slide>
                <swiper-slide className="w-full">
                    <div className='w-full h-[70vh] bg-yellow-200 py-[2%]'>
                        <div className="w-full bg-baseColor mx-auto h-full flex justify-center items-center text-white">slide3</div>
                    </div>
                </swiper-slide>
                <swiper-slide className="w-full">
                    <div className='w-full h-[70vh] bg-yellow-200 py-[2%]'>
                        <div className="w-full bg-baseColor mx-auto h-full flex justify-center items-center text-white">slide4</div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    );
}

export default Hero;
