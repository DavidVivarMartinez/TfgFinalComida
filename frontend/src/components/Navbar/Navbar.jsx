import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús al hacer click fuera
  useEffect(() => {
    const handleClickOutside = () => {
      setIsUserMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { path: '/suscripcion', label: 'SUSCRIPCIÓN' },
    { path: '/menu-semanal', label: 'MENÚ SEMANAL' },
    { path: '/como-funciona', label: 'CÓMO FUNCIONA' },
    { path: '/ayuda', label: 'AYUDA' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">🍳</div>
          <span className="logo-text">Serenity!</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {/* Shopping Cart */}
          <button className="action-button cart-button">
            <ShoppingCart size={20} />
            <span className="cart-badge">2</span>
          </button>

          {/* User Menu */}
          <div className="user-menu-container">
            <button 
              className="action-button user-button"
              onClick={(e) => {
                e.stopPropagation();
                setIsUserMenuOpen(!isUserMenuOpen);
              }}
            >
              <User size={20} />
              <ChevronDown size={16} className={`chevron ${isUserMenuOpen ? 'open' : ''}`} />
            </button>

            {/* User Dropdown */}
            {isUserMenuOpen && (
              <div className="user-dropdown">
                <Link to="/perfil" className="dropdown-item">
                  <User size={16} />
                  Mi Perfil
                </Link>
                <Link to="/pedidos" className="dropdown-item">
                  <ShoppingCart size={16} />
                  Mis Pedidos
                </Link>
                <Link to="/suscripcion" className="dropdown-item">
                  <div className="icon-placeholder"></div>
                  Mi Suscripción
                </Link>
                <hr className="dropdown-divider" />
                <button className="dropdown-item logout">
                  <div className="icon-placeholder"></div>
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mobile-actions">
            <Link to="/perfil" className="mobile-action-link">
              <User size={18} />
              Mi Perfil
            </Link>
            <Link to="/pedidos" className="mobile-action-link">
              <ShoppingCart size={18} />
              Mis Pedidos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;