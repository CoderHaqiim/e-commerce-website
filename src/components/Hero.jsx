import { Container } from 'postcss';
import HeroBanner from './HeroBanner';
import React from 'react';

const Hero = () => {
    const bannerArray = [{name:'banner1',id: 1},{name:'banner2',id: 2},{name:'banner3',id :3}]
    return (
        <div className='container mb-10 m-auto'>
            <swiper-container slides-per-view="1" speed="1000 " loop="true" navigation="false" pagination="false" autoplay="true"> 
              {
                bannerArray.map((banner)=><HeroBanner key={banner.id} name={banner.name}/>)
              }
            </swiper-container>
        </div>
    );
}

export default Hero;
