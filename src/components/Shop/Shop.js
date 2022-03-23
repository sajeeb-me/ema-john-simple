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
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const isExist = items.find(product => product.id === selectedProduct.id);
        if (!isExist) {
            selectedProduct.quantity = 1;
            newCart = [...items, selectedProduct]
        }
        else {
            const rest = items.filter(product => product.id !== selectedProduct.id);
            isExist.quantity = isExist.quantity + 1;
            newCart = [...rest, isExist]
        }
        setItems(newCart)
        addToLocalStorage(selectedProduct.id)
    }

    useEffect(() => {
        // get storage cart
        const storageCart = getStorageCart()
        // setting an empty array for pushing addedProduct and then it will be set as items in setItems function
        const savedCart = [];
        // get property from storage cart by for in loop (because this is an object)
        for (const id in storageCart) {
            // finding the products which have this id 
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // changing the quantity
                addedProduct.quantity = storageCart[id];
                // pushing addedProduct in savedCart
                savedCart.push(addedProduct);
            }
        }
        // setting items value as savedCart
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