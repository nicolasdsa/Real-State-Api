import './Locador.css';
import React, { useEffect, useState } from "react"

function Locador() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/locador/");
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
        <h1 className='title'>Locadores Cadastrados:</h1>
        <table>
          <tbody>
            <tr>
              <th className='titleTable'>CPF</th>
              <th className='titleTable'>Nome</th>
              <th className='titleTable'>Idade</th>
              <th className='titleTable'>Telefone</th>
              <th className='titleTable'>Email</th>
            </tr>
            {data ? dataApi?.map( (value, index) => {
            return <tr key={index}>
              <th key={Math.random()}>{value.CPF}</th>
              <th key={Math.random()}>{value.Nome}</th>
              <th key={Math.random()}>{value.Idade}</th>
              <th key={Math.random()}>{value.Telefone}</th>
              <th key={Math.random()}>{value.Email}</th></tr>
            }): null}
          </tbody>
        </table>
      </main>
  );
}

export default Locador;