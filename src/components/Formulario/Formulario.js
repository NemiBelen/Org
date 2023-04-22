import { useState } from "react";
import Boton from "../Boton";
import ListaOpciones from "../ListaOpciones";
import Campo from "../Campo";
import "./Formulario.css";
useState;

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const {registrarColaborador,crearEquipo} = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("datos enviados");
    let dato = { nombre, puesto, foto, equipo };
    registrarColaborador(dato)
  };

  const manejarNuevoEquipo =(e) =>{
    e.preventDefault();
    crearEquipo({titulo,colorPrimario:color})
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>

        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones
          equipos={props.equipos}
          valor={equipo}
          actualizarValor={setEquipo} />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>

         <Campo
            titulo="Titulo"
            placeholder="Ingresar titulo"
            required
            valor={titulo}
            actualizarValor={setTitulo}
         />
         <Campo
            titulo="Color"
            placeholder="Ingresar puesto"
            required
            valor={color}
            actualizarValor={setColor}
            type="color"
          
         />
         <Boton>Crear nuevo equipo</Boton>
        </form>
    </section>
  );
};

export default Formulario;
