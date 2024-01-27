import React, { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';

function App() {
  const [frase, setFrase] = useState('');
  const frases = [
    "¡Eres re linda!",
    "¡Sigue brillando!",
    "¡Que sea uno de los dias mas lindos del año!"
  ];

  const launchConfetti = () => {
    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 0.5, y: 0.6 }
    });

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(fraseAleatoria);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Felicidades Miriam!</h1>
        <img src="https://i.pinimg.com/564x/00/c5/e4/00c5e495a1efe04e845667dec01b1945.jpg" alt="Felicitación" className="responsive-image"/>
        <p>Que este día esté lleno de alegría y celebración. Boton con mensajes aleatoros</p>
        <button onClick={launchConfetti}>
          Preciona, para la sorpresa ❤️
        </button>
        {frase && <p className="frase">{frase}</p>}
      </header>
    </div>
  );
}

export default App;
