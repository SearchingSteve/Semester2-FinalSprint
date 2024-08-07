// Product List Component for Dog Store React Application
// submission date: august 12, 2024
// author: Sara Woodford

import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/api';
import '../styles/productList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productInfo = getProducts();
        setProducts(productInfo);
    }, []);

    return(
        <div className = 'productList'>
            {products.map((product) => (
                <div key={product.id} className = 'productItemCont'>
                    <h4>{product.product}</h4>
                    <img src={product.image} alt={product.product} className = 'productImage'/>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;