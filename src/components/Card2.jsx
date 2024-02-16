import React from 'react';
import Button from './Button'

const Card2 = ({image,itemId,allItems,name,price,addtocart,hideButton}) => {
    return (
        <div className='w-[100%] h-[400px] flex shadow-md bg-green'>
            <div className='w-[50%] bg-white h-[100%] flex justify-center items-center bg-red p-[30px]'>
                <img src={image} alt={itemId} className="w-[200px] h-[200px]"/>
            </div>
            <div className='flex h-[100%] w-[50%] flex-col bg-white justify-around p-[50px]'>
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
