import React from 'react';

const Added = ({hidden}) => {
    return (
        <>
                {hidden?<></>:<div className=' z-[9999] left-[10%] animate-bounce opacity-80 absolute p-[10px] text-center top-[0px] bg-white rounded-md font-bold text-green shadow-md w-[300px]'> Added to cart</div>}
        </>
    );
}

export default Added;
