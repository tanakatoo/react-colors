
import './App.css';
import Nav from "./Nav"
import Form from "./Form"
import Routes from './Routes';
import { Redirect } from "react-router-dom"
import { useEffect, useState } from 'react';
import Home from "./Home"

function App() {
  const INITIAL_STATE = [
    { name: 'Red', hex: '#880808' },
    { name: 'Blue', hex: '#F0FFFF' },
    { name: 'Yellow', hex: '#FFBF00' }]
  const [colors, setColors] = useState(INITIAL_STATE)
  const [goHome, setGoHome] = useState(false)

  const addData = ({ name, hex }) => {
    setColors(colors => [{ name, hex }, ...colors])
    console.log('in setting colors', colors)
  }

  useEffect(() => {
    setGoHome(true)
    console.log('go home is true, so go home')
      < Redirect to = "/colors" />
    return () => setGoHome(false)
  }, [colors])

  return (
    <div className="App">
      {goHome ? <Redirect to="/colors" /> : ''}
      <Routes colors={colors} addData={addData} />
    </div>
  );
}

export default App;
