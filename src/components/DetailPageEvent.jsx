import React from 'react';
import { useNavigate } from 'react-router-dom';

// 카테고리별 상품 
export default function DetailPageEvent({product}){ // {id,image,title,price, option, description}
    const setPrice = product.price.toLocaleString();
    const navigate = useNavigate();
    const detail = () =>{
        navigate(`/items/detail/${product.id}`,{

            state : {
                id : product.id,
                image : product.image,
                title : product.title,
                price : product.price,
                option : product.option,
                description : product.description    
            }
        })
    }

    return (

        <div onClick={detail}>
            <img src={product.image} alt={product.title}/>
            <div className='textWrap'>
                <h3 className='itemTitle'>{product.title}</h3>    
                <div className='itemFlex'>
                    <p className='itemPrice'>{setPrice} 원</p>    
                    <p className='itemOpt'>{product.option.join(', ')}</p>   
                </div>
            </div>
        </div>
    )


}