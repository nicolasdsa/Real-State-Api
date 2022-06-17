import './Home.css';
import imgAlugados from '../img/alugados.png'
import imgVagos from '../img/vagos.png'
import imgLocadores from '../img/locadores.png'
import imgLocatarios from '../img/locatarios.png'
import imgTotal from '../img/total.png'
import imgAluguel from '../img/aluguel.png'
import React, { useEffect, useState } from "react"


function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/home/");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <main className="main">
      <h1 className='bemvindo'>BEM VINDO(A) AO </h1>
      <h1 className='casarinha'>CASARINHA</h1>
      <div className='informacoesHome'>
        <div className='componenteHome'>
         <img className='icon' alt='' src={imgTotal}></img>
         <p className='phrase'>Quantidade Total de Imoveis:</p>
         <p className='quantity'>{data?.results?.countMovel[0]?.Imovel}</p>
        </div>
        <div className='componenteHome'>
         <img className='icon' alt='' src={imgAlugados}></img>
         <p className='phrase'>Quantidade de Imóveis alugados:</p>
         <p className='quantity'>{data?.results?.rentedMovel[0]?.Alugados}</p>
        </div>
        <div className='componenteHome'>
         <img className='icon' alt='' src={imgVagos}></img>
         <p className='phrase'>Quantidade de Imóveis Vagos:</p>
         <p className='quantity'>{data?.results?.notRentedImovel[0]?.Vagos}</p>
        </div>
        <div className='componenteHome'>
         <img className='icon' alt='' src={imgAluguel}></img>
         <p className='phrase'>Ganho total por Aluguéis:</p>
         <p className='quantity'>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(data?.results?.sumContrato[0]?.Total)}</p>
        </div>
        <div className='componenteHome'>
         <img className='icon' alt='' src={imgLocatarios}></img>
         <p className='phrase'>Quantidade de locatários:</p>
         <p className='quantity'>{data?.results?.countLocatario[0]?.Locatario}</p>
        </div>
        <div className='componenteHome'>
         <img className='icon' alt='' src={imgLocadores}></img>
         <p className='phrase'>Quantidade de locadores:</p>
         <p className='quantity'>{data?.results?.countLocador[0]?.Locador}</p>
        </div>
      </div>
    </main>

  );
}

export default Home;