import React from 'react';
import Card from './Card';
import Titlehead from './Titlehead';
import { Link } from 'react-router-dom';


const Showcase = ({display,title,itemId,useItemId}) => {

            return (
                <div className='w-full h-auto overflow-y-hidden my-20 m-auto rounded-md px-[10%]'>
                    <>
                        <Titlehead title={title}/>
                        <div className='text-baseColor3 text-[1.2rem] text-grey'>
                            <strong>Browse each categories for items thoughfully selected for you</strong>
                        </div>
                    </>
        
                    <div className="container w-[100%] h-full flex gap-[1.5rem] justify-center py-[2%] my-[30px] flex-wrap mx-auto">
                        {display.map((item)=><div key={item.id}><Link to= "/addtocart"><Card key={item.id}   item={item} useItemId={useItemId} itemId={itemId}/></Link></div>)}
                    </div>
                </div>
            )
}

export default Showcase;
