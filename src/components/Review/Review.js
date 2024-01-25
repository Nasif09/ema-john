import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { Placeholder } from 'react-bootstrap';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderplaced , setOrderPlaced] = useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) =>{
        console.log('remove clicked',productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])

    let thankyou;
    if(Placeholder){
        thankyou = <img src={happyImage} alt="Happy Image" />
    }


    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}  
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItem>)
            }

            { processOrder && thankyou}

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;