import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { getApps } from './utils/helper'

const CurrentApp = getApps();
function App() {
  return (
    <Router>
      <CurrentApp />
    </Router>
  )
}

export default App
