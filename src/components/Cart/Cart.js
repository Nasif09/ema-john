import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price , 0);

    let shipping = 0;
    if(total > 35){
        shipping = 4.99;
    }else if(total > 15){
        shipping = 12.99;
    }

    const tax = total / 10;
    const grandTotal = (total + shipping + tax);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p><small>Item ordered:{cart.length}</small></p>
            <p><small>Product Price:{formatNumber(total)}</small></p>
            <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p><small>Total Price: {formatNumber(grandTotal)}</small></p>
        </div>
    );
};

export default Cart;