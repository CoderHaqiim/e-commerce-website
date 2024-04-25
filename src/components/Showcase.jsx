import React from 'react';
import Card from './Card';
import Titlehead from './Titlehead';
import { Link } from 'react-router-dom';


const Showcase = ({display,filteritems,title,itemId,all,useItemId}) => {

            return (
                <div className='w-full h-auto overflow-y-hidden my-10 m-auto rounded-md flex justify-center items-center'>
                    <div className='container w-full md:w-[80%] px-[20px]'>
                        <div className='w-full'>
                                <Titlehead title={title}/>
                                <div className='text-baseColor3 text-[1rem] text-grey md:text-[1.2rem] '>
                                    <strong>Browse each categories for items thoughfully selected for you</strong>
                                </div>
                        </div>
            
                        <div className=" w-full h-full flex gap-[1.5rem] justify-center py-[2%] my-[30px] flex-wrap mx-auto">
                            {
                               all?
                                display.map((item)=><div key={item.id}><Card key={item.id} filteritems={filteritems} type='home' id = {item.type} item={item} useItemId={useItemId} itemId={itemId}/></div>):
                                display.map((item)=><div key={item.id}><Link to= "/addtocart"><Card key={item.id}  item={item} useItemId={useItemId} itemId={itemId}/></Link></div>)
                            }
                        </div>
                    </div>
                </div>
            )
}

export default Showcase;
// filteritems={filteritems}