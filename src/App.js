
import './App.css';
import Home from './Home'
import SearchPage from './SearchPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
      <Route path="/search"  element={<SearchPage/>} />
      <Route path="/" element={<Home/>} />

      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
