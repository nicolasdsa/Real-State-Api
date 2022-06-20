import './Locador.css';
import React, { useEffect, useState } from "react"

function Locador() {
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    CPF: '',
    Nome: '',
    Idade: '',
    Telefone: '',
    Email: ''
  });

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

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/locador/", {method: "POST",
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
    const response = await fetch("http://localhost:3000/locador/", {method: "DELETE",
    body: JSON.stringify({CPFLocador: event.target.id })});
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

  console.log({error})

  return (
      <main className="main">
        <h1 className='title'>Locadores Cadastrados:</h1>
        <table>
          <tbody>
            <tr>
            <th className='titleTable'>Excluir</th>
              <th className='titleTable'>CPF</th>
              <th className='titleTable'>Nome</th>
              <th className='titleTable'>Idade</th>
              <th className='titleTable'>Telefone</th>
              <th className='titleTable'>Email</th>
            </tr>
            {data ? dataApi?.map( (value, index) => {
            return <tr key={index}>
              <th ><button id = {value.CPF} onClick={deleteChange}>X</button></th>
              <th key={Math.random()}>{value.CPF}</th>
              <th key={Math.random()}>{value.Nome}</th>
              <th key={Math.random()}>{value.Idade}</th>
              <th key={Math.random()}>{value.Telefone}</th>
              <th key={Math.random()}>{value.Email}</th></tr>
            }): null}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
        <label>CPF:</label>
        <input  type='text' id="CPF" pattern="[0-9]+" value={form.CPF} maxLength={11} onChange={handleChange} required></input>
        <label>Nome:</label>
        <input type='text' id="Nome" value={form.Nome} onChange={handleChange} maxLength={30} required></input>
        <label>Idade:</label>
        <input type='text' id="Idade" pattern="[0-9]+" value={form.Idade} maxLength={3} onChange={handleChange} required></input>
        <label>Telefone:</label>
        <input type='tel' id="Telefone" pattern="[0-9]+" value={form.Telefone} maxLength={11} onChange={handleChange} required></input>
        <label>Email:</label>
        <input type='email' id="Email" value={form.Email} onChange={handleChange} maxLength={30} required></input>
        <button>Enviar</button>
      </form>
      </main>
  );
}

export default Locador;