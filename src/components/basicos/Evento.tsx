
export default function Evento(){
    let contador = 0
    function imcrement(){
        console.log(contador++)
    }
    return(
        <button className={`
        h-52 w-52 bg-green-500
        `} onClick={imcrement}>
            Evento
        </button>
    )
}