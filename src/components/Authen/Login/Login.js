import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css'
import handleLoginApi from '../../../services/userService';


function LogIn(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')


    const handleOnClickSignIn = () => {
        props.setConditionSignIn(true)
        props.setConditionLogIn(false)
    }

    const handleOnClickBack = () => {
        props.setConditionLogIn(false)
    }

    const handleLogin = async () => {
        
        
        try {
            let data = await handleLoginApi(username, password)
            console.log(data.message)
            if(data.errCode !==0){
                errMessage(data.message)
                console.log(data.message)
            }
            if(data.errCode === 0){
                console.log('login succeeds')
            }
        } 
        catch (e) {
            console.log(e.response.data.message)
            if(e.response){
                if(e.response.data){
                    setErrMessage(e.response.data.messega)
                }
            }
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }



    return (
        <div className='modal'>
            <div className='overlay'></div>

            <div className='body'>
                <div className='auth'>
                    <div className='auth__container'>
                        <div className='auth__header'>
                            <h3 className='auth__heading'>Log In</h3>
                            <button onClick={handleOnClickSignIn} className='auth__switch-btn'>Sign In</button>
                        </div>

                        <div className='auth__form'>
                            <div className='auth__group'>
                                <input type='text' className='auth__input' placeholder='User...' onChange={handleUsername} value={username} />
                            </div>
                            <div className='auth__group'>
                                <input type='password' className='auth__input' placeholder='Password...' onChange={handlePassword} value={password} />
                            </div>
                            <div className='' style={{color:'red'}}>
                                {errMessage}
                            </div>
                        </div>

                        <div className='auth__aside'>
                            <div className='auth__help'>
                                <a href='' className='auth__help-link auth__help-link-forgot'>Forgot password</a>
                                <span className='auth__help-separate'></span>
                                <a href='' className='auth__help-link auth__help-link-help'>Help?</a>
                            </div>
                        </div>

                        <div className='auth__controls'>
                            <button className='btn' onClick={handleOnClickBack}>Back</button>
                            <button className='btn btn--primary' onClick={handleLogin} >Log In</button>
                        </div>
                    </div>

                    <div className='auth__socials'>
                        <a className='btn btn--s btn-with-icon' href="https://www.facebook.com/profile.php?id=100011161051954"><FaFacebook />Connect with Facebook</a>
                        <a className='btn btn--s2 btn-with-icon' href="#"><FaGoogle />Connect with Google</a>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default LogIn