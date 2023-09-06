import React, {useState} from 'react';
import {upLoadImage} from '../api/imgUpload'; // imgUpload 
import {addProduct} from '../api/firebase';
import styled from 'styled-components';

export default function NewItems(){

    const [product, setProduct] = useState({

        title : '', // 제목
        price : '', // 가격
        description : '', // 설명
        option : '', // 옵션
        category : '',

    }) // 모든 상품의 상태를 빈 문자열로 초기화 하는 값 

    const [file, setFile] = useState(null); // 업로드 된 파일 초기화  
    const [isLoading, setIsLoading] = useState(false); // 업로드 상태 초기화 (파일이 올라갔는지 확인 - 업로드시 true)
    const [success, setSuccess] = useState(null);  // 업로드 '완료'시 상태 초기화
    
    const onChange = (e)=>{
        // 모든 파일의 상태 업데이트 (업로드는 아님)
        const {name,value,files} = e.target; 
        if(name === 'file' && files && files[0]){
            console.log(files[0]);
            setFile(files[0]);
        }
        // 에러가 나오면 구문 실행  
        else{
            setProduct((prevProduct)=>({...prevProduct, [name] : value}))
        }
    }

    // 업로드 상태 
    const onSubmit = async(e)=>{
        // 버튼이 가지고 있는 기본 옵션을 없앰
        e.preventDefault()
        setIsLoading(true);

        // 이미지 추가
        try{
            const url = await upLoadImage(file);
            await addProduct(product, url); // 파이어 베이스 데이터 연동 스크립트 실행 (url == image)
            setSuccess('이미지가 업로드 되었습니다.'); // 이미지 업로드 성공시 텍스트 출력
            setTimeout(()=>{
                setSuccess(null);    
            },5000);
            setProduct({
                title : '', // 제목
                price : '', // 가격
                description : '', // 설명
                option : '', // 옵션
                category : '', // 카테고리
            })
            setFile(null);
        }
        // 중간에 오류가 났을때 
        catch(error){
            console.error(error);
        }
        // 완료시 
        finally{
            setIsLoading(false);
        }
    }   
 
    return (
        <div className='container'>
        <FormContainer> 
        {success && <p>{success}</p>}
        <div className='imgWrap'>
            {file && (
            <img src={URL.createObjectURL(file)}/>
        )}
        </div>

        <form onSubmit={onSubmit}>
            <input type='file' name="file" accept="image/*" onChange={onChange}/>
            <input type='text' name="title" placeholder='제목' value={product.title} onChange={onChange}/>
            <input type='text' name='price' placeholder='가격' value={product.price} onChange={onChange}/>
            <input type='text' name='category' placeholder='상품 분류' value={product.category} onChange={onChange}/> 
            <input type='text' name='description' placeholder='제품 설명' value={product.description} onChange={onChange}/>
            <input type='text' name='option' placeholder='상품 옵션' value={product.option} onChange={onChange}/> 
            <button disabled={isLoading}>
                {isLoading ? '업로드 중' : '제품 등록하기'}
            </button>
        </form>
     
        </FormContainer>
        </div>
    )
}

const FormContainer = styled.div`
    max-width: 1280px;
    padding: 30px 0px;
    margin : 0px auto;

    display: flex;
    gap: 36px;
    .imgWrap{
        max-width : 500px;
        height: 500px;
        img{
            height: 100%;
            display: block;

        } 
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap : 12px;

        input{
            width: 100%;
            box-sizing: border-box;
            height: 30px;
        }
        button{
            /* background-color : navy;
            border: none;
            border-radius: 5px;
            color: #ffffff;
            cursor: pointer;
            padding: 12px 0px; */
            margin-top : 50px;
        }
    }

`