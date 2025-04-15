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
  const [result, setResult] = useState('-');
  const [showCorrect, setShowCorrect] = useState(false);

  const resetGame = () => {
    setColors({
      one: colorGenerator(),
      two: colorGenerator(),
      three: colorGenerator()
    });
    setResult('-');
    setAnswer(getRandomOption());
    setShowCorrect(false);
  };

  const checkGuess = (color) => {
    if (color === answer) {
      setResult('Correct');
      setShowCorrect(false);
    } else {
      setResult('Incorrect');
      setShowCorrect(true);
    };
  };

  return (
    <>
      <div className="container">
        <div 
          className={`square ${showCorrect && answer === 'one' ? 'correct' : ''}`} 
          style={{ backgroundColor: colors.one }} 
          onClick={() => checkGuess('one')}
        ></div>
        <div 
          className={`square ${showCorrect && answer === 'two' ? 'correct' : ''}`} 
          style={{ backgroundColor: colors.two }} 
          onClick={() => checkGuess('two')}
        ></div>
        <div 
          className={`square ${showCorrect && answer === 'three' ? 'correct' : ''}`} 
          style={{ backgroundColor: colors.three }} 
          onClick={() => checkGuess('three')}
        ></div>
      </div>
      <div className="color-display">
        <p>Pick which box is this color: {colors[answer]}</p>
      </div>
      <div className="message-area">
        <p>{result}</p>
      </div>
      <div className="button-container">
        <button onClick={resetGame}>Reset</button>
      </div>
    </>
  )
}

export default App
