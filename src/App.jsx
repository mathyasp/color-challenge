import './App.css'

function App() {
  const numberStringGenerator = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  };

  return (
    <>
      <div className="container">
        <div className="square" style={{ backgroundColor: 'red' }}></div>
        <div className="square" style={{ backgroundColor: 'green' }}></div>
        <div className="square" style={{ backgroundColor: 'blue' }}></div>
      </div>
      <div className="color-display">
        <p>Placeholder Hex Color: #FF0000</p>
      </div>
      <div className="message-area">
        
      </div>
      <div className="button-container">
        <button>Reset</button>
      </div>
    </>
  )
}

export default App
