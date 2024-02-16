import React from 'react';
import Card2 from './Card2';
import Added from './Addedbox';

const AddToPage = ({itemId,allItems,name,image,price,addtocart,hidden,hideButton}) => {
    return (
        <>
            <div className='m-auto h-auto w-3/6 flex justify-center items-center py-[50px] relative'>
                <Added hidden={hidden}/>
                <Card2 itemId={itemId} allItems={allItems} hideButton={hideButton} image={image} name={name} price={price} addtocart={addtocart}/>
            </div>
        </>
    );
}

export default AddToPage;
