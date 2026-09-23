import { useState } from 'react'
import Inicio from './components/state/Inicio/Inicio.jsx'
import Main from './components/state/Main/Main.jsx'
import './App.css'

const DURACION_TRANSICION = 900

function App() {
  const [estadoActual, setEstadoActual] = useState('inicio')
  const [saliendoDeInicio, setSaliendoDeInicio] = useState(false)

  const mostrarMain = () => {
    if (saliendoDeInicio) return

    setSaliendoDeInicio(true)

    setTimeout(() => {
      setEstadoActual('main')
    }, DURACION_TRANSICION)
  }

  return (
    <div className={`app ${saliendoDeInicio ? 'app--main' : 'app--inicio'}`}>
      {estadoActual === 'inicio' ? (
        <Inicio onGetStarted={mostrarMain} saliendo={saliendoDeInicio} />
      ) : (
        <Main />
      )}
    </div>
  )
}

export default App
