import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    return (
        <div className='cart'>
            <div> 
                <h1> Your Cart Items </h1>
            </div>
            <div>
                <div className='cartItems'>
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />
                        }
                    })}
                </div>
            </div>

            {totalAmount > 0 ? (
            <div className='checkout'>
                <p> Subtotal: ₱{totalAmount} </p>
                <button onClick={() => navigate('/')}> Continue Shoppping </button>
                <button> Checkout </button>
            </div>
            ) : (
                <h1> Your Cart is Empty</h1>
            )}
        </div>
    );
};