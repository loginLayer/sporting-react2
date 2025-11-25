import React from "react";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./CartItem.css";
import "../ItemDetail/ItemDetail.css";

export const CartItem = ({ item }) => {
  const itemName = item.name || "Producto";
  const itemQuantity = item.quantity || 1;
  const { removeItem } = useCartContext();

  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <img src={item.imageUrl} alt={item.description} />
        </div>
        <div className="cart-item">
          <h4 className="item-name">{itemName}</h4>
          <p>Cantidad: {itemQuantity}</p>
          {item.price && (
            <p>
              Subtotal:{" "}
              {(item.price * itemQuantity).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </p>
          )}
          <button
            onClick={() => removeItem(item.id)}
            className="btn-eliminar-producto"
          >
            Eliminar producto
          </button>
        </div>
      </div>
    </>
  );
};
