import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './RecetaDetalle.css';

// Iconos SVG
const ArrowLeft = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const Share = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
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

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const Plus = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const Minus = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const Download = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const ShoppingCart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const RecetaDetalle = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [servings, setServings] = useState(4);
  const [recipe, setRecipe] = useState(null);

  // Datos de ejemplo expandidos para la receta
  const recipesData = {
    1: {
      id: 1,
      title: "Ensalada César con Pollo",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=1200&h=800&fit=crop",
      time: "20 min",
      difficulty: "Fácil",
      category: "Ensaladas",
      rating: 4.8,
      servings: 4,
      calories: 420,
      description: "Una ensalada clásica con pollo grillado, lechuga romana fresca y aderezo César casero. Esta receta te llevará a través de los pasos para crear el aderezo perfecto desde cero y obtener el pollo más jugoso y sabroso.",
      tags: ["Proteína", "Vegetales", "Saludable", "Mediterránea"],
      ingredients: [
        { name: "Lechuga romana", amount: "2 cabezas" },
        { name: "Pechuga de pollo", amount: "500g" },
        { name: "Queso parmesano", amount: "100g" },
        { name: "Pan para crutones", amount: "4 rebanadas" },
        { name: "Aceite de oliva", amount: "4 cucharadas" },
        { name: "Ajo", amount: "2 dientes" },
        { name: "Anchoas", amount: "4 filetes" },
        { name: "Mostaza Dijon", amount: "1 cucharadita" },
        { name: "Jugo de limón", amount: "2 cucharadas" },
        { name: "Huevo", amount: "1 unidad" },
        { name: "Salsa Worcestershire", amount: "1 cucharadita" }
      ],
      instructions: [
        "Precalienta el horno a 200°C. Corta el pan en cubos y mezcla con aceite de oliva, sal y pimienta. Hornea por 10 minutos hasta que estén dorados.",
        "Sazona las pechugas de pollo con sal, pimienta y un poco de aceite de oliva. Cocina en una sartén caliente por 6-8 minutos de cada lado hasta que estén completamente cocidas.",
        "Para el aderezo, machaca el ajo y las anchoas en un mortero. En un bowl, mezcla con mostaza, jugo de limón, huevo y salsa Worcestershire.",
        "Lava y seca la lechuga romana. Córtala en trozos medianos y colócala en un bowl grande.",
        "Corta el pollo en tiras. Agrega el aderezo a la lechuga y mezcla bien hasta que todas las hojas estén cubiertas.",
        "Sirve la ensalada en platos individuales, agrega el pollo encima, espolvorea con queso parmesano rallado y los crutones. ¡Disfruta inmediatamente!"
      ],
      nutrition: {
        calories: 420,
        protein: 35,
        carbs: 12,
        fat: 26,
        fiber: 4,
        sugar: 6
      }
    },
    2: {
      id: 2,
      title: "Pasta Carbonara Auténtica",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=1200&h=800&fit=crop",
      time: "25 min",
      difficulty: "Medio",
      category: "Pasta",
      rating: 4.9,
      servings: 3,
      calories: 580,
      description: "La receta tradicional italiana con huevos, panceta, queso pecorino y pimienta negra. Sin nata, sin guisantes, solo los ingredientes auténticos que hacen de esta pasta un clásico irresistible.",
      tags: ["Italiana", "Comfort Food", "Tradicional", "Cremosa"],
      ingredients: [
        { name: "Espaguetis", amount: "300g" },
        { name: "Panceta o guanciale", amount: "150g" },
        { name: "Huevos enteros", amount: "2 unidades" },
        { name: "Yemas de huevo", amount: "2 unidades" },
        { name: "Queso pecorino", amount: "80g" },
        { name: "Pimienta negra", amount: "Al gusto" },
        { name: "Sal", amount: "Para el agua" }
      ],
      instructions: [
        "Pon a hervir abundante agua con sal para la pasta. Cuando hierva, agrega los espaguetis y cocina según las instrucciones del paquete.",
        "Mientras tanto, corta la panceta en tiras pequeñas y cocínala en una sartén grande sin aceite hasta que esté dorada y crujiente.",
        "En un bowl, bate los huevos enteros con las yemas. Agrega el queso pecorino rallado y pimienta negra recién molida. Mezcla bien.",
        "Cuando la pasta esté al dente, reserva una taza del agua de cocción antes de escurrirla.",
        "Agrega la pasta caliente a la sartén con la panceta. Retira del fuego inmediatamente.",
        "Vierte la mezcla de huevos sobre la pasta y mezcla rápidamente. Agrega agua de cocción poco a poco hasta obtener una salsa cremosa. Sirve inmediatamente con más pecorino y pimienta."
      ],
      nutrition: {
        calories: 580,
        protein: 28,
        carbs: 62,
        fat: 24,
        fiber: 3,
        sugar: 2
      }
    }
  };

  useEffect(() => {
    const recipeData = recipesData[id];
    if (recipeData) {
      setRecipe(recipeData);
      setServings(recipeData.servings);
    }
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const adjustServings = (increment) => {
    if (increment && servings < 12) {
      setServings(servings + 1);
    } else if (!increment && servings > 1) {
      setServings(servings - 1);
    }
  };

  const calculateIngredientAmount = (originalAmount, originalServings, newServings) => {
    // Lógica simple para ajustar cantidades - en una app real sería más sofisticada
    const ratio = newServings / originalServings;
    return originalAmount; // Por simplicidad, mostramos la cantidad original
  };

  const handleShare = async () => {
    if (navigator.share && recipe) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copiar URL al portapapeles
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  if (!recipe) {
    return (
      <div className="receta-detalle-page">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '50vh',
          fontSize: '1.5rem',
          color: '#6B7280'
        }}>
          Receta no encontrada
        </div>
      </div>
    );
  }

  return (
    <div className="receta-detalle-page">
      {/* Hero Section con imagen */}
      <section className="recipe-hero">
        <img src={recipe.image} alt={recipe.title} className="recipe-hero-image" />
        <div className="recipe-hero-overlay"></div>
        
        <div className="recipe-hero-content">
          <div className="recipe-hero-header">
            <Link to="/recetas" className="back-button">
              <ArrowLeft className="back-icon" />
              <span>Volver a recetas</span>
            </Link>
            
            <div className="hero-actions">
              <button 
                className={`favorite-btn ${isFavorite ? 'favorite-active' : ''}`}
                onClick={toggleFavorite}
              >
                <Heart className="heart-icon" />
              </button>
              <button className="share-btn" onClick={handleShare}>
                <Share className="share-icon" />
              </button>
            </div>
          </div>
          
          <h1 className="recipe-hero-title">{recipe.title}</h1>
          
          <div className="recipe-hero-meta">
            <div className="hero-meta-item">
              <Clock className="meta-icon" />
              <span>{recipe.time}</span>
            </div>
            <div className="hero-meta-item">
              <Users className="meta-icon" />
              <span>{recipe.servings} pers.</span>
            </div>
            <div className="hero-meta-item">
              <Star className="meta-icon rating-star" />
              <span>{recipe.rating}</span>
            </div>
            <div className={`difficulty-badge difficulty-${recipe.difficulty.toLowerCase()}`}>
              {recipe.difficulty}
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="recipe-content">
        <div className="recipe-main">
          {/* Columna izquierda */}
          <div className="recipe-left">
            {/* Descripción */}
            <section className="recipe-description">
              <h2>Acerca de esta receta</h2>
              <p>{recipe.description}</p>
            </section>

            {/* Tags */}
            <section className="recipe-tags">
              <h3>Categorías</h3>
              <div className="tags-list">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </section>

            {/* Instrucciones */}
            <section className="recipe-instructions">
              <h2>Instrucciones paso a paso</h2>
              <ol className="instructions-list">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="instruction-step">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <p className="step-text">{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Sidebar derecha */}
          <div className="recipe-sidebar">
            {/* Ajustar porciones */}
            <div className="recipe-info-card">
              <h3>Ajustar porciones</h3>
              <div className="servings-adjuster">
                <button 
                  className="servings-btn"
                  onClick={() => adjustServings(false)}
                  disabled={servings <= 1}
                >
                  <Minus />
                </button>
                <span className="servings-display">{servings} pers.</span>
                <button 
                  className="servings-btn"
                  onClick={() => adjustServings(true)}
                  disabled={servings >= 12}
                >
                  <Plus />
                </button>
              </div>
            </div>

            {/* Ingredientes */}
            <div className="recipe-info-card">
              <h3>Ingredientes</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">
                    <span className="ingredient-name">{ingredient.name}</span>
                    <span className="ingredient-amount">{ingredient.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Información nutricional */}
            <div className="recipe-info-card">
              <h3>Información nutricional</h3>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.calories}</div>
                  <div className="nutrition-label">Calorías</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.protein}g</div>
                  <div className="nutrition-label">Proteína</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.carbs}g</div>
                  <div className="nutrition-label">Carbohidratos</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.fat}g</div>
                  <div className="nutrition-label">Grasas</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.fiber}g</div>
                  <div className="nutrition-label">Fibra</div>
                </div>
                <div className="nutrition-item">
                  <div className="nutrition-value">{recipe.nutrition.sugar}g</div>
                  <div className="nutrition-label">Azúcar</div>
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div className="recipe-info-card">
              <h3>Acciones</h3>
              <div className="recipe-actions">
                <button className="action-btn primary">
                  <ShoppingCart className="action-icon" />
                  Añadir a lista de compras
                </button>
                <button className="action-btn secondary">
                  <Download className="action-icon" />
                  Descargar receta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecetaDetalle;