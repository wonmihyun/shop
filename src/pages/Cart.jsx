import React from 'react';
import UseCart from '../context/UseCart';
import CartList from '../components/CartList';

export default function Cart(){

    const {cartInfo : {data : products}, deleteItem} = UseCart();
    const IsItem = products && products.length > 0;
    // const ItemDelete = (id) => deleteItem.mutate(id);

    const totalPrice = 
    products && products.reduce( // 이전 요소와 다음요소 콜백 
        (prev,current)=> prev + parseInt(current.price) * current.quantity,0 
        // current.price == product.price
        /*
        prev : 초기값 0
        current : 현재 처리중인 아이템를 받아오며, 
        최종적으로 prev에 담아오는 역할을 한다
        이 작업을 reduce로 배열에서 반복하며, 목록을 업데이트 한다.
        */
        )  
         
    const delivery = 3000;
       
        
    return(
        <div className='container'> 
            <h2>장바구니 리스트</h2>
            {!IsItem && <p>장바구니에 상품이 없습니다.</p>}
            {/* {IsItem && (<p>성공</p>)} */}
            {IsItem && (
                <ul className='cartList'>
                    {products && 
                        products.map((product,index)=>(
                            // <li key={product.id}>
                            //     <p>{index}</p>
                            //     <img src={product.image} alt={product.title}/>
                            //     <p>{product.title}</p>
                            //     <p>{product.option}</p>
                            //     <p>{product.price}</p>
                            //     <p>수량 : {product.quantity}</p>
                            //     <button onClick={()=>ItemDelete(product.id)}>삭제</button>
                            // </li>
                            <CartList key={product.id} product={product} index={index}/> 
                            
                        ))
                    }
                </ul>
            )}
             <div className='peiceWrap'>
                <p>상품 가격 : {totalPrice} 원</p>
                <p>배송비 : {delivery} 원</p>
                <p>총 가격 : {totalPrice + delivery} 원</p>
                <button>주문하기</button>
            </div>

        </div>
    )
}