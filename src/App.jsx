import './App.css'

function App() {
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
