import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
   const cart = props.cart;
    const total = cart.reduce( (total,prd) => total + prd.price, 0);
    // let total =0; 
    // for (let i = 0; i< cart.length; i++) {
    //       const product = cart[i];
    //         total =total + product.price;
       
    // }
   let shippingCost =0;
   if(total >35){
      shippingCost =0;
   }
   else if (total > 15) {
        shippingCost = 4.99;
   } 
   else if(total > 0){
      shippingCost = 12.99;
   }

   const tax = (total/15).toFixed(2);
   const grandTotal = (total + shippingCost+ Number (tax)).toFixed(2);
 
    return ( 
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered : {cart.length}</p>
            <p>Product Price : {total}</p>
            <p><small>Shipping Cost : {shippingCost}</small></p>
            <p><small>Tax : {tax}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;