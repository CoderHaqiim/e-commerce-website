import React from 'react';

const Button = ({buttonText,id,filteritems,addtocart,hideButton,selected, setSelected}) => {
   
    const CheckAction = () =>{
        switch(id){
            case "phone":
            case "laptop": 
            case "groceries": 
            case "fashion":
            case "appliances":
            case "perfume":
            case "all":filteritems(id); break;
            case "toCart":{addtocart()}break;
            case "remove":{removeitem()}break;
            default:{console.log("all")}
        }
       setSelected(id)
    }

    return (
        hideButton?
        <></>:
        <button onClick ={CheckAction} className={`${selected === id ? 'bg-baseColor3' : 'bg-baseColor'} h-[40px] w-auto px-[2rem] flex-shrink-0 text-white flex justify-center items-center no-wrap text-center rounded-md cursor-pointer`}>
            {buttonText}
        </button>
      
    );
}

export default Button;
