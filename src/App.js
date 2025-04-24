import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dateTime, setDateTime] = useState({ date: '...', time: '...' });

  // Troque pela URL da sua API no Render depois do deploy
  const API_URL = 'https://atividade08-backend.onrender.com';

  const fetchDateTime = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setDateTime(data);
    } catch (error) {
      console.error('Erro ao buscar data/hora:', error);
    }
  };

  useEffect(() => {
    fetchDateTime(); // pega assim que o componente monta

    const interval = setInterval(fetchDateTime, 1000); // atualiza a cada 1s
    return () => clearInterval(interval); // limpa ao desmontar
  }, []);

  return (
    <div className="App">
      <h1>Data e Hora (Brasil)</h1>
      <p>{dateTime.date} - {dateTime.time}</p>
    </div>
  );
}

export default App;
