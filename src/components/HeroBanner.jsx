import React from 'react'

export default function HeroBanner({name}) {
  return (
    <swiper-slide className="w-full">
        <div className='w-full h-auto py-[2%]'>
            <div className="banner w-[80%] bg-baseColor h-auto rounded-medium mx-auto flex justify-center items-center text-white"  style={{aspectRatio:"11/3"}}>{name}</div>
        </div>
    </swiper-slide>
  )
}
