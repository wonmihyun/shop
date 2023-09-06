import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/firebase";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function CategoryList(){
    const {data : categories } = useQuery(['categories'], getCategory);

    const setCategory = new Set();
    // 특정한 값을 배열로 출력해주는 메서드 중복요소를 구분한다.
    
    if(categories){
        categories.forEach((categoryObject)=>{
            setCategory.add(categoryObject.category); // Product.category
            // add는 배열에 추가하는 메서드
        })
    }
    const setCategoryArr = [...setCategory];
    console.log(setCategoryArr);


    return (
        <CategoryItemList>
                {setCategoryArr.map((category, index)=>(
                    <CategoryItem key={index}>
                        <Link to={`/items/${category}`}>
                            {category}
                        </Link>
                    </CategoryItem>
                ))}
            </CategoryItemList>
    )

}

const CategoryItemList = styled.ul`
    display: flex;
    gap: 30px;
    padding: 24px;
    
`
const CategoryItem = styled.li`
    a{
        color : #999999;
        transition: 300ms;
        &:hover{
            color: #333333;
        }
    }
`
    
