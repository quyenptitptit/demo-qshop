import React from 'react'
import './Cart.css'
import { GrCart } from "@react-icons/all-files/gr/GrCart";


function Cart(props) {

  const handleClickBack = () => {
      props.setConditionCart(false)
  }


  return (
    <div className='cart_modal'>
            <div className='cart_overlay'></div>

            <div className='cart_main'>
                <div className='cart_header'>
                  <h1>CART</h1>
                </div>

                <div className='cart_body'>
                  There is no item in the cart 
                </div>

                <div className='cart_footer'>
                  <button onClick={handleClickBack} className='btn_back'>Back</button>
                  <button className='btn_checkout'>Check out</button>
                </div>
            </div>
        </div>


  )
}

export default Cart