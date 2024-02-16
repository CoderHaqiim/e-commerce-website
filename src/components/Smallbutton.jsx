import React from 'react';

const Smallbutton = ({text,removeItem,removeIndex}) => {
    //const btnId = removeIndex
    const checkSmall = ()=>{
        removeItem(removeIndex)
    }
    return (
        <button onClick={checkSmall} className='hover:bg-baseColor3 h-[35px] w-auto px-[2rem] bg-baseColor text-white flex items-center justify-center rounded-md cursor-pointer'>
            {text}
        </button>
    );
}

export default Smallbutton;
