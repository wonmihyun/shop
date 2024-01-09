import React, { useEffect , useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 스와이퍼 css 기본제공
import 'swiper/css/effect-fade'; // 스와이퍼 effectFade css 
import {Autoplay, EffectFade } from 'swiper/modules';
import {loadSlideImage, storage, auth} from '../api/firebase'; 

export default function SliderContent({imgUrls}){

    const [imgUrl, setImgUrl] = useState([]);

    useEffect(()=>{
        if(auth){
            async function loadImg(){
                try{
                    // promise 비동기 데이터 처리 (각자)
                    // promise.all :  여러개의 비동기 데이터 처리 
                    const urls = await Promise.all(
                        imgUrls.map((imgPath)=>loadSlideImage(imgPath, storage))
                    )
                        setImgUrl(urls);    
                }
                catch(error){
                    console.error(error);
                }
            }   
            loadImg()
            console.log(loadImg());
        }
    }, [imgUrls]);

    const slider = {
        width : '500px', 
        height : '600px',
    }

    return (
        <>
        {/* <Swiper style={slider}
            slidesPerView={1}
            loop = {true}
            autoplay = {{
                delay : 2000,
                disableOnInteraction : false,
            }}
            modules = {[Autoplay, EffectFade]}
            effect={'fade'}
            speed = {2000}
        >
            {Array.isArray(imgUrl) && 
                imgUrl.map((url, index)=>(
                    <SwiperSlide key={index} style={{backgroundImage : `url(${url})`}}>

                    </SwiperSlide>
                ))
            }
             
        </Swiper> */}
        </>
    )
}

