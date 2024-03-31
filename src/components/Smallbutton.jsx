import React from 'react';
import deleteIcon from '/svgs/delete_icon.svg';


const Smallbutton = ({removeItem,removeIndex,text,screenWidth}) => {
    
    const checkSmall = ()=>{
        removeItem(removeIndex)
    }

        if(screenWidth < 400){
            return (
                <button onClick={checkSmall} className='hover:bg-baseColor3 p-[5px] h-[35px] w-[35px] bg-baseColor text-white flex items-center justify-center rounded-md cursor-pointer'>
                    <img height='100%' width='100%' src={deleteIcon} alt="" />
                </button>
            );
        }else{
            return (
                <button onClick={checkSmall} className='hover:bg-baseColor3 p-[5px] h-[35px] ml-[10px] w-[150px] bg-baseColor text-white flex items-center justify-center rounded-md cursor-pointer'>
                    <span className='flex justify-around items-center'>
                        {text}
                        <img height='25px' width='25px' src={deleteIcon} alt="" />
                    </span>
                </button>
            );
        }
}
export default Smallbutton;
