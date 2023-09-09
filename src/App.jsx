import { useState } from 'react'
import './App.css'
import './App.css'
import Navbar from './navbar';


function App() {
  const [bgColor, setbgColor] = useState('white');
  const [displayHex, setDisplayHex] = useState(false);

  const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'brown', 'gray', 'chocolate'
]
  const hex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"
]

const handleHex = () => {
  let hexColor = '#';
  for(let i = 0; i < 6; i++) {
     const idx = Math.floor(Math.random() * hex.length);
    hexColor += hex[idx];
  }
  setbgColor(hexColor)
}

  const handleColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    let bgColor = colors[index]
    setbgColor(bgColor)
  }

  const colorChange = () => {
    displayHex ? handleHex() : handleColor()
  }
  const toggleDisplay = () => {
    setDisplayHex(!displayHex);
  }

  return (
    <>
    <Navbar toggleDisplay={toggleDisplay}/>
    <div className='App' style={{backgroundColor: bgColor}}>
     <div className='bg-container' >
      <h3>{displayHex ? 'Hex Color' : 'Background color'} :{bgColor}</h3>
      <button onClick={colorChange}>Change Color</button>
     </div>
    </div>
   </>
  )
}

export default App
