import React from 'react';
import CategoryList from './CategoryList';

export default function CategoryProductList({category, product}){
    
    return (
       <div className='container'>
            <CategoryList/>
                <h2 className='categoryTitle'>{category}</h2>
                <ul className='productList'>
                    {product.map((product)=>(
                        <li key={product.id}>
                            <img src={product.image} alt={product.title}/>
                            <div className='textWrap'>
                                <h3 className='itemTitle'>{product.title}</h3>
                                <div className='itemFlex'>
                                    <p>{product.price.toLocaleString()}</p>
                                    <p>{product.option}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

       </div>
    )
}