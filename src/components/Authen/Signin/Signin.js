import React from 'react'
import './Signin.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa';



function SignIn(props) {
    const handleOnClickLogIn = () => {
        props.setConditionLogIn(true)
        props.setConditionSignIn(false)
    }

    const handleOnClickBack = () => {
        props.setConditionSignIn(false)
    }

    return (
        <div className='modal'>
            <div className='overlay'></div>

            <div className='body'>
                <div className='auth'>
                    <div className='auth__container'>
                        <div className='auth__header'>
                            <h3 className='auth__heading'>Sign In</h3>
                            <button onClick={handleOnClickLogIn} className='auth__switch-btn'>Log In</button>
                        </div>

                        <form action="/post-crud" method="POST">
                            <div className='auth__form'>
                                <div className='auth__group'>
                                    <input type='text' className='auth__input' placeholder='User...' />
                                </div>
                                <div className='auth__group'>
                                    <input type='password' className='auth__input' placeholder='Password...' />
                                </div>
                                <div className='auth__group'>
                                    <input type='password' className='auth__input' placeholder='Password Again...' />
                                </div>
                                <div className='auth__group'>
                                    <input type='email' className='auth__input' placeholder='Email...' />
                                </div>
                            </div>
                        </form>

                        <div className='auth__aside'>
                            <p className='auth__policy-text'>
                                By registering, you agree to QShop about
                                <a href='' className='auth__text-link'>Terms of Service</a>
                                <a href='' className='auth__text-link'>Privacy Policy</a>
                            </p>
                        </div>

                        <div className='auth__controls'>
                            <button className='btn' onClick={handleOnClickBack}>Back</button>
                            <button className='btn btn--primary'>Sign In</button>
                        </div>
                    </div>

                    <div className='auth__socials'>
                        <a className='btn btn--s btn-with-icon' href="#"><FaFacebook />Connect with Facebook</a>
                        <a className='btn btn--s2 btn-with-icon' href="#"><FaGoogle />Conncet with Google</a>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default SignIn
