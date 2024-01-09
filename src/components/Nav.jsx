import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {login, logout, userState} from '../api/firebase'; // firebase 가져오기 
import UserData from './UserData';
import logoImg from '../img/일상.png';
 


// 아이콘 
import {BiCloset } from 'react-icons/bi';
import {CgShoppingCart} from 'react-icons/cg';
import {AiOutlineSearch} from 'react-icons/ai';
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
                 
                {/* <h1 className='title'><img src={logoImg}></img></h1> */}
                <img src={logoImg} className='logoImg'/>
                {/* <img src={`${process.env.PUBLIC_URL}/img/일상.png`}/> */}
                {/* <h1 className='title'>title</h1> */}


            </Link>
            <nav>
                <Link to='/items'>AllItems</Link>
              
            </nav>
            <UserWrap>
                <Link to='/search'><AiOutlineSearch className='write'/></Link>
                {user && user.isAdmin && (
                    <Link to='/items/new'>
                        <BiCloset className='write'/>
                    </Link>
                    
                )}

                <Link to='/cart'><CgShoppingCart className='write'/></Link>
 
                {/* {!user && <button onClick={login} className='loginBtn'>login</button> } */}
                {/* {user && <button onClick={useLogout} className='logoutBtn'>logout</button>}  */}
                
                {user ? (
                    <>
                    {user && <UserData user={user}/>}
                    <button onClick = {useLogout} className='logoutBtn'>logout</button>
                    </>
                ) : (
                    <Link to='/login'>
                    <button className='loginBtn'>login</button>
                    </Link>
                )}
 
            </UserWrap>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top : 0;
    left: 0;
    right: 0;
    z-index: 999;

    max-width: 1280px;
    margin: 0px auto;
    padding : 12px ;
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.8);
   
    
    .title{
        font-size: 20px;
        color: #333;
 
    }

    .logoImg{
        width: 120px;
        height: 75px;
    
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

    button{
        border: none;
        background: transparent;
        color: #333333;
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
            color : lightgray;
        
        }
    }


`