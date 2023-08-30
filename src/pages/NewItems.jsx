import React, { useState } from 'react';
import { styled } from 'styled-components';
import { imgUpload } from '../api/imgUpload';

export default function NewItems(){

    const [product, setProduct] = useState({
        title : '',
        price : '',
        category : '',
        description : '',
        size : '',
    });
    const [file, setFile] = useState(null);
    const [isUpload, setIsUpload] = useState(false); 
    const [success, setSuccess] = useState('');
 
    const onChange = (e) =>{
        setFile(e.target.files[0]);
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        imgUpload(file).then((url)=>{
             
        })

    
    }
 
   return(
        <NewItemForm>
           <form onSubmit={onSubmit}>
                <input 
                type='file' 
                name='file' 
                required accept='images/' 
                onChange={onChange}
                />
                {file && (
                    <img
                        src={URL.createObjectURL(file)}
                    />
                )}

                {/* {['title', 'price', 'category' , 'description', 'size'].map((field)=>(
                    <input
                        key = {field}
                        type = 'text'
                        name = ''
                    />
                ))} */}
                <button>업로드</button>

            </form> 
        </NewItemForm>
   )
}

const NewItemForm = styled.div`

`