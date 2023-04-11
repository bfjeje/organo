import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Innovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={teams}/>
                {/*Desta forma podemos enviar imagens e não so strings, como nos parametros*/}
                <Botao>
                    🎆 Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario