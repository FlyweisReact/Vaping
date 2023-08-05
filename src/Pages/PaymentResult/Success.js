import React, {useEffect} from "react";

const Success = ()=>{
    return (
        <>
        <div className="payment-success-container">
            <div className="payment-success-content">
                <h2>Payment Successful!</h2>
                <p>Thank you for your purchase.</p>
                <p>Your order will be delivered shortly.</p>
            </div>
        </div>
        </>
    )
}

export default Success;