import React, { useEffect, useState } from 'react';
import CategoryList from '../components/CategoryList';
import { getCategoryProduct } from '../api/firebase';

export default function Kitchen(){
    const [product, setProduct] = useState([]);
    const category = '주방';

    useEffect(()=>{
        getCategoryProduct(category)
        .then((product)=>{
            setProduct(product);
        })
        .catch((error)=>{
            console.error(error);
        })
    },[]);

    return(
        <>
        <div className='container'>
        <CategoryList/>
        <h2 className='categoryTitle'>{category}</h2>
        <ul className='productList'>
            {product.map((product)=>(
            <li key={product.id}>
                <img src={product.image} alt={product.title}/>
                {/* <p>{product.title}</p>
                <p>{product.price}</p> */}
                <div className='textWrap'>
                <h3 className='itemTitle'>{product.title}</h3>
                <div className="itemFlex">
                    <p className='itemPrice'>{product.price.toLocaleString()}</p>
                    <p className='itemOpt'>{product.option.join(', ')}</p>   
                </div>
                </div>
            </li>
        ))}</ul>
        </div>
        </>
    )
}
