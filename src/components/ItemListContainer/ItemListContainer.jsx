import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://691a28c39ccba073ee950c0f.mockapi.io/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        let filteredProducts;

        if (categoryId) {
          filteredProducts = data.filter(
            (prod) => prod.category === categoryId
          );
        } else {
          filteredProducts = data;
        }

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      {categoryId && (
        <p class="filteredId">Filtrando por ➤ {categoryId.toUpperCase()}</p>
      )}
      <section className="main-container">
        {loading ? <p>Cargando productos...</p> : <ItemList list={products} />}
      </section>
    </>
  );
};
