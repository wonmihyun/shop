import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../api/firebase";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function CategoryList(){
    const {data : categories } = useQuery(['categories'], getCategory);
    return (
        <CategoryItemList>
            {
                categories && 
                    categories.map((categoryObject)=>(
                        <CategoryItem key={categoryObject.id}>
                            <Link to={categoryObject.category}>
                                {categoryObject.category}
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
    
