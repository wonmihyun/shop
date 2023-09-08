import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({products : {id , image, title, price, option, description,category}}){

    const setPrice = price.toLocaleString();
    // toLocaleString(); 숫자단위, 날짜에서 자동 콤마를 찍어주는 메서드
    //console.log(price);
    const navigate = useNavigate();
    const detail = () => {
        navigate(`/${id}`, {state : {id,image,title,price, option, description}})
        // console.log({id})
        
    }

    // 단순한 페이지 이동이 목적이라면 Link를 사용하면 되지만
    // 페이지를 이동하면서 데이터의 이동도 포함이 된다면 useNavigate 를 사용해야 한다.

    return(
        <li onClick={detail}>
            <img src={image} alt={title}/>
            <div className='textWrap'>
                <h3 className='itemTitle'>{title}</h3>    
                <div className='itemFlex'>
                    <p className='itemPrice'>{setPrice} 원</p>    
                    <p className='itemOpt'>{option.join(', ')}</p>   
                </div>
            </div>    
        </li>
    )

}