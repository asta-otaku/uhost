import "./App.css";
import Header from "./components/Header Component/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Customers from "./components/Customer Component/Customers";
import Packages from "./components/Packages Component/Packages";
import Hosting from "./components/Hosting Component/Hosting";
import InvalidPage from "./utils/InvalidPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/start-hosting" element={<Hosting />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </div>
  );
}

export default App;
