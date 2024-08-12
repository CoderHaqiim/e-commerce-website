import React from 'react';

const Titlehead = ({title}) => {
    return (
        <h1 className='font-bold text-[1.6rem] font-900 h-auto flex items-center text-baseColor'>
            {title}
        </h1>
    );
}

export default Titlehead;
