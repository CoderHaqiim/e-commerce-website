import React from 'react'
import Hero from './Hero';
import CategoriesNav from './CategoriesNav';
import Showcase from './Showcase';
import Discount from './Discount';

const Home = ({action,display,showcaseitems,filteritems,all,clear,itemId,useItemId}) => {
    return (
        <div className=' w-full h-auto py-[20px]'>
            <Hero/>
            <CategoriesNav action={action} filteritems={filteritems}/>
            <Showcase title="Categories" clear={clear} display={display} filteritems={filteritems} useItemId={useItemId} showcaseitems={showcaseitems} all={all} itemId={itemId}/>
            <Discount title="Discounted Deals" display={display}/>
        </div>
    );
}

export default Home;
