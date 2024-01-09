import React from 'react';
import UseCart from '../context/UseCart';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
 

export default function CartList({product, index}){

    const {addItemCart , deleteItem} = UseCart();
    //const setPrice = product.price.toLocaleString();
    //console.log(product)
    const plusItem = () =>{
        addItemCart.mutate({...product, quantity : product.quantity + 1})
    }
 
    const minusItem = () =>{
        if(product.quantity < 2){
            alert('상품 갯수는 1보다 작을 수 없습니다.')
            return 
        }
        addItemCart.mutate({...product, quantity : product.quantity - 1})
    }

 
 

 
    const ItemDelete = () => {
        deleteItem.mutate(product.id);
    }
   
    return (
       <li>
            <p>{index}</p>
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <p>{product.option}</p>
            <p>수량 : {product.quantity}</p>
            <AiOutlinePlus onClick={plusItem}/>
            <AiOutlineMinus onClick={minusItem}/> 
            <p>{product.price} 원</p>
            <button onClick={()=>ItemDelete(product.id)}>삭제</button>
            
       </li>
       
    )
}