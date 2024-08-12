import React from 'react';
import Titlehead from './Titlehead';
import Card from './Card';

const Discount = ({title,display}) => {
    return (
        <div className='w-full bg-white flex items-center justify-center py-[50px]'>
            <div className='container  h-auto flex-column w-full px-[20px] md:w-[80%]'>

                <div className='h-auto w-full flex-column'>
                        <Titlehead title={title}/>
                        <div className='text-[1rem] h-auto font-500 text-grey md:text-[1.1rem]'>
                            Get more with less with our discount offers
                        </div>
                </div>

                <div className=' discount flex w-[100%] h-[200px] mt-[30px] items-center overflow-x-scroll px-[10px] gap-[20px] md:jusitify-center'>
                    {
                        display.filter((item)=> item.discount == true).map((item) => <Card key={item.id} item= {item} type="discount"/>)
                     }
                </div>



            </div>
        </div>
    )
}

export default Discount;
