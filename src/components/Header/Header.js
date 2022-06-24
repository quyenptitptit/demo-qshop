import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { GrCart } from "@react-icons/all-files/gr/GrCart";
import {BsPersonFill} from "@react-icons/all-files/bs/BsPersonFill";
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function Header(props) {

  const handleClickLogin = () => {
    props.setConditionLogIn(true)
  } 

  // const handleClickSignin = () => {
  //   props.setConditionSignIn(true)
  // }

  const handleClickCart = () => {
    props.setConditionCart(true)
  } 


  return (
    <>
    <div className='header'>

        <div className='logo'>
          {/* <h1>QSHOP<i class='fab fa-typo3' /></h1> */}
          <Link to="/" className='logo-link'>QSHOP<i class='fab fa-typo3' /></Link>
        </div>

        <div className='authen'>
          <button onClick={handleClickLogin}>Log In <BsPersonFill /> </button>
          {/* <button onClick={handleClickSignin}>Sign In</button> */}
          <button onClick={handleClickCart} className='cart' >Cart <GrCart className='cart' /></button>
        </div>

    </div>
    <Navbar innputData={props.innputData} setInputData={props.setInputData} setValueSearch={props.setValueSearch} />
    <Outlet />
    </>
  )
}

export default Header