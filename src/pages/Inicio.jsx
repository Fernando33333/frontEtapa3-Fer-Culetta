import { useContext, useState, useEffect } from "react";
import Card from "../components/Card";
import "./Inicio.scss";
import ProductoContext from "../contexts/ProductoContext";

const Inicio = () => {
  const { productos } = useContext(ProductoContext);
  const [productosFiltrados, setProductosFiltrados] = useState(null);

  useEffect(() => {
    if (productos) {
      setProductosFiltrados(productos);
    }
  }, [productos]);

  const buscar = (texto) => {
    if (!texto) {
      setProductosFiltrados(productos);
      return;
    }

    const prods = productos.filter((prod) =>
      prod.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    setProductosFiltrados(prods);
    return;
  };
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>Autos clásicos disponibles</h1>
          <p>Seleccione su modelo favorito</p>
        </header>
        <div className="buscador">
          <div className="search-bar">
            <form action="" className="search-bar__form-container">
              <label
                htmlFor="busqueda"
                className="search-bar__form-label"
              ></label>
              <input
                onChange={(evento) => buscar(evento.target.value)}
                type="search"
                className="search-bar__form-search"
                id="busqueda"
                placeholder="Busque su producto aquí."
              />
              {/* <input
                type="submit"
                value="Buscar"
                className="search-bar__form-submit"
              /> */}
            </form>
          </div>
        </div>
        <div className="cards-container">
          {productosFiltrados &&
            productosFiltrados.map((producto, idx) => (
              <Card key={idx} producto={producto} />
            ))}
        </div>
        {""}
        {/* <!-- .cards-container --> */}
      </section>{" "}
      {/* <!-- .section-cards --> */}
    </main>
  );
};

export default Inicio;
