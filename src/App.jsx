import './App.css'
import Fortuna from './components/Fortuna'
import Galleta from './components/Galleta'
import phrases from './data/phrases.json'
import { useState, useEffect } from 'react'
import backgroundImage1 from './img/FONDO 1.jpg'
import backgroundImage2 from './img/FONDO 2.jpg'
import backgroundImage3 from './img/FONDO 3.jpg'
import backgroundImage4 from './img/FONDO 4.jpg'

function App() {
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage1, backgroundImage2, backgroundImage3];
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

  return (
    <div className="container">
      <div className="background" style={{ backgroundImage: `url(${currentBackground})` }}></div>
      <Fortuna data={phrases[index]} backgroundImg={currentBackground} />
      <Galleta onClick={changePhrases} />
    </div>
  )
}

export default App;


