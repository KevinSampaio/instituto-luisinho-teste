import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import SejaParceiro from "./Pages/SejaParceiro";
import HistoriaJudo from './Pages/historia'

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/historia-judo" element={<HistoriaJudo/>}/>
          <Route path="/seja-parceiro" element={<SejaParceiro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
