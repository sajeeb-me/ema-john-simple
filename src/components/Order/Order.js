import React from 'react';
import './Order.css'

const Order = ({ items }) => {
    return (
        <div className='order-summary'>
            <h5 className='order-title'>Order Summary</h5>
            <p className='order-info'>Selected Items: {items.length} </p>
            <p className='order-info'>Total Price: $000 </p>
            <p className='order-info'>Total Shipping Charge: $000 </p>
            <p className='order-info'>Tax: $000 </p>
            <h5 className='order-total'>Grand Total: $000 </h5>
        </div>
    );
};

export default Order;