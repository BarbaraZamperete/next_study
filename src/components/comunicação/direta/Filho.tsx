interface FilhoProps {
    nome: string,
    sobrenome: string
}


export default function Filho(props: FilhoProps){

    return (
        <div className={` flex justify-center bg-gray-500 p-5`}>
            <span>Filho: {props.nome} {props.sobrenome}</span>
        </div>
    )
}