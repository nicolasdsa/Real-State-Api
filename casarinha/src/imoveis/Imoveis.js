import './Imoveis.css';
import React, { useEffect, useState } from "react"

function Imoveis() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/imovel/");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);

  const dataApi = data.results;



  return (
    <main className="main">
      <h1 className='title'>Imóveis Cadastrados:</h1>
      <table>
        <tbody>
          <tr>
            <th className='titleTable'>Id do Imóvel</th>
            <th className='titleTable'>Tipo</th>
            <th className='titleTable'>Endereço</th>
            <th className='titleTable'>CPF do Locatário</th>
            <th className='titleTable'>CPF do Locador</th>
          </tr>
          {data ? dataApi?.map( (value, index) => {
            return <tr key={index}>
              <th key={Math.random()}>{value.Id}</th>
              <th key={Math.random()}>{value.Tipo}</th>
              <th key={Math.random()}>{value.Endereco}</th>
              <th key={Math.random()}>{value.CPFLocatario ? value.CPFLocatario : 'Não possui'}</th>
              <th key={Math.random()}>{value.CPFLocador}</th></tr>
          }): null}
        </tbody>
      </table>
    </main>
  );
}

export default Imoveis;