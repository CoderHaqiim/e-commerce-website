import React from 'react';

const Added = ({hidden}) => {
    return (
        <>
            {hidden?<></>:<div className=' animate-bounce opacity-80 absolute p-[10px] top-[10px] bg-white rounded-md font-bold text-green shadow-md w-[300px]'> Added to cart</div>}
        </>
    );
}

export default Added;
