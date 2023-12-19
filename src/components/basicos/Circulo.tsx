interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}


export default function Circulo(props: CirculoProps){
    console.log(props)
    return (
        <div className={`
        h-64 w-64 bg-cyan-500 
        flex justify-center items-center
        text-3xl font-bold
        ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}