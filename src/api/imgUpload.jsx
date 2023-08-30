// https://cloudinary.com/documentation/upload_images

import React from 'react';

export async function imgUpload(file){
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    return fetch(process.env.REACT_APP_CLOUDINARY_URL,{
        method: "POST",
        body: formData
    })
    .then((res)=>res.json())
    .then((data)=>data.url);


      

    // for (let i = 0; i < files.length; i++) {
    //   let file = files[i];
      
  
    //   fetch(url, {
    //     method: "POST",
    //     body: formData
    //   })
    //     .then((response) => {
    //       return response.text();
    //     })
    //     .then((data) => {
    //       document.getElementById("data").innerHTML += data;
    //     });
    // }
}

