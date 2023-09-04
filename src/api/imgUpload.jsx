// https://cloudinary.com/documentation/upload_images

export async function upLoadImage(file){
    try{
        const formData = new FormData();
        formData.append('file',file);
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET); // cloudinary preset

        // response 응답 
        const res = await fetch(process.env.REACT_APP_CLOUDINARY_URL,{
            // 파일 가져오기 
            method : 'POST',
            body : formData,
        }); 

        // 업로드 되었는지 확인 res.ok 200번 성공 
        if(!res.ok){
            throw new Error(res.status);

        }
        const data = await res.json();
        return data.url;

    }
    // 업로드 실패 
    catch(error){
        console.error(error);
        throw error;
    }
    
    
}

