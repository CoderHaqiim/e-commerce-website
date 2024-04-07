import React from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import logo from '../assets/allitems/emartlogo.svg'

const Navbar = ({username,cartItems}) => {
    return (
        <div className="w-full h-[100px] bg-baseColor top-[-24px] sticky z-30">
            <div className="w-full h-[30%] bg-black text-white">
                <div className="container w-[90%] h-[100%] mx-auto flex items-center">
                    advertisment
                </div>
            </div>
            <div className='w-full h-[70%] bg-green-500'>
                <div className="container flex items-center w-[90%] h-full mx-auto justify-between">
                    <Link to= "/">
                        <div className="logo h-[60px] w-[70px] text-white text-2xl flex items-center justify-center font-bold">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className='w-[20%] h-full flex justify-end gap-[20px]'>
                        <div className="navs w-1/2 h-full">
                            <Profile username={username}/>
                        </div>
                        <ShoppingCart cartItems={cartItems}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
