import { useState, useEffect } from "react";
import styles from "./productoApp.module.css";

function ProductoApp() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/productos"
        );

        const data = await response.json();

        setProductos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className={styles.titulo}>
        Catálogo de iPhone
      </h1>

      <div className={styles.productList}>
        {productos.map((producto) => (
          <div
            key={producto.id}
            className={styles.productCard}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className={styles.imagen}
            />

            <h2>{producto.nombre}</h2>

            <p>
              <strong>Precio:</strong> Bs.
              {producto.precio}
            </p>

            <p>
              <strong>Categoría:</strong>
              {" "}{producto.categoria}
            </p>

            <p>
              <strong>Estado:</strong>
              {" "}{producto.estado}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductoApp;