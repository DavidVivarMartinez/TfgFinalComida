import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Importar recetas desde el archivo de datos
import { obtenerTodasLasRecetas } from '../data/recetasData';

// Iconos SVG como componentes
const ChefHat = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const Play = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const Check = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

// Componente del carrusel de recetas
const RecipesCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, translateX: 0 });
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  
  // Obtener todas las recetas
  const allRecipes = obtenerTodasLasRecetas();
  
  // Crear múltiples copias para scroll infinito real
  const infiniteRecipes = [...allRecipes, ...allRecipes, ...allRecipes];
  
  // Velocidad del scroll (píxeles por frame)
  const baseScrollSpeed = 0.3;

  // Auto-scroll continuo e infinito
  useEffect(() => {
    if (!isVisible || isPaused || isDragging) return;

    const animate = () => {
      setTranslateX(prev => {
        const newTranslateX = prev - baseScrollSpeed;
        
        // Reset cuando una copia completa ha pasado
        const singleSetWidth = (300 * allRecipes.length);
        if (Math.abs(newTranslateX) >= singleSetWidth) {
          return 0;
        }
        
        return newTranslateX;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isPaused, isDragging, allRecipes.length]);

  // Intersection Observer para optimizar rendimiento
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Función para normalizar posición
  const normalizePosition = (position) => {
    const singleSetWidth = (300 * allRecipes.length);
    if (position > 0) {
      return position - singleSetWidth;
    }
    if (Math.abs(position) >= singleSetWidth) {
      return position + singleSetWidth;
    }
    return position;
  };

  // Eventos de Mouse
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setIsPaused(true);
    setDragStart({
      x: e.clientX,
      translateX: translateX
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const deltaX = e.clientX - dragStart.x;
    const newTranslateX = normalizePosition(dragStart.translateX + deltaX);
    setTranslateX(newTranslateX);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setIsDragging(false);
    setIsPaused(false);
  };

  // Eventos Touch para móviles
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setIsPaused(true);
    setDragStart({
      x: touch.clientX,
      translateX: translateX
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStart.x;
    const newTranslateX = normalizePosition(dragStart.translateX + deltaX);
    setTranslateX(newTranslateX);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false);
  };

  // Funciones para pausar/reanudar al hacer hover (solo si no estamos arrastrando)
  const handleMouseEnter = () => {
    if (!isDragging) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (!isDragging) setIsPaused(false);
  };

  // Event listeners para document (para capturar movimientos fuera del elemento)
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, translateX]);

  return (
    <div ref={carouselRef} className="recipes-carousel">
      <div className="carousel-container">
        <div 
          ref={trackRef}
          className={`carousel-track ${isDragging ? 'dragging' : ''}`}
          style={{
            transform: `translateX(${translateX}px)`,
            display: 'flex',
            width: 'auto'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {infiniteRecipes.map((recipe, index) => (
            <div 
              key={`${recipe.id}-${Math.floor(index / allRecipes.length)}-${index}`}
              className="carousel-slide"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="recipe-card">
                <div className="recipe-image-container">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="recipe-image"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="recipe-rating-badge">
                    <Star className="rating-star" />
                    <span className="rating-text">{recipe.rating}</span>
                  </div>
                  <div className="recipe-difficulty-badge">
                    {recipe.difficulty}
                  </div>
                </div>
                
                <div className="recipe-content">
                  <h3 className="recipe-title">{recipe.title}</h3>
                  
                  <div className="recipe-meta">
                    <div className="recipe-meta-item">
                      <Clock className="meta-icon" />
                      <span className="meta-text">{recipe.time}</span>
                    </div>
                    <div className="recipe-meta-item">
                      <TrendingUp className="meta-icon" />
                      <span className="meta-text">{recipe.calories} kcal</span>
                    </div>
                  </div>
                  
                  <div className="recipe-tags">
                    {recipe.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="recipe-tag">{tag}</span>
                    ))}
                    {recipe.tags.length > 2 && (
                      <span className="recipe-tag-more">+{recipe.tags.length - 2}</span>
                    )}
                  </div>
                  
                  <Link 
                    to={`/receta/${recipe.id}`} 
                    className="recipe-btn"
                    onClick={(e) => {
                      // Prevenir click si estamos arrastrando
                      if (isDragging) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                  >
                    Ver receta
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "María González",
      text: "Gracias a Recetas Serenity he perdido 8kg en 3 meses. Las recetas son deliciosas y fáciles de seguir.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Carlos Ruiz",
      text: "La función de planificación nutricional me ha cambiado la vida. Ahora como mejor y más variado.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ana López",
      text: "Como madre de familia, me encanta que pueda filtrar por tiempo de preparación. ¡15 minutos y listo!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const subscriptionFeatures = [
    "Planes nutricionales personalizados",
    "Recetas ilimitadas con valores nutricionales",
    "Lista de compras automática",
    "Seguimiento de progreso",
    "Acceso a nutricionista online",
    "Recetas exclusivas de chefs"
  ];

  // Obtener número total de recetas para mostrar en stats
  const totalRecipes = obtenerTodasLasRecetas().length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-badge">
              <ChefHat className="hero-badge-icon" />
              <span className="hero-badge-text">Tu cocina inteligente</span>
            </div>
            
            <h1 className="hero-title">Recetas Serenity</h1>
            
            <p className="hero-description">
              Descubre, cocina y vive de forma más saludable con 
              <span className="hero-highlight-orange"> recetas personalizadas</span> y 
              <span className="hero-highlight-green"> planes nutricionales</span> diseñados para ti
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                Comenzar gratis
                <ArrowRight className="btn-icon" />
              </button>
              <button className="btn-secondary">
                <Play className="btn-icon-left" />
                Ver demo
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number stat-orange">{totalRecipes}+</div>
                <div className="stat-label">Recetas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number stat-green">50k+</div>
                <div className="stat-label">Usuarios</div>
              </div>
              <div className="stat-item">
                <div className="stat-number stat-purple">4.9★</div>
                <div className="stat-label">Valoración</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Carousel */}
      <section 
        id="recipes" 
        data-animate 
        className={`recipes-section ${isVisible.recipes ? 'section-visible' : 'section-hidden'}`}
      >
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Nuestras Recetas</h2>
            <p className="section-subtitle">
              Explora nuestra colección completa de {totalRecipes} recetas deliciosas y saludables
            </p>
          </div>
          
          <RecipesCarousel />
          
          <div className="recipes-cta">
            <Link to="/recetas" className="view-all-recipes-btn">
              Ver todas las recetas
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Benefits */}
      <section 
        id="subscription" 
        data-animate 
        className={`subscription-section ${isVisible.subscription ? 'section-visible' : 'section-hidden'}`}
      >
        <div className="section-container">
          <div className="subscription-content">
            <h2 className="subscription-title">Transforma tu estilo de vida</h2>
            <p className="subscription-subtitle">
              Únete a Serenity Premium y accede a herramientas avanzadas de nutrición y planificación
            </p>
            
            <div className="subscription-card">
              <div className="subscription-grid">
                <div className="subscription-features">
                  <h3 className="features-title">¿Qué incluye Premium?</h3>
                  <div className="features-list">
                    {subscriptionFeatures.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <Check className="feature-check" />
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="subscription-pricing">
                  <div className="pricing-content">
                    <div className="price-amount">€9.99</div>
                    <div className="price-period">/mes</div>
                    <button className="pricing-btn">Comenzar prueba gratuita</button>
                    <p className="pricing-note">7 días gratis, cancela cuando quieras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        data-animate 
        className={`testimonials-section ${isVisible.testimonials ? 'section-visible' : 'section-hidden'}`}
      >
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
            <p className="section-subtitle">Miles de personas ya han transformado su alimentación</p>
          </div>
          
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="testimonial-gradient"></div>
              
              <div className="testimonial-content">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="testimonial-avatar"
                />
                
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="testimonial-star" />
                  ))}
                </div>
                
                <blockquote className="testimonial-quote">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <cite className="testimonial-author">
                  {testimonials[currentTestimonial].name}
                </cite>
              </div>
              
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`testimonial-dot ${index === currentTestimonial ? 'dot-active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">¿Listo para empezar tu transformación?</h2>
          <p className="cta-subtitle">
            Únete a miles de personas que ya cocinan más saludable con Recetas Serenity
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn-primary">Empezar ahora</button>
            <Link to="/recetas" className="cta-btn-secondary">Ver todas las recetas</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;