import React from 'react';
import { useCartContext } from "../../context/CartContext/UseCartContext"; 
import { CartItem } from './CartItem'; 
import { Link } from 'react-router-dom';
import './CartView.css';

export const CartView = () => {
    const { cart, clearCart, getTotalItems, getTotalPrice } = useCartContext();
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    const formatPrice = (price) => {
        return price.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    if (cart.length === 0) {
        return (
            <>  
                <div className="cart-container">
                    <div className="cart-detail">
                        <h3>Parece que todavía no agregaste nada.</h3>
                        <p>Empieza a agregar productos.</p>
                        <Link to="/">
                            <button className="cart-button">
                                ¿Qué te gustaría comprar? 
                            </button>
                        </Link>
                        <p></p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="cart-container">
                <div className="cart-detail">
                    <h3>Resumen de tu Carrito ({totalItems} Productos)</h3>
                    
                    <div className="cart-list">
                        {cart.map((product) => (
                            <CartItem 
                                key={product.id} 
                                item={product}   
                            />
                        ))}
                    </div>
                    
                    <hr />

                    <div className="cart-summary">
                        <h2>Total: {formatPrice(totalPrice)}</h2> 
                    </div>
                    
                    <div className="cart-actions">
                        <button className="btn-checkout">
                            Finalizar Compra
                        </button>
                        <button onClick={clearCart} className="btn-clear-cart">
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
