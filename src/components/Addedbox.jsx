import React from 'react';

const Added = ({hidden}) => {
    return (
        <>
                {hidden?<></>:<div className='  z-[9999] w-full absolute h-auto flex items-center justify-center top-[0px]'>
                    <div className='animate-bounce opacity-80 p-[10px] text-center bg-white rounded-md font-bold text-green shadow-md w-[300px]'> Added to cart</div>
                </div>}
        </>
    );
}

export default Added;

