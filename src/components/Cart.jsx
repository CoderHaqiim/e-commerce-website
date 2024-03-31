import React from 'react';
import Card3 from './Card3';

const Cart = ({cartItems,cart,total,removeItem,removeId,screenWidth}) => {
    return (
        cartItems?
        <div className='w-full min-h-[300px] h-auto bg-white flex py-[20px] flex-col items-center'>
            {cart.map((item,index)=><Card3 screenWidth={screenWidth} key={index} removeItem={removeItem} cartItems={cartItems} removeIndex={index} item={item}/>)}
            <div className='w-[85%] flex justify-end items-center h-[50px] px-[20px] mt-[50px]'>
                Total: &nbsp; <strong>N{total}</strong> 
            </div>   
        </div>:<div className='w-full min-h-[300px] h-auto flex py-[20px] justify-center items-center'> No items in your cart</div>
    );
}

export default Cart;
