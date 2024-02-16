import React from 'react';

const Profile = ({username,picture}) => {
    return (
        <div className='flex w-full h-[100%] items-center justify-end gap-[0.5rem] font-bold'>
            <div className='text-white'>{username}</div>
            <div className=' w-[40px] h-[40px] bg-white rounded-[100%]'>{picture}</div>
        </div>
    );
}

export default Profile;
