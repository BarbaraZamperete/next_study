import Circulo from '@/components/basicos/Circulo';
import Caixa from '../components/basicos/Caixa';
import Evento from '@/components/basicos/Evento';
import ImagemAleatorio from '../components/hooks/ImagemAleatorio';
import Avo from '@/components/comunicação/direta/Avo';
export default function Home(){
  return (
    <div>
      <h1>Principal Página</h1>
      <div className='flex gap-7 p-7'>
        <Caixa>#1</Caixa>
        <Caixa>#2</Caixa>
        <Caixa>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Caixa>
      </div>

      <div className=' flex justify-between items-center h-96 bg-gray-500'>
        <Circulo texto='Circulo 1'></Circulo>
        <Circulo texto='Circulo 2' quasePerfeito></Circulo>
        <Circulo texto='Circulo 3'></Circulo>
      </div>

      <div className="flex flex-wrap gap-5 m-5 justify-center items-center">
        <Evento></Evento>
        <Evento></Evento>
        <Evento></Evento>
      </div>


      <div className={`
        flex justify-center items-center h-96 gap-5
      `}>
        <ImagemAleatorio></ImagemAleatorio>
        <ImagemAleatorio></ImagemAleatorio>
        <ImagemAleatorio></ImagemAleatorio>
      </div>


      <div className='flex flex-col justify-center items-center'>
        <h1>Comunicação Direta</h1>
        <Avo nome='Manoel' sobrenome='Oliveira'></Avo>
      </div>
    </div>
  )
}