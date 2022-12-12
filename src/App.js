import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import './styles/Boton.css';
import './App.css';
import logo from './imagenes/logofree.png';
import {useState} from 'react';

function App() {

  const [numClicks, asignarNumClicks] = useState(0); 

  const manejarClic = () => {
    asignarNumClicks(numClicks + 1);

  }

  const reiniciarContador = () => {
    asignarNumClicks(0);
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton 
          texto="Click"
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
