import './App.css';
import { useState } from 'react';
import Banner from './componentes/Banner';
import Estandarte from './componentes/Estandarte';
import About from './componentes/AboutMe';
import Sobre from './componentes/SobreMim';
import Projects from './componentes/Projects';

function App() {
  
  const [cor, setCor] = useState('escuro');
  const [idioma, setIdioma] = useState('en');
  var CorFundo = cor === 'escuro' ? "fundoDasSecoesDark" : "fundoDasSecoesLight";

  if (idioma === 'en'){
    return (
      <main>
        <Banner modoCor={cor} setModoCor={setCor} setIdioma={setIdioma} />
        <div className={CorFundo}>
          <About modoCor={cor} />
          <Projects modoCor={cor} idioma={idioma} />
        </div>
      </main>
    );
  } else if (idioma === 'pt'){
    return (
      <main>
        <Estandarte modoCor={cor} setModoCor={setCor} setIdioma={setIdioma} />
        <div className={CorFundo}>
          <Sobre modoCor={cor} />
          <Projects modoCor={cor} idioma={idioma} />
        </div>
      </main>
    );
  }
}

export default App;