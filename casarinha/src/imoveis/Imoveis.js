import './Imoveis.css';
import React, { useEffect, useState } from "react"

function Imoveis() {
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    Id: '',
    Tipo: '',
    Endereco: '',
    CPFLocador: '',
    CPFLocatario: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/imovel/")
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/imovel/", {method: "POST",
    body: JSON.stringify(form)});
    const json = await response.text();
    setError(json);
    if(error !== 'Confirmado'){
      alert(json)
    }


    document.location.reload(true);
  }

  async function deleteChange(event){
    event.preventDefault();
    const response = await fetch("http://localhost:3000/imovel/", {method: "DELETE",
    body: JSON.stringify({Id: event.target.id })});
    const json = await response.text();
    setError(json);
    if(error !== 'Confirmado'){
      alert(json)
    }

    document.location.reload(true);
  }



  function handleChange({target}){
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  const dataApi = data.results;


  return (
    <main className="main">
      <h1 className='title'>Imóveis Cadastrados:</h1>
      <table>
        <tbody>
          <tr>
          <th className='titleTable'>Excluir</th>
            <th className='titleTable'>Id do Imóvel</th>
            <th className='titleTable'>Tipo</th>
            <th className='titleTable'>Endereço</th>
            <th className='titleTable'>CPF do Locatário</th>
            <th className='titleTable'>CPF do Locador</th>
          </tr>
          {data ? dataApi?.map( (value, index) => {
            return <tr key={index}>
              <th ><button id = {value.Id} onClick={deleteChange}>X</button></th>
              <th key={Math.random()}>{value.Id}</th>
              <th key={Math.random()}>{value.Tipo}</th>
              <th key={Math.random()}>{value.Endereco}</th>
              <th key={Math.random()}>{value.CPFLocatario ? value.CPFLocatario : 'Não possui'}</th>
              <th key={Math.random()}>{value.CPFLocador}</th></tr>
          }): null}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <label>Id do Imóvel</label>
        <input  type='text' id="Id" pattern="[0-9]+" value={form.CPF} maxLength={11} onChange={handleChange} required></input>
        <label>Tipo:</label>
        <input type='text' id="Tipo" value={form.Nome} onChange={handleChange} maxLength={30} required></input>
        <label>Endereço:</label>
        <input type='text' id="Endereco"  value={form.Idade} maxLength={30} onChange={handleChange} required></input>
        <label>CPF do Locador:</label>
        <input type='text' id="CPFLocador" pattern="[0-9]+" value={form.Telefone} maxLength={11} onChange={handleChange} required></input>
        <label>CPF do Locatário:</label>
        <input type='text' id="CPFLocatario" pattern="[0-9]+" value={form.Email} onChange={handleChange} maxLength={11}></input>
        <button>Enviar</button>
      </form>
     
    </main>
  );
}

export default Imoveis;