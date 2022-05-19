import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    // cart state
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    // step: 1 create Cart-event-handler and pass handler in Product component in props and use handler in product component..

    /* amra event-handler tah shop er moddhe declare korse ai handler tah k amra Product component er data hisabe pathacchi access kortase product component e props perameter theke jake amra destructureing kore amra dynamic vabe use kortase toh aikhane amra handler create kortase shop.js e oikhan theke access kortase product.js e props perameter hisabe and props k destructureing kore onClick diye handler k call kortase and dynamic vabe handler add kortase amra handler e perameter nise onClick er moddhe  handler with perameter k akshate call korte amra arrow function er moddhe handler add kora lage sheitae amra korse handler e amra 1st e console.log kore dekhse kaj kortase kina beginner hisabe... */

    // step: 2 update cart : useing of useState and update cart and total on click in cart-container  
    
    /* cart-state :  at first amra akta state create korse karon amra add cart e click korle joto gulo click korbo sheigulo cart-container er moddhe show korbe mne amra add cart korbo ak jaygay sheita update dekhabe arek jaygay aita hocche change hbe ui so amra  useState use kore amra state tah change korte pari sheita korte amra akta state create korse upore then amra handler er moddhe amdr kaj hocche amra handler e click korle aikhane handler hocche add cart button click korle cart means cart-state tah update hobe tai amra handler er moddhe newCart name akta variable er moddhe array nise [] jer moddhe ager cart er moddhe joto gula product ase means state ase sheigula k copy korte ...state-var-name terpor , coma diye new product means array k copy kore new akta array create korte new click korle amdr new product means new state gulo add hbe mne new state tah add hbe ex: const newCart = [...cart, product]; then amra setState() er moddhe amra newCart variable tah add kore diye state tah change kortase amra ai change er update tah cart-container er moddhe dynamic vabe state cart name jei state tah nise sheita call kore update tah dekhacchi...*/

    const handleAddToCart = (product) => {
        console.log(product);
        // do not do this method : cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h3>This is for products: {products.length}</h3> */}
                {/* amra react e upor theke data niche pathate pari kinto nich theke data upore pathate pari nh..tai amra cart-event-handler jei function ta shei function k amra product component er moddhe props hisabe pathacchi... */}
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;