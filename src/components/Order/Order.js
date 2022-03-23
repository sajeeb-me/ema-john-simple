import React from 'react';
import './Order.css'

const Order = ({ items }) => {
    let selectedItems = 0;
    let totalPrice = 0;
    let shippingCharge = 0;
    items.forEach(item => {
        selectedItems = selectedItems + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
        shippingCharge = shippingCharge + item.shipping;
    })
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='order-summary'>
            <h5 className='order-title'>Order Summary</h5>
            <p className='order-info'>Selected Items: {selectedItems} </p>
            <p className='order-info'>Total Price: ${totalPrice} </p>
            <p className='order-info'>Total Shipping Charge: ${shippingCharge} </p>
            <p className='order-info'>Tax: ${tax} </p>
            <h5 className='order-total'>Grand Total: ${grandTotal} </h5>
        </div>
    );
};

export default Order;