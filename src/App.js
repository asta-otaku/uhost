import './App.css';
import Header from './components/Header Component/Header';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
