import './App.css'
import Calculator from './components/molecules/Calculator/Calculator'

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <h1 style={{ color: 'white', margin: 0 }}>Calculator</h1>
      </div>
      <div className='calculator-container'>
        <Calculator />
      </div>
    </div>
  )
}

export default App
