import React from "react";
import "./Contacto.scss";
const Contacto = () => {
  return (
    <div class="form-contacto">
      <h2>Contacto</h2>
      <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
