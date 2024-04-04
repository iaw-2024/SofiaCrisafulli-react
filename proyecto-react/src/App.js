import './App.css';
import datos from './datos.json';

function App() {
  return (
    <div className="App">
      <table className="App-table centered-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((usuario) => (
            <tr key={usuario.email}>
              <td>{usuario.email}</td>
              <td>{usuario.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
