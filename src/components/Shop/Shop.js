import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStorageCart } from '../../utilities/localDb';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [items, setItems] = useState([])
    const handleAddToCart = (product) => {
        setItems([...items, product])
        addToLocalStorage(product.id)
    }

    useEffect(() => {
        const storageCart = getStorageCart();
        const savedCart = [];
        for (const id in storageCart) {
            // console.log(id)
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                addedProduct.quantity = storageCart[id]
                savedCart.push(addedProduct)
            }
        }
        setItems(savedCart)
    }, [products])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className="order-container">
                <Order items={items}></Order>
            </div>
        </div>
    );
};

export default Shop;