import React from 'react';
import Titlehead from './Titlehead';
import Card from './Card';

const Discount = ({title,display}) => {
    return (
        <div className='w-full  h-[auto] bg-white py-[20px] px-[15%] m-auto'>
            <>
                <Titlehead title={title}/>
                <div className='text-baseColor3 text-[1.2rem] text-grey'>
                    <strong>Get more with less with our discount offers</strong>
                </div>
            </>
            <div className='flex w-[100%] h-[200px] items-center my-[30px] justify-center gap-[20px]'>
                {display.map((item,index)=>item.discount?<Card key={index} item= {item} type="discount"/>:<></>)}
            </div>
        </div>
    );
}

export default Discount;
