import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RecipeCard.css';

// Iconos SVG
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

const TrendingUp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
  </svg>
);

const RecipeCard = ({ 
  recipe, 
  showFullDescription = false, 
  showCalories = true,
  showServings = true,
  variant = 'default', // 'default', 'compact', 'featured'
  onFavoriteToggle,
  isFavorite = false,
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Fallback para recetas sin datos completos
  const safeRecipe = {
    id: recipe.id || 1,
    title: recipe.title || 'Receta sin título',
    image: recipe.image || 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    time: recipe.time || '30 min',
    difficulty: recipe.difficulty || 'Medio',
    category: recipe.category || 'General',
    rating: recipe.rating || 4.5,
    servings: recipe.servings || 4,
    calories: recipe.calories || 400,
    description: recipe.description || 'Deliciosa receta para disfrutar.',
    tags: recipe.tags || [],
    weight: recipe.weight || '420g',
    price: recipe.price || '7,00',
    kcal: recipe.kcal || 567,
    fat: recipe.fat || 13,
    carbs: recipe.carbs || 86,
    protein: recipe.protein || 28,
    ...recipe
  };

  const cardClasses = `recipe-card recipe-card--${variant} ${className}`.trim();

  return (
    <article className={cardClasses}>
      <Link to={`/receta/${safeRecipe.id}`} className="recipe-card__link">
        {/* Imagen y overlays */}
        <div className="recipe-card__image-container">
          {isImageLoading && (
            <div className="recipe-card__image-skeleton">
              <div className="skeleton-shimmer"></div>
            </div>
          )}
          <img 
            src={imageError ? getFallbackImage() : safeRecipe.image}
            alt={safeRecipe.title}
            className="recipe-card__image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
          {/* Botón de favorito */}
          {onFavoriteToggle && (
            <button 
              className={`recipe-card__favorite ${isFavorite ? 'recipe-card__favorite--active' : ''}`}
              onClick={handleFavoriteClick}
              aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              <Heart className="heart-icon" />
            </button>
          )}
          {/* Badges */}
          <div className="recipe-card__badges">
            <span className={`difficulty-badge difficulty-badge--${getDifficultyClass(safeRecipe.difficulty)}`}>
              {safeRecipe.difficulty}
            </span>
            {safeRecipe.rating && (
              <div className="rating-badge">
                <Star className="rating-star" />
                <span className="rating-text">{safeRecipe.rating}</span>
              </div>
            )}
          </div>
        </div>
        {/* Contenido */}
        <div className="recipe-card__content">
          <h3 className="recipe-card__title">{safeRecipe.title}</h3>
          {/* Peso y precio */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
            {safeRecipe.weight && (
              <span style={{ color: '#888', fontSize: '0.98rem' }}>({safeRecipe.weight})</span>
            )}
            <span style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222' }}>{safeRecipe.price ? `${safeRecipe.price}€` : ''}</span>
          </div>
          {/* Metadatos (iconos tipo comida) */}
          <div className="recipe-card__meta">
            <div className="meta-item">
              <Clock className="meta-icon" />
              <span className="meta-text">{safeRecipe.time}</span>
            </div>
            {showServings && safeRecipe.servings && (
              <div className="meta-item">
                <Users className="meta-icon" />
                <span className="meta-text">{safeRecipe.servings} pers.</span>
              </div>
            )}
            {showCalories && safeRecipe.calories && (
              <div className="meta-item">
                <TrendingUp className="meta-icon" />
                <span className="meta-text">{safeRecipe.calories} kcal</span>
              </div>
            )}
          </div>
          {/* Descripción */}
          {safeRecipe.description && (
            <p className={`recipe-card__description ${showFullDescription ? 'recipe-card__description--full' : ''}`}>
              {safeRecipe.description}
            </p>
          )}
          {/* Nutritional info */}
          <div className="recipe-card__nutrition">
            <div className="nutrition-item">
              <div className="nutrition-value">{safeRecipe.kcal || safeRecipe.calories || '---'}</div>
              <div className="nutrition-label">Kilocalorías</div>
            </div>
            <div className="nutrition-item">
              <div className="nutrition-value">{safeRecipe.fat || safeRecipe.fats || '---'}</div>
              <div className="nutrition-label">Grasas</div>
            </div>
            <div className="nutrition-item">
              <div className="nutrition-value">{safeRecipe.carbs || safeRecipe.carbohydrates || '---'}</div>
              <div className="nutrition-label">Carbohidratos</div>
            </div>
            <div className="nutrition-item">
              <div className="nutrition-value">{safeRecipe.protein || safeRecipe.proteins || '---'}</div>
              <div className="nutrition-label">Proteínas</div>
            </div>
          </div>
          {/* Tags */}
          {safeRecipe.tags && safeRecipe.tags.length > 0 && (
            <div className="recipe-card__tags">
              {safeRecipe.tags.slice(0, variant === 'compact' ? 2 : 3).map((tag, index) => (
                <span key={index} className="recipe-tag">{tag}</span>
              ))}
              {safeRecipe.tags.length > (variant === 'compact' ? 2 : 3) && (
                <span className="recipe-tag recipe-tag--more">
                  +{safeRecipe.tags.length - (variant === 'compact' ? 2 : 3)}
                </span>
              )}
            </div>
          )}
          {/* Footer con categoría y botón */}
          <div className="recipe-card__footer">
            {safeRecipe.category && (
              <span className="recipe-card__category">{safeRecipe.category}</span>
            )}
            <button className="recipe-card__cta-btn">Ver receta</button>
          </div>
        </div>
      </Link>
    </article>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    time: PropTypes.string,
    difficulty: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    servings: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    calories: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  showFullDescription: PropTypes.bool,
  showCalories: PropTypes.bool,
  showServings: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'compact', 'featured']),
  onFavoriteToggle: PropTypes.func,
  isFavorite: PropTypes.bool,
  className: PropTypes.string
};

export default RecipeCard;