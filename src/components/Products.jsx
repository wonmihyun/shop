import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {getProducts} from '../api/firebase';
import ProductItem from './ProductItem';
import Footer from './Footer';

// yarn add @tanstack/react-query 설치

export default function Products(){
    const {
        isLoading,
        isError,
        data : products, // 파이어베이스 products - 상품 상세 
        error
    } = useQuery(['products'],getProducts);
    console.log(products); // 파이어베이스 products - 상품 상세정보를 콘솔로 확인 가능 

    if(isLoading){
        return <p>상품 정보를 받아오고 있습니다.</p>
    }
    if(isError){
        return <p>상품 정보를 받아오지 못했습니다.</p>
    }

    return (
        <> 
        <ul className='productList'>
            {products.map((products)=>(
                <ProductItem key={products.id} products = {products}/>
            ))}
        </ul>
        {/* <footer class="f-container">
        <div class="inner">
            <div class="f-top-wrapper">
                <ul class="f-top-menu">
                    <li class="item-none">
                        <a href="#" title="링크 이동">인재채용</a>
                    </li>
                    <li class="item-none">
                        <a href="#" title="링크 이동">협력업체등록</a>
                    </li>
                    <li><a href="#" title="링크이동">공지사항</a></li>
                    <li><a href="#" title="링크이동">고객센터</a></li>
                    

                    <li><a href="#" title="링크이동">
                        <p>개인정보취급방침</p></a></li>
                    <li><a href="#" title="링크이동">
                        이용약관</a></li>

                       
                </ul>

                <div class="award">
                     
                </div>

            </div>

            <div class="f-bottom-wrapper">
                <div class="footer-info">
                    <span>대표이사 황농문</span>
                    <span>사업자등록번호 214-81-96569</span>
                    <span>서울시 강남구 강남대로 315(역삼동)</span>
                    <span>T. 02-515-1113</span>
                    <span>F. 02-525-1114</span>
 
                    <span>E. webmaster&#64;shop.co.kr</span>
                    <span>일상 고객센터 02-515-1113</span>
                    <span>전국창업설명회 02-535-1113</span>
                </div>

                <div class="f-mobile-info">
                    <button class="addr-btn">일상사업자정보</button>
                </div>
    
                <p class="footer-copy">
                    COPYRIGHT&#169;㈜일상. ALL RIGHTS RESERVED.
                </p>

                
            </div>

 
        </div>
    </footer> */}
    <Footer/>

        </>

    )
}