import React, { useState } from 'react';
import ListBackend from './../services/text-davinci-003/service,list'; // Importa el backend

function ListFrontend() {
  const [animal, setAnimal] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si se ingresó un animal válido
    if (animal.trim().length === 0) {
      setError('Please enter a valid animal');
      return;
    }

    try {
      const response = await ListBackend.getDaVinci({ animal });

      if (response.status === 200) {
        setResult(response.result);
        setError('');
      } else {
        setResult('');
        setError(response.error.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError('An error occurred during your request.');
      setResult('');
    }
  };

  return (
    <div>
      <h1>Lista de equipos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Animal:
          <input type="text" value={animal} onChange={(e) => setAnimal(e.target.value)} />
        </label>
        <button type="submit">Generate List</button>
      </form>
      {error && <p>Error: {error}</p>}
      {result && (
        <div>
          <h2>Generated List:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default ListFrontend;
