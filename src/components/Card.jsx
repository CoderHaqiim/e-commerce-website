import React from 'react';

const Card = ({item,type,useItemId}) => {

    const ab = () =>{
        useItemId(item.id)
    }

    switch(type){
        case "item": 
            {return (
                <div className='w-[300px] h-[250px] bg-red rounded-md shadow-md cursor-pointer'>
                    <div className='w-[100%] h-[85%] flex items-center justify-center py-[12px] px-[8px]'>
                        <img src={item.image} alt="item" className='pointer-eventw-[170px] h-[150px]'/>
                    </div>
                    <div className='w-[100%] h-[15%] flex justify-between p-[5px]'>
                        <div className='w-full h-[100%] flex items-center justify-center'>{item.title}</div>
                    </div>
                </div>
        )}break;
        case "discount": 
            {return (
                <div onClick={()=>{console.log(item.id)}}className='w-[175px] h-[175px] flex-shrink-0 bg-white rounded-md shadow-md cursor-pointer relative'>
                    <div className='flex shadow-md items-center justify-center text-[0.8rem] font-bold absolute w-[40px] h-[25px] bg-red top-[5px] left-[75%] rounded-sm text-white'>{item.off}</div>
                    <div className='w-[100%] h-[85%] flex items-center justify-center py-[12px] px-[8px]'>
                        <img src={item.image} alt="item" className='w-[100%] h-[100%]'/>
                    </div>
                    <div className='w-[100%] h-[15%] flex justify-between p-[5px]'>
                        <div className='w-full h-[100%] flex items-center text-[0.7rem] justify-center'>{item.title}</div>
                    </div>
                </div>
        )}break;
        default: 
            {return (
                <div onClick={ab} className='w-[350px] h-[350px] bg-white rounded-md shadow-md cursor-pointer md:w-[250px] md:h-[250px]'>
                    <div className='w-[100%] h-[80%] flex items-center justify-center pt-[12px] px-[8px]'>
                        <img src={item.image} alt="item" className='w-[170px] h-[150px]'/>
                    </div>
                    <div className='w-[100%] h-[15%] flex justify-between px-[5px]'>
                        <div className='w-full h-[100%] flex items-center justify-center text-[1.2rem] md:text-[1rem]'>{item.title}</div>
                    </div>
                </div>
        )}
    }
}

export default Card;
