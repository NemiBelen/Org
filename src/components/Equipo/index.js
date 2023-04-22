import Colaborador from "../Colaborador";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo,id} = props.datos
    const {colaboradores, eliminarColaborador,actualizarColor,like} = props

    const fondo ={
        backgroundColor: hexToRgba(colorPrimario,0.4)
    }
    const primario = { borderColor:colorPrimario}
  return  <>{ colaboradores.length > 0 && 
      <section className="equipo" style={fondo}>
        <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento) => {
              actualizarColor(evento.target.value,id)
            }}
        />
      <h3 style={primario}>{titulo}</h3>
      <div className="colaboradores">
        {
          colaboradores.map((colaborador,i) => <Colaborador 
          datos={colaborador} 
          key={i}
          colorPrimario={colorPrimario}
          eliminarColaborador={eliminarColaborador}
          like={like}
          />) 
        }
      </div>
    </section>}</>

};

export default Equipo;
