import React from 'react';
import DetailPageEvent from './DetailPageEvent';

export default function SearchList({products : {id , image, title, price, option, description,category}}){
    return (
        // <ul>
        //     {products.map((product)=>(
        //         <li key={product.id}>
        //         <img src={product.image} alt={product.title}/>
        //         <p>{product.title}</p>
        //        </li>
        //     ))}
        // </ul>
        <li>
             <DetailPageEvent product={{id,image,title,price, option, description}}/>
        </li>
        
    )    
}