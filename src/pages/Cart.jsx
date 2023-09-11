import React from 'react';
import UseCart from '../context/UseCart';

export default function Cart(){

    const {cartInfo : {data : products}, deleteItem} = UseCart();
    const IsItem = products && products.length > 0;
    const ItemDelete = (id) => deleteItem.mutate(id);

    return(
        <div className='container'> 
            <h2>장바구니 리스트</h2>
            {!IsItem && <p>장바구니에 상품이 없습니다.</p>}
            {/* {IsItem && (<p>성공</p>)} */}
            {IsItem && (
                <ul className='cartList'>
                    {products && 
                        products.map((product,index)=>(
                            <li key={product.id}>
                                <p>{index}</p>
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                                <p>{product.option}</p>
                                <p>{product.price}</p>
                                <p>수량 : {product.quantity}</p>
                                <button onClick={()=>ItemDelete(product.id)}>삭제</button>
                            </li>
                        ))
                    }
                </ul>
            )}

        </div>
    )
}