// 파이어베이스 구글 로그인 가져오기 
// 문서로 이동 => 빌드 => 인증 => 웹 => google
// yarn add firebase 설치 


import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,signOut,GoogleAuthProvider } from "firebase/auth";

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


 
 