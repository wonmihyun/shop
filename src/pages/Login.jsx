import React , {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { login, loginEmail } from '../api/firebase'

export default function Login(){

    const [email, setEmail] = useState(''); // 로그인 아이디 변경값 저장
    const [password, setPassword] = useState(''); // 로그인 비밀번호 변경값 저장 
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');


    // 파이어베이스에서 구글 로그인 정보 받아오기 
    const googleLogin = async () => {
        const user = await login();
        navigate('/'); // 로그인시 홈으로 이동
    }

    // 파이어베이스에서 이메일 로그인 정보 받아오기 
    const loginEvent = async (e)=>{

        e.preventDefault();

        try{
            const user = await loginEmail(email,password);
           
              // 로그인이 됐으면 홈으로 이동
                if(user){
                    navigate('/');
                }else{
                    setErrorMsg('이메일이나 비밀번호가 일치하지 않습니다.')
                }

        } catch(error){
            console.error(error);
        }


    }



    return(
        <div className='login container'>
            <h2 style={{margin : '10px 0px 10px'}}>로그인</h2>
            <form onSubmit={loginEvent}>
                <input 
                type='email' 
                placeholder='이메일을 입력하세요' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br></br> 
                <input style={{marginTop : '10px'}}
                    type='password'
                    placeholder='비밀번호를 입력하세요'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type='submit' style={{marginLeft : '5px'}}>로그인</button>
                {errorMsg && <span className='errorText'>{errorMsg}</span>}

            </form>
        
            <Link to='/join' >
                <button style={{marginTop : '10px'}}>회원가입</button>
            </Link>
             
            <button onClick={googleLogin} style={{marginLeft : '5px'}}>구글아이디로 로그인</button>
        </div>
    )
}