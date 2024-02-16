import React from 'react';
import { Link } from 'react-router-dom';
import Cart from "../assets/items/shoppingcart.svg"

const ShoppingCart = ({cartItems}) => {
    return (
            <div className='h-auto w-auto flex justify-center items-center relative cursor-pointer'>
                <Link to= '/shoppingcart'>
                    <div className=' font-bold bg-black absolute top-[10px] left-[15px] w-[17px] h-[17px] flex items-center p-[4px] text-[0.7rem] justify-center text-white'>{cartItems}</div>
                    <img src={Cart} alt="cart" className='w-[30px] h-[25px]' />
                </Link>
            </div>
    );
}

export default ShoppingCart;
