import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Component/Result";
import { useTheme } from './Component/ThemeContext';

function App() {
  const theme = useTheme();
  return (

    
         
    <BrowserRouter basename='/'>
    <Routes>
    <Route path="/home" element={<Home />}/>
    <Route path="/result" element={<Result/>}/>
    <Route index element={<Home />} />
    <Route path="*" element={<p>Invalid url</p>}/>
    </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;
