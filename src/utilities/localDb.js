// use local storage to manage cart data
const addToLocalStorage = (id) => {
    let cartValue = {}

    // get cart from local storage
    const findDb = localStorage.getItem('shopping-cart');
    if (findDb) {
        // make the cart parse for make editable. 
        cartValue = JSON.parse(findDb)
    }

    // add quantity
    const itemCount = cartValue[id]
    if (itemCount) {
        cartValue[id] = itemCount + 1;
    }
    else {
        cartValue[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cartValue))
}

// remove items from storage
const removeFromStorage = (id) => {
    // get the cart from local storage
    const findDb = localStorage.getItem('shopping-cart');
    if (findDb) {
        // make the card editable
        const cartValue = JSON.parse(findDb);
        // get the id in cart
        if (id in cartValue) {
            // delete the key of object, by this way this whole item will be deleted
            delete cartValue[id];
            // set the local storage again
            localStorage.setItem('shopping-cart', JSON.stringify(cartValue))
        }
    }
}

export { addToLocalStorage, removeFromStorage }