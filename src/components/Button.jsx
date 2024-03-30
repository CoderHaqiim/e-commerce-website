import React from 'react';

const Button = ({buttonText,id,filteritems,addtocart,hideButton}) => {
    const CheckAction = (event) =>{
        switch(id){
            case "phone":{filteritems(id)}break;
            case "laptop": {filteritems(id)}break;
            case "groceries": {filteritems(id)}break;
            case "fashion":{filteritems(id)}break;
            case "appliances":{filteritems(id)}break;
            case "perfume":{filteritems(id)}break;
            case "all":{filteritems(id)}break;
            case "toCart":{addtocart()}break;
            case "remove":{removeitem()}break;
            default:{console.log("all")}
        }
        
        id === "toCart" && console.log(event.target)

    }

    return (
        hideButton?
        <></>:
        <button onClick ={CheckAction} id={id} className='hover:bg-baseColor3 h-[40px] w-auto px-[2rem] flex-shrink-0 bg-baseColor text-white flex justify-center items-center no-wrap text-center rounded-md cursor-pointer'>
            {buttonText}
        </button>
      
    );
}

export default Button;
