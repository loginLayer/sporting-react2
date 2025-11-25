import { Children } from "react";
import "./Item.css";

export const Item = ({
  imageUrl,
  brand,
  name,
  price,
  description,
  children,
}) => {
  return (
    <article>
      <img src={imageUrl} alt={description} />
      <p className="art-brand">{brand}</p>
      <h4>{name}</h4>
      <p className="product-price">$ {price.toLocaleString("es-AR")}</p>
      <p className="discount-info">Comprando en 1 pago</p>
      {children}
    </article>
  );
};
