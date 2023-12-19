import Filho from "./Filho";

interface PaiProps {
    nome: string,
    sobrenome: string
}

export default function Pai(props: PaiProps){
    return (
        <div className={`
            flex gap-5 flex-col
            bg-blue-500 text-white border border-white
            rounded-md p-5
        `}>
           <span>Pai: {props.nome} {props.sobrenome}</span>
            <Filho nome="Fulano" sobrenome={props.sobrenome}></Filho>
            <Filho nome="Sicrano" sobrenome={props.sobrenome}></Filho>
        </div>
    )
}