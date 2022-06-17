import './Cartorio.css';
import React, { useEffect, useState } from "react"

function Cartorio() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/contrato/");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);

  const dataApi = data.results;
  console.log(dataApi)

  return (
    <main className="main">
      <h1 className='title'>Cartório Parceiro:</h1>
      <table>
        <tbody>
          <tr >
            <th className='titleTable'>CNPJ</th>
            <th className='titleTable' >Telefone</th>
            <th className='titleTable'>Email</th>
          </tr>
          <tr>
            <th>{dataApi ? dataApi.informationCartorio[0].CNPJ : null}</th>
            <th>{dataApi ? dataApi.informationCartorio[0].Telefone : null}</th>
            <th>{dataApi ?dataApi.informationCartorio[0].Email : null}</th>
          </tr>
        </tbody>
      </table>
      <h1 className='title'>Contratos:</h1>
      <table>
        <tbody>
          <tr >
            <th className='titleTable'>Id</th>
            <th className='titleTable' >Clausulas</th>
            <th className='titleTable'>Aluguel</th>
            <th className='titleTable'>CPF do Locador</th>
            <th className='titleTable'>CPF do Locatario</th>
            <th className='titleTable'>CNPJ do Cartorio</th>
            <th className='titleTable'>Inicio</th>
            <th className='titleTable'>Final</th>
            <th className='titleTable'>Id do Imovel</th>
          </tr>
          {dataApi ? dataApi?.informationContrato.map( (value, index) => {
            return <tr key={index}>
              <th key={Math.random()}>{value.Id}</th>
              <th key={Math.random()}>{value.Clausulas}</th>
              <th key={Math.random()}>{value.Aluguel}</th>
              <th key={Math.random()}>{value.CPFLocador}</th>
              <th key={Math.random()}>{value.CPFLocatario}</th>
              <th key={Math.random()}>{value.CNPJCartorio}</th>
              <th key={Math.random()}>{value.DataInicio}</th>
              <th key={Math.random()}>{value.DataFinal}</th>
              <th key={Math.random()}>{value.IdImovel}</th></tr>
          }): null}
        </tbody>
      </table>
      <h1 className='title'>Empresas que realizam vistoria:</h1>
      <table>
        <tbody>
          <tr >
            <th className='titleTable'>CNPJ</th>
            <th className='titleTable' >Telefone</th>
            <th className='titleTable'>Email</th>
          </tr>
          {dataApi ? dataApi?.informationVistoria.map( (value, index) => {
            return <tr key={index}>
              <th key={Math.random()}>{value.CNPJ}</th>
              <th key={Math.random()}>{value.Telefone}</th>
              <th key={Math.random()}>{value.Email}</th></tr>
          }): null}
        </tbody>
      </table>
      <h1 className='title'>Vistorias realizadas:</h1>
      <table>
        <tbody>
          <tr >
            <th className='titleTable'>Id</th>
            <th className='titleTable' >CNPJ da Vistoria</th>
            <th className='titleTable'>Id Imovel</th>
            <th className='titleTable'>Data da Vistoria</th>
            <th className='titleTable'>Condição</th>
          </tr>
          {dataApi ? dataApi?.informationVistora.map( (value, index) => {
            return <tr key={index}>
              <th key={Math.random()}>{value.Id}</th>
              <th key={Math.random()}>{value.CNPJVistoria}</th>
              <th key={Math.random()}>{value.IdImovel}</th>
              <th key={Math.random()}>{value.DataVistoria}</th>
              <th key={Math.random()}>{value.Condicao}</th></tr>
          }): null}
        </tbody>
      </table>
      <h1 className='title'>Contratos Validados:</h1>
      <table>
        <tbody>
          <tr >
            <th className='titleTable'>Id do Contrato</th>
            <th className='titleTable' >CNPJ do Cartorio</th>
            <th className='titleTable'>Comprovante</th>
          </tr>
          {dataApi ? dataApi?.informationValida.map( (value, index) => {
            return <tr key={index}>
              <th key={Math.random()}>{value.IdContrato}</th>
              <th key={Math.random()}>{value.CNPJCartorio}</th>
              <th key={Math.random()}>{value.Comprovante}</th></tr>
          }): null}
        </tbody>
      </table>
      <h1 className='title'>Contratos Encerrados:</h1>
      <table>
        <tbody>
          <tr >
            <th className='titleTable'>Id do Contrato</th>
            <th className='titleTable' >CNPJ do Cartorio</th>
            <th className='titleTable'>Comprovante</th>
          </tr>
          {dataApi ? dataApi?.informationEncerra.map( (value, index) => {
            return <tr key={index}>
              <th key={Math.random()}>{value.IdContrato}</th>
              <th key={Math.random()}>{value.CNPJCartorio}</th>
              <th key={Math.random()}>{value.Comprovante}</th></tr>
          }): null}
        </tbody>
      </table>
    </main>
  );
}

export default Cartorio;