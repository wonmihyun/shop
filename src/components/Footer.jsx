import React from 'react';

export default function Footer(){
    return(
        <>
        <footer class="f-container">
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
    </footer>
        </>
    )
}