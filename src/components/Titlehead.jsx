import React from 'react';

const Titlehead = ({title}) => {
    return (
        <div className='font-bold text-[2rem] mt-[20px] flex items-center text-baseColor'>
            {title}
        </div>
    );
}

export default Titlehead;
