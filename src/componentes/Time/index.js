import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria}

    return (
        //Se for true, vai devolver a section. Renderização condicional.
        // Tambem pode ser usado o operador ternario x ? y : z
        props.colaboradores.length > 0 &&
        <section className="time" style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( colaborador =>
                    <Colaborador nome={colaborador.nome}
                                 cargo={colaborador.cargo}
                                 imagem={colaborador.imagem}/>
                )}
            </div>
        </section>
    )
}

export default Time