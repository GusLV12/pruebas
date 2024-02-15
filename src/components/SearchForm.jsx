import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchForm({ busqueda, handleChange }) {
  return (
    <div className="flex w-full">
      <input
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Búsqueda por Nombre o Empresa"
        onChange={handleChange}
      />
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchForm;
