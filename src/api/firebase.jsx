// 파이어베이스 구글 로그인 가져오기 
// 오른쪽 상단 문서로 이동 => 빌드 => 인증 => 웹 => google
// yarn add firebase 설치 


import { initializeApp } from "firebase/app";
              
import { getAuth, 
  signInWithPopup, // 로그인시 팝업
  signOut,          // 로그아웃
  GoogleAuthProvider, // 사용자 정보 가져오기  
  onAuthStateChanged  
} from "firebase/auth";

import {getDatabase , ref , get, set, remove} from 'firebase/database';
// 파이어베이스의 데이터 베이스에 있는 정도를 가져오는 훅 
import {v4 as uuid} from 'uuid'; // uuid 고유 식별자를 생성해주는 패키지 
import { getStorage, ref as storageRef , getDownloadURL } from "firebase/storage"; // URL을 통해 데이터 다운로드  
// Cloud Storage 참조에 대해 getDownloadURL() 메서드를 호출하여 파일의 다운로드 URL을 가져올 수 있습니다.

// .env.local 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL : process.env.REACT_APP_FIREBASE_DB_URL,
  storageBucket : process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId : process.env.REACT_APP_STORAGE_MESSAGING_SENDER_ID,

  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(); // 매개변수에 app 추가
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app); // 추가 

export {storage}; // 추가 
export {auth}; // 추가


// 자동 로그인 방지 (계정 로그인)
provider.setCustomParameters({
  prompt : 'select_account',
})
// setCustomParameters : 사용자가 특정 로그인 시스템(Google, facebook...)을 이용할때 로그인 인증 메서드
// prompt를 매개변수로 해서 로그인 할때마다 select_account(계정 선택)라는 옵션으로 
// 로그인창을 새로 띄움



// 로그인 정보 받아오기 영역 
export async function login(){
  
    return signInWithPopup(auth, provider)
    .then((result) => {

    const user = result.user;
    console.log(user);
    return user;

    }).catch(console.error);
}

// 로그아웃 정보 받아오기 영역 
export async function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

// 사용자의 정보를 받아올 함수 
export function userState(callback){
  onAuthStateChanged(auth, async(user)=>{
    const userUpdate = user ? await addminUser(user) : user; // 관리자인지 사용자인지를 비교 
    callback(userUpdate);
  })
}


// 관리자 모드 (admin) 
async function addminUser(user){
  try{
    const adminState = await get(ref(database,'admin'));
    // adminState = database 주소에 있는 database중에서 admin값을 get(가져옴)
    if(adminState.exists()){ // adminState에서 가져온 데이터베이스 쿼리에서 얻은 객체  
      const admins = adminState.val(); // 값을 가져옴
      const isAdmin = admins.includes(user.email) // 반환값은 boolean
      // isAdmin = user에서 받아온 email주소가 database에서 받아온 addmin의 정보가 
      // 포함되는지 묻는 구문 포함되어 있으면 isAdmin이 true, 없으면 false를 표시 
      return {...user, isAdmin}; // user에 isAdmin을 추가 
      // user의 배열에 isAdmin값을 추가해서 새로 배열을 반환함 

    }
    return user;
    
  }
  catch (error){
    console.error(error); // 오류가 나올경우 오류 표시 
    throw error; // throw : 오류를 다시 발생시켜서 오류를 포착할 수 있게 하는 구문
  }
}

// 파이어베이스에 상품 정보 연동하기 
export async function addProduct(product, image){
  const id = uuid();
  return set(ref(database, `products/${id}`),{
    ...product,
    id,
    price : parseInt(product.price),
    image,
    option : product.option.split(',').map(option => option.trim()),
    
  })
}

// 파이어베이스 database에 있는 정보 가져오기 
export async function getProducts(){
  return get(ref(database, `products`)).then((snapshot)=>{ // snapshot : 렌더링 
    if(snapshot.exists()){
      return Object.values(snapshot.val())
    }
    return [];
  }) 
   
}

// 카테고리 불러오기 
export async function getCategory(){
  const database = getDatabase();
  const categoryRef = ref(database, `products`);
  try{
    const snapshot = await get(categoryRef);
    if(snapshot.exists()){
      return Object.values(snapshot.val());  
    }
    return []
  }

  catch(error){
    console.error(error);  
    throw error;

  }
}

// 카테고리 필터 
export async function getCategoryProduct(category){
  return get (ref(database, 'products'))
  .then((snapshot)=>{
    if(snapshot.exists()){
      const allProduct = Object.values(snapshot.val())
      const filterProduct = allProduct.filter((product)=>
      product.category === category
      )
      return filterProduct;
    }
    return [];
  })
}

 // 스토리지 이미지 불러오기 
 export async function loadSlideImage(imgPath) {
    const storage = getStorage();
    try{
      const imgRef = storageRef(storage, imgPath);
      const downloadURL = await getDownloadURL(imgRef);
      return downloadURL;
    }
    catch(error){
        console.error(error);
    }
 }


 // 카트 리스트 추가 
 // 로그인한 계정의 카트 정보를 받아옴 
 export async function getCart(userId){
    return get(ref(database, `cart/${userId}`))
    .then((snapshot)=>{
      const item = snapshot.val();
      return Object.values(item);
    })
 }

 export async function updateCart(userId,product){ // 회원 계정 정보
    //return set(ref(database, `cart/${userId}/${product.id}`), product);
    console.log(userId,product);
   try{
    const cartRef = ref(database, `cart/${userId}/${product.id}`);
    await set(cartRef, product);

   }catch(error){
    console.error(error);
   }  
}

 
export async function deleteItemCart(userId, productId){
  return remove(ref(database, `cart/${userId}/${productId}`))
}


export async function searchProducts(query){
   try{
    const dbRef = ref(database, 'products'); 
    // 렌더링
    const snapshot = await get(dbRef); 

    if(snapshot.exists()){
      const data = snapshot.val();
      const allProduct = Object.values(data);

      // 상품을 검색했을때 검색한 상품이 없으면 출력
      if(allProduct.length === 0){
        return [];
      }

      // 상품을 검색했을때 검색한 상품을 필터링 해줌 
      const matchItems = allProduct.filter((product)=>{
        const itemTitle = product.title.toLowerCase(); // 받아온 문자열을 소문자로 변환
        return itemTitle.includes(query.toLowerCase());
      })

      return matchItems;
    }else{
      return [];
    }

   }catch(error){
    console.error(error);
   }
}