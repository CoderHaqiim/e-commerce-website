import React from 'react';
import Smallbutton from './Smallbutton';

const Card3 = ({cartItems,cart,item,removeItem,removeIndex,screenWidth}) => {
    return (
        <div className='w-[90%] items-center h-[60px] flex justify-between border-b-[1px] flex  md:px-[20px] md:w-[85%]'>
            <div className='flex justify-between w-[88%] items-center'>
                <div className='w-20% h-[100%] flex items-center'>
                    <div className='w-[40px] h-[40px] flex items-center mr-[10px]'>
                        <img src={item.image} alt="item" className='w-[100%] h-[100%]' />
                    </div>
                    {item.title} 
                </div>
                <strong>N{item.price}</strong>
            </div>
            <Smallbutton removeItem={removeItem} removeIndex={removeIndex} screenWidth={screenWidth} text='remove'/>
        </div>
    );
}
export default Card3;
