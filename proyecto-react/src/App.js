import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [datos, setDatos] = useState([{}]);
  useEffect(() => {
    fetch('http://localhost:3001/datos')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
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
