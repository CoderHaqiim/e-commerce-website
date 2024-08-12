import React from 'react';

const Profile = ({username,picture}) => {
    return (
        <div className='flex w-full h-[100%] items-center justify-end gap-[0.5rem] font-bold'>
            <div className='text-white'>{username}</div>
            <div className=' w-[30px] h-[30px] min-w-[30px] bg-white rounded-[100%]'>{picture}</div>
        </div>
    );
}

export default Profile;
