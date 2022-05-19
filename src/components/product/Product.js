import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, ratings} = props.product;
    // amra shop.js e handleAddToCart name akta function korse jei function tah k product component er data hisabe pathaise and amra aikhane props theke access kortase destructureing kore and amra cart btn er moddhe onclick er moddhe handleAddToCart k call kortase...
    const {handleAddToCart, product} = props;
    return (
        <div className='product'>
            <img src={img} alt="shoes"/>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rateings : {ratings} star</small></p>
            </div>
            {/* amra eventHandler with perameter nite amra arrow function er moddhe function k call kora lagbe amra perameter er value hisabe props theke jei function er tah pacchi ter perameter hocche product.. */}
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <p className='button-text'>Add to Cart</p>
                {/* useing react-fontawesome */}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
