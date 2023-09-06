import React from 'react';


export default function ProductItem({products : {id , image, title, price, option, description,category}}){

    const setPrice = price.toLocaleString();
    // toLocaleString(); 숫자단위, 날짜에서 자동 콤마를 찍어주는 메서드
    //console.log(price);
 
    return(
        <li>
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