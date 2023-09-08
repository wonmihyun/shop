import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryProduct } from '../api/firebase';
import CategoryProductList from './CategoryProductList';

export default function CategoryPage(){
    const [product, setProduct] = useState([]);
    const {category} = useParams(); // category에 담겨있는 정보를 가져옴 ~~>Params : 파라미터를 가져온다는 의미 

    // fb 카테고리 필터를 가져옴 
    useEffect (()=>{
        getCategoryProduct(category)
        .then((products)=>{
            setProduct(products);
            console.log(category)
        }).catch((error)=>{
            console.error(error);
        })
    },[category]);

    return (
        <CategoryProductList category={category} product={product}/>
    )
}
