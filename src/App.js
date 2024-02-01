import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100; 
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
    setClassificacao(obterClassificacaoIMC(imcCalculado));
  };

  const obterClassificacaoIMC = (imc) => {
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label htmlFor="altura">Altura (cm): </label>
        <input type="number" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label htmlFor="peso">Peso (kg): </label>
        <input type="number" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && classificacao && (
        <div>
          <h2>IMC: {imc}</h2>
          <h2>Classificação: {classificacao}</h2>
        </div>
      )}
    </div>
  );
}

export default App;