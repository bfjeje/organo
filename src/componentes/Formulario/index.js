import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import {useState} from "react";

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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido: ',nome, cargo, imagem, time)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={teams}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                {/*Desta forma podemos enviar imagens e não so strings, como nos parametros*/}
                <Botao>
                    🎆 Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario