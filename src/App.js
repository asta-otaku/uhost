import './App.css';
import Header from './components/Header Component/Header';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import NavBar from './components/NavBar Component/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/nav' element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
