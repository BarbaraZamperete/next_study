import Pai from "./Pai";

interface AvoProps {
    nome: string,
    sobrenome: string
}

export default function Avo(props: AvoProps){
    return (
        <div className={`
            flex flex-col gap-5 p-5 border border-white
            text-white bg-purple-500 rounded-md
            `}>
            <span>Avô: {props.nome} {props.sobrenome}</span>
            <Pai nome="Régis" sobrenome={props.sobrenome}></Pai>
        </div>
    )
}