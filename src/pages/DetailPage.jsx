import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function DetailPage(){

    // useLocation 현재 url의 정보를 가져오는 훅 
    const {state : {id,image,title,price, option, description}} = useLocation();
    console.log(title);
    //const {id} = useParams();
    return(
        <>
            <div>
                <img src={image}/>
                <h2>{title}</h2>
            </div>
        </>
    )
}

