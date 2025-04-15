import { useState} from 'react';
import './App.css'

function App() {
  const numberStringGenerator = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  };

  const colorGenerator = () => {
    return '#' + numberStringGenerator() + numberStringGenerator() + numberStringGenerator();
  };

  const getRandomOption = () => {
    const options = ['one', 'two', 'three'];
    return options[Math.floor(Math.random() * options.length)];
  };

  const [colors, setColors] = useState({
    one: colorGenerator(),
    two: colorGenerator(),
    three: colorGenerator()
  });
  const [answer, setAnswer] = useState(getRandomOption);

  const resetGame = () => {
    setColors({
      one: colorGenerator(),
      two: colorGenerator(),
      three: colorGenerator()
    });
    
    setAnswer(getRandomOption());
  }

  return (
    <>
      <div className="container">
        <div className="square" style={{ backgroundColor: colors.one }}></div>
        <div className="square" style={{ backgroundColor: colors.two }}></div>
        <div className="square" style={{ backgroundColor: colors.three }}></div>
      </div>
      <div className="color-display">
        <p>Pick which box is this color:{colors[answer]}</p>
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
