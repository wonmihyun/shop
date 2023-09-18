import React , {useState} from 'react';
import { checkEmail, joinEmail } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

export default function Join(){

    const [email, setEmail] = useState(''); // 로그인 아이디 변경값 저장
    const [password, setPassword] = useState(''); // 로그인 비밀번호 변경값 저장 
    const [psError, setPsError] = useState(''); // 비밀번호 오류
    const [emailError, setEamilError] = useState(''); // 이메일이 틀렸는지 확인
    const navigate = useNavigate(); // useHistory 버전은 하위 버전에서 사용하던 버전 

    const signUpEvent = async(e)=>{
        e.preventDefault();

        // 이메일 
        // const isEmail = await checkEmail(email);
        // if(isEmail){
        //     setEamilError('동일한 이메일이 있습니다. 다른 이메일을 사용해주세요.');
        // }

        // 비밀번호
        if(password.length < 6){
            setPsError('비밀번호는 6글자 이상이어야 합니다.');
            return 
        }

        try{
            const user = await joinEmail(email,password);
            console.log(user);
            navigate('/'); // 로그인시 홈으로 이동

        }catch(error){
            console.error(error);
        }
    }

    return (
        <div className='container'>
            <h2>회원가입</h2>
            <form onSubmit={signUpEvent}>
                <div>
                <input
                    type='email'
                    placeholder='이메일을 입력해주세요.'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    {emailError && <span className='errorText'>{emailError}</span>}
                </div>

    
                <div>
                <input
                    type='password'
                    placeholder='비밀번호를 입력하세요'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                {psError && <span className='errorText'>{psError}</span>}

                </div>
                <button type='submit'>회원가입하기</button>     
            </form>
            
        </div>
    )
}