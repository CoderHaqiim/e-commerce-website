import React from 'react';
import Button from './Button'

const Card2 = ({image,itemId,allItems,name,price,addtocart,hideButton}) => {
    return (
        <div className='w-[100%] h-[300px] flex flex-col shadow-md lg:flex-row bg-white'>
            <div className='w-full h-[100%] flex justify-center items-center p-[30px] md:w-1/2'>
                <img src={image} alt={itemId} className="w-[200px] h-[200px]"/>
            </div>
            <div className='flex h-[100%] w-full flex-col bg-white justify-around p-[50px] md:w-1/2 md:justify-center'>
                <div>
                    <div className='font-bold text-[1.4rem]'>{name}</div>
                    <div>{price}</div>
                </div>
                <Button buttonText="Add to Cart" id="toCart" hideButton={hideButton} addtocart={addtocart}/>
            </div>
        </div>
    );
}

export default Card2;
