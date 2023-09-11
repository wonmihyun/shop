import React, { createContext , useState, useEffect, useContext} from "react";
import {userState, login, logout} from '../api/firebase';

const AuthConfirm = createContext();
// 인증관련 상태 생성

export function AuthContextProvider({children}){
    // 인증 상태 관리 기능 제공영역 
    const [user,setUser] = useState();

    useEffect(()=>{
        userState((user)=>{  // user에 callback이 들어옴
            setUser(user);   // userState로 전달받은 user의 정보값을 setUser에 전달
        })
    },[]); // 무한루프 방지 

    return (
        <AuthConfirm.Provider value={{user, uid:user && user.uid, login, logout}}>
            {children}
        </AuthConfirm.Provider>
    )
}
export function useAuthContext(){
    return useContext(AuthConfirm)
}
