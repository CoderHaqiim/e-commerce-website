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
        <button onClick ={CheckAction} className={`${selected === id ?'bg-baseColor text-white':'bg-transparent text-baseColor'} px-[10px] py-[5px] w-auto border-[solid] border-[1px] border-baseColor flex-shrink-0 flex justify-center items-center no-wrap text-center rounded-small cursor-pointer`}>
            {buttonText}
        </button>
      
    );
}

export default Button;
