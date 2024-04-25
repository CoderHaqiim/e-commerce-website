import React from 'react';
import Titlehead from './Titlehead';
import Card from './Card';

const Discount = ({title,display}) => {
    return (
        <div className='w-full h-[auto] bg-white m-auto flex items-center justify-center'>
            <div className='container w-full md:w-[80%] px-[20px]'>
                <div>
                        <Titlehead title={title}/>
                        <div className='text-baseColor3 text-[1rem] text-grey md:text-[1.2rem]'>
                            <strong>Get more with less with our discount offers</strong>
                        </div>
                </div>
                <div className=' discount flex w-[100%] h-[200px] items-center overflow-x-scroll px-[10px] my-[30px] gap-[20px] md:jusitify-center'>
                    {display.map((item,index)=>item.discount?<Card key={item.id} item= {item} type="discount"/>:<></>)}
                </div>
            </div>
        </div>
    )
}

export default Discount;
