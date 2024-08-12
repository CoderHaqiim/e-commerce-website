import React from 'react';

const Card = ({item,type,id,useItemId,filteritems}) => {

    const openCard = () =>{
        switch(id){
            case "Phones" :{filteritems('phone')}break;
            case "Groceries" :{filteritems('groceries')}break;
            case "Laptops" :{filteritems('laptop')}break;
            case "Fashion" :{filteritems('fashion')}break;
            case "Perfumes" :{filteritems('perfume')}break;
            case "Home Appliances" :{filteritems('appliances')}break;
            default:{console.log("all")}
        }
        console.log(id)
    }




    const pickId= () =>{
        useItemId(item.id)
    }

    switch(type){
        case "home": 
            {return (
                <div onClick={openCard} className='flex-column gap-[5px] w-[300px] h-[300px] bg-white rounded-small cursor-pointer md:w-[230px] md:h-[230px] xl:w-[300px] xl:h-[300px] p-[10px] shadow-special'>
                    <div className='w-[100%] bg-baseColor2 h-[80%] flex items-center justify-center pt-[12px] px-[8px] rounded-small'>
                        <img src={item.image} alt="item" className='w-[170px] h-[150px]'/>
                    </div>
                    <div className='w-[100%] h-[15%] flex justify-between px-[5px]'>
                        <div className='w-full h-[100%] flex items-center text-grey justify-center font-bold text-[1.2rem] md:text-[1rem]'>{item.type}</div>
                    </div>
                </div>
        )}break;
        case "discount": 
            {return (
                <div onClick={()=>{console.log(item.id)}}className='w-[175px] h-[175px] flex-shrink-0 bg-white rounded-medium shadow-md cursor-pointer relative'>
                    <div className='flex shadow-md items-center justify-center text-[0.8rem] font-bold absolute w-[40px] h-[25px] bg-accent top-[5px] left-[75%] rounded-small text-white'>{item.off}</div>
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
                <div onClick={pickId} className='w-[300px] h-[300px] bg-white rounded-small shadow-sm cursor-pointer md:w-[230px] md:h-[230px] xl:w-[300px] xl:h-[300px]'>
                    <div className='w-[100%] h-[80%] flex items-center rounded-small justify-center pt-[12px] px-[8px]'>
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
