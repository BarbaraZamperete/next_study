import Image from "next/image"
import React, { useEffect, useState } from "react";


export default function ImagemAleatorio(){
    const url = 'http://source.unsplash.com/200x200?'
    // let pesquisa: string = ''
    const [pesquisa, alterarPesquisa] = useState('')


    function renderBotao(valor: string){
        return (
            <button className="bg-blue-500 px-4 py-2 rounded-md" 
            onClick={() => {
                alterarPesquisa(valor)
                }}>
                {valor}
            </button>
        )
    }
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-7 rounded-md border border-zinc-500 ">
            <Image src={`${url}${pesquisa}`} height={200} width={200} alt="Imagem"/>
            <div className="flex justify-between gap-5">
                {renderBotao('abstract')}
                {renderBotao('city')}
                {renderBotao('person')}
            </div>
        </div>
    )
}