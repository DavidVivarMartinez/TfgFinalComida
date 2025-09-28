import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Recetas from './pages/Recetas/Recetas';
import RecetaDetalle from './pages/RecetaDetalle/RecetaDetalle';
import Suscripciones from './pages/Suscripciones/Suscripciones';
import MenuSemanal from './pages/MenuSemanal/MenuSemanal';
import ComoFunciona from './pages/ComoFunciona/ComoFunciona';
import Ayuda from './pages/Ayuda/Ayuda';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/receta/:id" element={<RecetaDetalle />} />
            <Route path="/suscripcion" element={<Suscripciones />} />
            <Route path="/menu-semanal" element={<MenuSemanal />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;