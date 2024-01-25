import React from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    return (
        <div>
            
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;