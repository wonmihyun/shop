import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {getProducts} from '../api/firebase';
import ProductItem from './ProductItem';


// yarn add @tanstack/react-query 설치

export default function Products(){
    const {
        isLoading,
        isError,
        data : products, // 파이어베이스 products - 상품 상세 
        error
    } = useQuery(['products'],getProducts);
    console.log(products); // 파이어베이스 products - 상품 상세정보를 콘솔로 확인 가능 

    if(isLoading){
        return <p>상품 정보를 받아오고 있습니다.</p>
    }
    if(isError){
        return <p>상품 정보를 받아오지 못했습니다.</p>
    }

    return (
        <ul className='productList'>
            {products.map((products)=>(
                <ProductItem key={products.id} products = {products}/>
            ))}
        </ul>

    )
}