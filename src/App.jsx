import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from './components/Table';
import SearchForm from './components/SearchForm';

function App() {
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const peticionGet = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsuarios(response.data);
      setTablaUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="App">
      <SearchForm busqueda={busqueda} handleChange={handleChange} />
      <Table usuarios={usuarios} />
    </div>
  );
}

export default App;
