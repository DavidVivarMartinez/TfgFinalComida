import { Link } from 'react-router-dom';
import './Footer.css';

// Icono SVG ChefHat
const ChefHat = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <ChefHat className="footer-logo-icon" />
              <span className="footer-logo-text">Recetas Serenity</span>
            </div>
            <p className="footer-description">
              Tu compañero perfecto para una alimentación saludable y deliciosa.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Plataforma</h4>
            <ul className="footer-links">
              <li><Link to="/recetas" className="footer-link">Recetas</Link></li>
              <li><Link to="/planes-nutricionales" className="footer-link">Planes nutricionales</Link></li>
              <li><Link to="/comunidad" className="footer-link">Comunidad</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Soporte</h4>
            <ul className="footer-links">
              <li><Link to="/ayuda" className="footer-link">Centro de ayuda</Link></li>
              <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacidad" className="footer-link">Privacidad</Link></li>
              <li><Link to="/terminos" className="footer-link">Términos</Link></li>
              <li><Link to="/cookies" className="footer-link">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 TFG - David Vivar Martínez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;