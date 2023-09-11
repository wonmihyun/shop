import React, {useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import UseCart from '../context/UseCart';


export default function DetailPage(){

    // useLocation 현재 url의 정보를 가져오는 훅 
    //const {state : {id,image,title,price, option, description}} = useLocation();
    //console.log(title);
    //const {id} = useParams();

    const state = useLocation().state;
    const {id,image,title,price, option, description} = state;
    const setPrice = price.toLocaleString();
    console.log(state);
    const {addItemCart} = UseCart();



    const [selected, setSelected] = useState(option && option[0]);
    const [success, setSuccess] = useState();

    const SelectOpt = (e) => setSelected(e.target.value);

    // 장바구니 
    const CartItem = (e) => {
        const product = {id, image, price, title, option:selected, quantity : 1};
        // quantity : 1 수량 체크
        addItemCart.mutate(product,{ // mutate() : 특정 변수의 결과값을 전달하는 함수 
            onSuccess : () => {
                setSuccess('장바구니에 상품이 추가되었습니다.')
            }
        });
        console.log(CartItem);
 
    }


    


    return(
 
        <div className='container'>
            <div className='detailPage'>
                <div className='detailImg'>
                <img src={image}/>
                </div>
          
            <div className='detailText'>
                <h2><span>{title}</span></h2>
                <p>가격 <span>{setPrice}원</span></p>
                {/* <p><span>가격{price}</span></p> */}
                <div className='detailOpt'>
                    <label className='labelText' htmlFor="optSelect">옵션</label>
                    <select id='optSelect' onChange={SelectOpt} value={selected}>
                        {option && option.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
                <button className='cartBtn' onClick={CartItem}>장바구니 담기</button>
                <button className='buyBtn'>구매하기</button>
                {success && <p className='alertMsg'>{success}</p>}
            </div>
        </div>
            
 
    )
}

