import React, {useEffect, useState} from 'react';
import {searchProducts} from '../api/firebase'; 
import SearchList from './SearchList';

export default function SearchItem(){

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]); // 연관검색을 뽑아 올 수 있도록 빈 배열

    useEffect(()=>{
        if(query.trim() === ''){ // trim() 공백제거     
            setResult([]);
        }  
        else{
            searchProducts(query)
            .then((text)=>{
                setResult(text);
            })
            .catch((error)=>{
                console.error(error);
            })
        }
    },[query]);

    const inputEvent = (e) => {
        setQuery(e.target.value);  
        console.log(e.target.value);
    }

    return (
        <div className='container'>
            <br></br>
            검색창 <input type='text' value={query} onChange={inputEvent}/> 
            {/* {result.length > 0 && (
                // <ul>
                //     {result.map((item)=>(
                //         <li key={item.id}>
                //             <p>{item.title}</p>
                //         </li>
                //     ))}
                // </ul>
                <SearchList products = {result}/>
            )} */}

            <ul>
                 
                {result.map((product)=>(
                    <SearchList key={product.id} products={product}/>
                ))}
                
            </ul>
        </div>
    )
}