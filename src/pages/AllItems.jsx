import React from 'react';
import Products from '../components/Products';
import CategoryList from '../components/CategoryList';

export default function AllItems(){
    return(
        <div>
            <CategoryList/>
            <Products/>
        </div>
    )

    
}