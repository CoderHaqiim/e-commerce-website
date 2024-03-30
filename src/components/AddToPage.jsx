import React from 'react';
import Card2 from './Card2';
import Added from './Addedbox';

const AddToPage = ({itemId,allItems,name,image,price,addtocart,hidden,hideButton}) => {
    return (
        <>
            <div className=' w-full h-auto relative lg:w-1/2 lg:m-auto py-[50px]'>
                <Added hidden={hidden}/>
                <Card2 itemId={itemId} allItems={allItems} hideButton={hideButton} image={image} name={name} price={price} addtocart={addtocart}/>
            </div>
        </>
    );
}

export default AddToPage;
