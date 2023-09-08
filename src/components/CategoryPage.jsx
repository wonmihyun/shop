import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryProduct } from '../api/firebase';
import CategoryProductList from './CategoryProductList';
import SliderContent from './SliderContent';

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

    const slidePath = [
        'https://firebasestorage.googleapis.com/v0/b/shop-4a3a4.appspot.com/o/1.jpg?alt=media&token=314bdd7b-86e1-452b-b6ea-ca2a459f3249',
        
        'https://firebasestorage.googleapis.com/v0/b/shop-4a3a4.appspot.com/o/15.jpg?alt=media&token=d7dcd3c4-ffa1-4e65-b469-63a45e2ce253',
        
        'https://firebasestorage.googleapis.com/v0/b/shop-4a3a4.appspot.com/o/35.jpg?alt=media&token=992907bc-ced0-42e0-844e-16811817c232',
    ]

    return (
        <>
            <SliderContent imgUrls={slidePath}/>
            <CategoryProductList category={category} product={product}/>
        </>
         
    )
}
