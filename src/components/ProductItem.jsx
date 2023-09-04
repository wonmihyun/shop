import React from 'react';

export default function ProductItem({products : {id , image, title, price, option, description,category}}){

    return(
        <li>
            <img src={image} alt={title}/>
            <div className='textWrap'>
                <p>{title}</p>    
                <p>{price}</p>    
                <p>{option}</p>    
                <p>{description}</p>    
            </div>    
            
        </li>
    )

}