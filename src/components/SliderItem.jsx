import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 스와이퍼 css 기본제공
import 'swiper/css/effect-fade'; // 스와이퍼 effectFade css 
import {Autoplay, EffectFade } from 'swiper/modules'; 

// yarn add swiper 설치
// https://swiperjs.com/react 
 
export default function SliderItem(){
    
    const slider = {
        width : '500px',
        height : '1000px'
    }
 
 
    return(

            <Swiper className={slider}
                slidesPerView={1}
                speed={2000}
                autoplay = {{
                    deplay : 2000,
                    disableOnInteraction : false,
                }}
                loop = {true}
                modules = {[Autoplay, EffectFade]}
                effect={'fade'}
            >

                <SwiperSlide>
                    <img src='https://firebasestorage.googleapis.com/v0/b/shop-4a3a4.appspot.com/o/1.jpg?alt=media&token=314bdd7b-86e1-452b-b6ea-ca2a459f3249'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://firebasestorage.googleapis.com/v0/b/shop-4a3a4.appspot.com/o/15.jpg?alt=media&token=d7dcd3c4-ffa1-4e65-b469-63a45e2ce253'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://firebasestorage.googleapis.com/v0/b/shop-4a3a4.appspot.com/o/35.jpg?alt=media&token=992907bc-ced0-42e0-844e-16811817c232'/>
                </SwiperSlide>
           </Swiper>

           // 기본 슬라이드 적용 방법으로 슬라이드의 내용이 모든 페이지에서 똑같이 
           // 적용될때에는 상관없지만 다른 페이지에서는 다른 슬라이드 이미지를 보여주고 싶다면
           // firebase에서 이미지를 가져오는 방식으로 바꿔주면 된다. 
           
            

       
    )
}

