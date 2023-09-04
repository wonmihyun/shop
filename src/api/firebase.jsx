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

import {getDatabase , ref , get, set} from 'firebase/database';
// 파이어베이스의 데이터 베이스에 있는 정도를 가져오는 훅 
import {v4 as uuid} from 'uuid'; // uuid 고유 식별자를 생성해주는 패키지 



// .env.local 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL : process.env.REACT_APP_FIREBASE_DB_URL,
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

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
