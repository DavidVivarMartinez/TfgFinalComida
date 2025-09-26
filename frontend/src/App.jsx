
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Recetas from './pages/Recetas/Recetas';
import RecetaDetalle from './pages/RecetaDetalle/RecetaDetalle';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <Link to="/" className="text-2xl font-bold text-[#3A7CA5]">Recetas Serenity</Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-[#3A7CA5] font-medium">Inicio</Link>
          <Link to="/recetas" className="text-gray-700 hover:text-[#3A7CA5] font-medium">Recetas</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/receta/:id" element={<RecetaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
