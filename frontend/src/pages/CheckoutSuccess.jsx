import { Link } from "react-router-dom";
import React from 'react'

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
        <div>TICK ICON</div>

        <div>
            <h2>Payment Done!</h2>
            <p>Thank you for completing your secure online payment.</p>
            <p>Have a great day!</p>
        </div>

        <Link to={"/home"}>
           <div>Go back to home</div>
        </Link>
      
    </div>
  )
}

export default CheckoutSuccess
