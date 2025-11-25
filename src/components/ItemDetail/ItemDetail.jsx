import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();
  const itemWithQuantity = {
    ...detail,
    quantity: 1,
  };

  return (
    <>
      <div className="item-container">
        <div className="item-detail">
          <div className="product-image">
            <img src={detail.imageUrl} alt={detail.description} />
          </div>

          <div className="product-info">
            <h1>{detail.name || "Producto"}</h1>
            <p className="product-description">
              {detail.description || "Descripción no disponible."}
            </p>
            <p className="product-price">
              Precio:{" "}
              {detail.price
                ? detail.price.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                : "Consultar"}
            </p>
            <p className="discount-info">Comprando en 1 pago</p>
            <button
              onClick={() => {
                addItem(itemWithQuantity);
              }}
              className="btn-add-to-cart"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
