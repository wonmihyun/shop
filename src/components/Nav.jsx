import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {login, logout, userState} from '../api/firebase'; // firebase 가져오기 
import UserData from './UserData';
import {BiCloset, BiIdCard} from 'react-icons/bi';
import { useAuthConfirm } from '../context/AuthConfirm';


export default function Nav(){

    const [user, setUser] = useState();

    useEffect(()=>{
        userState((user)=>{ // user에 callback이 들어옴
            console.log(user);
            setUser(user); // userState로 전달받은 user의 정보값을 setUser에 전달
        })
    },[]);

    const useLogin = () =>{
        login().then(setUser);
    }

    const useLogout = () =>{
        logout().then(setUser);
    }

   // const [user, login, logout] = useAuthConfirm();



    return(
        <HeaderContainer>
            <Link to='/'>
                <h1 className='title'>title</h1>
            </Link>
            <nav>
                <Link to='/items'>AllItems</Link>
                <Link to='/cart'>장바구니</Link>
            </nav>
            <UserWrap>
                {user && user.isAdmin && (
                    <Link to='/items/new'>
                        <BiCloset className='write'/>
                    </Link>
                    
                )}

                {user && <UserData user={user}/>}
                {!user && <button onClick={login} className='loginBtn'>login</button> }
                {user && <button onClick={useLogout} className='logoutBtn'>logout</button>} 
                
            </UserWrap>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    padding : 12px;
    border-bottom : solid 1px #dddddd;
    display: flex;
    align-items: center;
    
    .title{
        font-size: 20px;
        color: #333;
    }
    nav{
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: 50px;

        a{
            color:#333;
        }
    }
`

const UserWrap = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 12px;
    a {
        .write{
            font-size : 36px;
            color : pink;
        
        }
    }


`