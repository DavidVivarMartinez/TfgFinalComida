import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Recetas.css';

// Importar datos de recetas desde archivo externo
import { 
  obtenerTodasLasRecetas, 
  obtenerCategorias, 
  obtenerDificultades 
} from '../data/recetasData';

// Iconos SVG
const Search = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const Filter = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>
);

const ArrowLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

const Loader = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a9 9 0 11-6.219-8.56"/>
  </svg>
);

const Recetas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterTime, setFilterTime] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const recipesPerPage = 8;

  // Obtener datos desde el archivo externo
  const allRecipes = obtenerTodasLasRecetas();
  const categories = obtenerCategorias();
  const difficulties = obtenerDificultades();
  const timeRanges = ['all', '0-15', '15-30', '30+'];

  // Filtrar recetas
  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = filterCategory === 'all' || recipe.category === filterCategory;
    const matchesDifficulty = filterDifficulty === 'all' || recipe.difficulty === filterDifficulty;
    
    const timeInMinutes = parseInt(recipe.time);
    const matchesTime = filterTime === 'all' || 
                       (filterTime === '0-15' && timeInMinutes <= 15) ||
                       (filterTime === '15-30' && timeInMinutes > 15 && timeInMinutes <= 30) ||
                       (filterTime === '30+' && timeInMinutes > 30);

    return matchesSearch && matchesCategory && matchesDifficulty && matchesTime;
  });

  // Función para cargar más recetas
  const loadMoreRecipes = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simular carga async
    setTimeout(() => {
      const startIndex = (page - 1) * recipesPerPage;
      const endIndex = startIndex + recipesPerPage;
      const newRecipes = filteredRecipes.slice(startIndex, endIndex);
      
      if (newRecipes.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedRecipes(prev => [...prev, ...newRecipes]);
        setPage(prev => prev + 1);
      }
      
      setLoading(false);
    }, 500);
  }, [page, loading, hasMore, filteredRecipes]);

  // Efecto para reiniciar cuando cambian los filtros
  useEffect(() => {
    setDisplayedRecipes([]);
    setPage(1);
    setHasMore(true);
    
    // Cargar primera página
    const firstPageRecipes = filteredRecipes.slice(0, recipesPerPage);
    setDisplayedRecipes(firstPageRecipes);
    setPage(2);
    setHasMore(filteredRecipes.length > recipesPerPage);
  }, [searchTerm, filterCategory, filterDifficulty, filterTime]);

  // Scroll infinito
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= 
        document.documentElement.offsetHeight - 1000 &&
        !loading &&
        hasMore
      ) {
        loadMoreRecipes();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreRecipes, loading, hasMore]);

  const toggleFavorite = (recipeId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(recipeId)) {
      newFavorites.delete(recipeId);
    } else {
      newFavorites.add(recipeId);
    }
    setFavorites(newFavorites);
  };

  const resetFilters = () => {
    setFilterCategory('all');
    setFilterDifficulty('all');
    setFilterTime('all');
    setSearchTerm('');
  };

  return (
    <div className="recetas-page">
      {/* Header */}
      <header className="recetas-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="back-button">
              <ArrowLeft className="back-icon" />
              <span>Volver al inicio</span>
            </Link>
            
            <div className="header-text">
              <h1 className="page-title">Nuestras Recetas</h1>
              <p className="page-subtitle">
                Descubre {allRecipes.length} deliciosas recetas para todos los gustos
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Búsqueda y Filtros */}
      <section className="search-filters-section">
        <div className="container">
          <div className="search-bar">
            <div className="search-input-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Buscar recetas, ingredientes o etiquetas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="filter-icon" />
              <span>Filtros</span>
            </button>
          </div>

          {showFilters && (
            <div className="filters-panel">
              <div className="filters-grid">
                <div className="filter-group">
                  <label className="filter-label">Categoría</label>
                  <select 
                    value={filterCategory} 
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="filter-select"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'Todas' : category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Dificultad</label>
                  <select 
                    value={filterDifficulty} 
                    onChange={(e) => setFilterDifficulty(e.target.value)}
                    className="filter-select"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty === 'all' ? 'Todas' : difficulty}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Tiempo</label>
                  <select 
                    value={filterTime} 
                    onChange={(e) => setFilterTime(e.target.value)}
                    className="filter-select"
                  >
                    {timeRanges.map(range => (
                      <option key={range} value={range}>
                        {range === 'all' ? 'Cualquiera' : 
                         range === '0-15' ? 'Hasta 15 min' :
                         range === '15-30' ? '15-30 min' : 'Más de 30 min'}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="reset-filters-btn" onClick={resetFilters}>
                  Limpiar filtros
                </button>
              </div>
            </div>
          )}

          <div className="results-info">
            <p>
              Mostrando {displayedRecipes.length} de {filteredRecipes.length} recetas
              {searchTerm && <span> para "{searchTerm}"</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Recetas */}
      <section className="recipes-grid-section">
        <div className="container">
          {displayedRecipes.length > 0 ? (
            <>
              <div className="recipes-grid">
                {displayedRecipes.map(recipe => (
                  <article key={recipe.id} className="recipe-card">
                    <div className="recipe-image-container">
                      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                      <button 
                        className={`favorite-btn ${favorites.has(recipe.id) ? 'favorite-active' : ''}`}
                        onClick={() => toggleFavorite(recipe.id)}
                      >
                        <Heart className="heart-icon" />
                      </button>
                      <div className="recipe-badges">
                        <span className={`difficulty-badge difficulty-${recipe.difficulty.toLowerCase()}`}>
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="recipe-content">
                      <h3 className="recipe-title">{recipe.title}</h3>
                      <p className="recipe-description">{recipe.description}</p>

                      <div className="recipe-meta">
                        <div className="meta-item">
                          <Clock className="meta-icon" />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="meta-item">
                          <Users className="meta-icon" />
                          <span>{recipe.servings} pers.</span>
                        </div>
                        <div className="meta-item">
                          <Star className="meta-icon rating-star" />
                          <span>{recipe.rating}</span>
                        </div>
                      </div>

                      <div className="recipe-tags">
                        {recipe.tags.map(tag => (
                          <span key={tag} className="recipe-tag">{tag}</span>
                        ))}
                      </div>

                      <div className="recipe-footer">
                        <div className="calories">
                          <span className="calories-number">{recipe.calories}</span>
                          <span className="calories-label">kcal</span>
                        </div>
                        <Link to={`/receta/${recipe.id}`} className="view-recipe-btn">
                          Ver receta
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Loading indicator */}
              {loading && (
                <div className="loading-container">
                  <Loader className="loading-spinner" />
                  <p>Cargando más recetas...</p>
                </div>
              )}

              {/* Fin de resultados */}
              {!hasMore && filteredRecipes.length > 0 && (
                <div className="end-message">
                  <p>¡Has visto todas las recetas disponibles!</p>
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <h3>No se encontraron recetas</h3>
              <p>Prueba ajustando los filtros o cambiando el término de búsqueda</p>
              <button className="reset-filters-btn" onClick={resetFilters}>
                Mostrar todas las recetas
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Recetas;