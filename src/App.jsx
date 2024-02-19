import "./App.css";
import Logo from "./Components/Logo";
import Homepage from "./Pages/Homepage";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ToriiGate from "./Pages/ToriiGate";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ToriiGate}/>
            <Homepage />
            <Logo/>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
