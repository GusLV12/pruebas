
function Table({ usuarios }) {
  return (
    <div className="table-responsive">
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Nombre de Usuario</th>
            <th>Correo</th>
            <th>Sitio Web</th>
            <th>Ciudad</th>
            <th>Empresa</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.phone}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>{usuario.website}</td>
              <td>{usuario.address.city}</td>
              <td>{usuario.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
