import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';




const Product = (props) => {
    //console.log(props);
    const{img,name,seller,stock,price,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 class="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                {props.showAddToCart && <button 
                className="main-button"
                onClick={()=>props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faCartShopping} />add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;