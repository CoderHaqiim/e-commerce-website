import React from 'react';
import Button from './Button';
import { useState } from 'react';

const CategoriesNav = ({filteritems}) => {
    const [selected, setSelected] = useState('all')

    const btns = [
        {text:'All',id:'all'},
        {text:'Phones',id:'phone'},
        {text:'Laptops',id:'laptop'},
        {text:'Fashion',id:'fashion'},
        {text:'Groceries',id:'groceries'},
        {text:'Home Appliances',id:'appliances'},
        {text:'Perfumes',id:'perfume'},
    ]

    return (
        <div className=' w-full h-[10vh] flex justify-center items-center'>
            <div className="px-[10px] categories w-full gap-[10px] h-full flex items-center overflow-x-scroll md:justify-center">
                {
                    btns.map((btn,index)=> <Button key={btn.id} selected={selected} setSelected={setSelected} id={btn.id} filteritems = {filteritems} buttonText={btn.text} index = {index}/>)
                }
            </div>
        </div>
    );
}

export default CategoriesNav;
