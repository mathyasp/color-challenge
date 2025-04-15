import { useState} from 'react';
import './App.css'

function App() {
  const numberStringGenerator = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  };

  const colorGenerator = () => {
    return '#' + numberStringGenerator() + numberStringGenerator() + numberStringGenerator();
  };

  const resetGame = () => {
    setSquareOneColor(colorGenerator());
    setSquareTwoColor(colorGenerator());
    setSquareThreeColor(colorGenerator());
  }

  const [squareOneColor, setSquareOneColor] = useState(colorGenerator());
  const [squareTwoColor, setSquareTwoColor] = useState(colorGenerator());
  const [squareThreeColor, setSquareThreeColor] = useState(colorGenerator());

  return (
    <>
      <div className="container">
        <div className="square" style={{ backgroundColor: squareOneColor }}></div>
        <div className="square" style={{ backgroundColor: squareTwoColor }}></div>
        <div className="square" style={{ backgroundColor: squareThreeColor }}></div>
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
