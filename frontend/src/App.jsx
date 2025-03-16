import './App.css'
import TradingDataGrid from './components/trading-data/TradingDataGrid'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterConfig from './routes/RouterConfig'

function App() {
 

  return (
    <Router>
      <RouterConfig/>
    </Router>
  )
}

export default App
