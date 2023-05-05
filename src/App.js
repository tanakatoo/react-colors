
import './App.css';
import Routes from './Routes';
import { Redirect, useHistory } from "react-router-dom"
import { useEffect, useState } from 'react';


function App() {
  const history = useHistory()
  const INITIAL_STATE = [
    { name: 'Red', hex: '#880808' },
    { name: 'Blue', hex: '#F0FFFF' },
    { name: 'Yellow', hex: '#FFBF00' }]
  const [colors, setColors] = useState(INITIAL_STATE)

  const addData = ({ name, hex }) => {
    setColors(colors => [{ name, hex }, ...colors])
    console.log('in setting colors', colors)
    return <Redirect to="/colors" />
  }

  useEffect(() => {
    history.push('/colors')
  }, [colors])

  return (
    <div className="App">
      <Routes colors={colors} addData={addData} />
    </div>
  );
}

export default App;
