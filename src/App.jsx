import './App.css'
import Fortuna from './components/Fortuna'
import Galleta from './components/Galleta'
import phrases from './data/phrases.json'
import { useState, useEffect } from 'react'


function App() {
  const backgrounds = ["/img/fondo-1.jpg", "/img/fondo-2.jpg", "/img/fondo-3.jpg", "/img/fondo-4.jpg", "/img/fondo-1.jpg", "/img/fondo-2.jpg", "/img/fondo-3.jpg", "/img/fondo-4.jpg", "/img/fondo-1.jpg", "/img/fondo-2.jpg", "/img/fondo-3.jpg", "/img/fondo-4.jpg", "/img/fondo-1.jpg", "/img/fondo-2.jpg", "/img/fondo-3.jpg"];
  const [index, setIndex] = useState(0)
  const currentBackground = backgrounds[index]

  const changePhrases = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    setIndex(randomIndex)
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    setIndex(randomIndex)
  }, [])

  document.body.style=`background: URL(${ backgrounds[index]}) no-repeat center center fixed;
  baground-size:cover;
  display: flex;
  justify-content: center;
  align-items: center;`

  return (
    <div className="container">
      <div className="background" style={{ backgroundImage: `url(${currentBackground})` }}></div>
      <Fortuna data={phrases[index]} backgroundImg={currentBackground} />
      <Galleta onClick={changePhrases} />
    </div>
  )
}

export default App;


