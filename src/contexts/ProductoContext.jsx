import { createContext, useEffect, useState } from "react";
import { del, get, post, put } from "../utils/http";

/* Creando CONTEXTO */
/* 1er -> Creación del contexto */
const ProductoContext = createContext();

/* 2do -> El armado del Provider */
const url =
  "http://localhost:8080/api/productos/";

const uploadUrl = 
 "http://localhost:8080/api/upload/"

const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    obtenerProductos();
  }, []); // <= Array vacío hace solo una petición

  const obtenerProductos = async () => {
    try {
      const products = await get(url);
      setProductos(products);
    } catch (error) {
      console.error(`ERROR obtenerProductos: ${error}`);
    }
  };

  const crearProductoContext = async (productoNuevo) => {
    try {
      // Guardo la imagen
      // const formData = new FormData();
      // formData.append("file", productoNuevo.foto);
      // await post(uploadUrl, formData);
      // Hago la petición (Guardo producto backend)
      const productoBackNuevo = await post(url, productoNuevo);
      // Actualizar el estado con el nuevo producto
      setProductos([...productos, productoBackNuevo]);
    } catch (error) {
      console.error("Falló crearProductoContext", error);
    }
  };

  const actualizarProductoContext = async (productoEditar) => {
    try {
      const productoEditado = await put(url, productoEditar.id, productoEditar);
      console.log(productoEditado);
      const nuevaDB = productos.map((producto) =>
        producto.id === productoEditado.id ? productoEditado : producto
      );
      setProductos(nuevaDB);
    } catch (error) {
      console.log("ERROR en actualizarProductoContext", error);
    }
  };

  const eliminarProductoContext = async (id) => {
    try {
      await del(url, id);
      const nuevaDB = productos.filter((producto) => producto.id !== id);
      setProductos(nuevaDB);
    } catch (error) {
      console.log("Todo salió mal en el eliminarProductoContext", error);
    }
  };

  const data = {
    productos,
    crearProductoContext,
    eliminarProductoContext,
    actualizarProductoContext,
  };

  return (
    <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
  );
};

/* 3er -> Exportaciones */
export { ProductoProvider };

export default ProductoContext;
