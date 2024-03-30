import React from 'react';
import Button from './Button';

const CategoriesNav = ({filteritems}) => {
    return (
        <div className=' w-full h-[10vh] flex justify-center items-center'>
            <div className="px-[10px] categories w-full gap-[10px] h-full flex items-center overflow-x-scroll md:justify-center">
                <Button filteritems = {filteritems} buttonText="All" id="all"/>
                <Button filteritems={filteritems} buttonText="Phones" id="phone"/>
                <Button filteritems={filteritems} buttonText="Laptops" id="laptop"/>
                <Button filteritems={filteritems} buttonText="Fashion" id="fashion"/>
                <Button filteritems={filteritems} buttonText="Groceries" id="groceries"/>
                <Button filteritems={filteritems} buttonText="Home Appliances" id="appliances"/>
                <Button filteritems={filteritems} buttonText="Perfumes" id="perfume"/>
            </div>
        </div>
    );
}

export default CategoriesNav;
