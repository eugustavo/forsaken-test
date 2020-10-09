import React, { useState } from 'react';
import {Rectangle, Circle, Triangle} from 'react-shapes';

import './App.css';

function App() {
  const [retanguloBase, setRetanguloBase] = useState(0);
  const [retanguloAltura, setRetanguloAltura] = useState(0);
  const [retanguloCor, setRetanguloCor] = useState('');

  const [trianguloBase, setTrianguloBase] = useState(0);
  const [trianguloAltura, setTrianguloAltura] = useState(0);
  const [trianguloCor, setTrianguloCor] = useState('');

  const [circuloRaio, setCirculoRaio] = useState(0);
  const [circuloCor, setCirculoCor] = useState('');

  const [triangulo, setTriangulo] = useState(false);
  const [retangulo, setRetangulo] = useState(false);
  const [circulo, setCirculo] = useState(false);

  function handleTriangulo() {
    setRetangulo(false);
    setCirculo(false);
    
    setTriangulo(true);
  }

  function handleRetangulo() {
    setCirculo(false);
    setTriangulo(false);
    
    setRetangulo(true);
  }

  function handleCirculo() {
    setTriangulo(false);
    setRetangulo(false);
    
    setCirculo(true);
  }


  return (
    <div className="container">
      <div className="controls">
        <div className="triangulo">
          <h3>Triangulo</h3>

          <div className="triControls">
            <div className="base">
              <p>Base</p>
              <input type="number" min="1" value={trianguloBase} onChange={e => setTrianguloBase(Number(e.target.value))} />
            </div>

            <div className="base">
              <p>Altura</p>
              <input type="number" min="1" value={trianguloAltura} onChange={e => setTrianguloAltura(Number(e.target.value))} />
            </div>

            <div className="base">
              <p>Cor</p>
              <select value={trianguloCor} onChange={e => setTrianguloCor(e.target.value)}>
                <option selected value="#121212">Escolha uma cor</option>
                <option value="#000dc9">Azul</option> 
                <option value="#03c900" selected>Verde</option>
                <option value="#c90000">Vermelho</option>
              </select>
            </div>
          </div>

          <button onClick={handleTriangulo}>Adicionar Triangulo</button>
        </div>


        <div className="triangulo">
          <h3>Retangulo</h3>

          <div className="triControls">
            <div className="base">
              <p>Largura</p>
              <input type="number" min="1" value={retanguloBase} onChange={e => setRetanguloBase(Number(e.target.value))}/>
            </div>

            <div className="base">
              <p>Altura</p>
              <input type="number" min="1" value={retanguloAltura} onChange={e => setRetanguloAltura(Number(e.target.value))} />
            </div>

            <div className="base">
              <p>Cor</p>
              <select value={retanguloCor} onChange={e => setRetanguloCor(e.target.value)}>
                <option selected value="#121212">Escolha uma cor</option>
                <option value="#000dc9">Azul</option> 
                <option value="#03c900" selected>Verde</option>
                <option value="#c90000">Vermelho</option>
              </select>
            </div>
          </div>

          <button onClick={handleRetangulo}>Adicionar Retangulo</button>
        </div>


        <div className="triangulo">
          <h3>Circulo</h3>

          <div className="triControls">
            <div className="base">
              <p>Raio</p>
              <input type="number" min="1" value={circuloRaio} onChange={e => setCirculoRaio(Number(e.target.value))}/>
            </div>

            <div className="base">
              <p>Cor</p>
              <select value={circuloCor} onChange={e => setCirculoCor(e.target.value)}>
                <option selected value="#121212">Escolha uma cor</option>
                <option value="#000dc9">Azul</option> 
                <option value="#03c900" selected>Verde</option>
                <option value="#c90000">Vermelho</option>
              </select>
            </div>
          </div>

          <button onClick={handleCirculo}>Adicionar Cirulo</button>
        </div>

      </div>

      <div className="shapes">
        {retangulo &&
          <Rectangle width={retanguloBase} height={retanguloAltura} fill={{color:`${retanguloCor}`}} />
        }

        {circulo &&
          <Circle r={circuloRaio} fill={{color:`${circuloCor}`}} />
        }

        {triangulo &&
          <Triangle width={trianguloBase} height={trianguloAltura} fill={{color:`${trianguloCor}`}} />
        }
      </div>     
    </div>
  );
}

export default App;
