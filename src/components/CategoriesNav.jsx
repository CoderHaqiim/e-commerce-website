import React from 'react';
import Button from './Button';

const CategoriesNav = ({filteritems}) => {
    return (
        <div className='w-full h-[8vh] bg-pink-600'>
            <div className="container mx-auto w-[90%] gap-[10px] py-[10px] h-full flex justify-center overflow-y-scrol">
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
