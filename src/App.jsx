import { useState} from 'react';
import './App.css'

function App() {
  const numberStringGenerator = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  };

  const colorGenerator = () => {
    return '#' + numberStringGenerator() + numberStringGenerator() + numberStringGenerator();
  };

  const [colors, setColors] = useState({
    one: colorGenerator(),
    two: colorGenerator(),
    three: colorGenerator()
  });

  const resetGame = () => {
    setColors({
      one: colorGenerator(),
      two: colorGenerator(),
      three: colorGenerator()
    });
  }

  return (
    <>
      <div className="container">
        <div className="square" style={{ backgroundColor: colors.one }}></div>
        <div className="square" style={{ backgroundColor: colors.two }}></div>
        <div className="square" style={{ backgroundColor: colors.three }}></div>
      </div>
      <div className="color-display">
        <p>Placeholder Hex Color: #FF0000</p>
      </div>
      <div className="message-area">
        
      </div>
      <div className="button-container">
        <button onClick={resetGame}>Reset</button>
      </div>
    </>
  )
}

export default App
