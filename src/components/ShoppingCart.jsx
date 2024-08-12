import React from 'react';
import { Link } from 'react-router-dom';
import Cart from "../assets/items/shoppingcart.svg"

const ShoppingCart = ({cartItems}) => {
    return (
            <div className='h-auto w-auto flex justify-center items-center relative cursor-pointer'>
                <Link to= '/shoppingcart'>
                    <div className=' font-bold bg-accent absolute rounded-small top-[10px] left-[30px] w-[17px] h-[17px] flex items-center p-[4px] text-[0.7rem] justify-center text-white'>{cartItems}</div>
                    <img src={Cart} alt="cart" className='w-[45px] h-[30px] min-w-[45px]' />
                </Link>
            </div>
    );
}

export default ShoppingCart;
