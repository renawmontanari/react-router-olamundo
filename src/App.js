import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Paginas/Inicio";
import SobreMim from "./componentes/Paginas/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;