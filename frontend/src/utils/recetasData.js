// ===== DATOS DE RECETAS PARA RECETAS SERENITY =====

export const recipesData = [
  {
    id: 1,
    title: "Ensalada César con Pollo",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop",
    time: "20 min",
    difficulty: "Fácil",
    category: "Ensaladas",
    rating: 4.8,
    totalRatings: 324,
    servings: 4,
    calories: 420,
    description: "Una ensalada clásica con pollo grillado, lechuga romana fresca y aderezo César casero. Perfecta para una comida ligera pero satisfactoria.",
    tags: ["Proteína", "Vegetales", "Saludable"],
    author: "Chef María González",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=60&h=60&fit=crop&crop=face",
    prep_time: "15 min",
    cook_time: "5 min",
    ingredients: [
      { item: "Lechuga romana", amount: "2 cabezas", category: "Vegetales" },
      { item: "Pechuga de pollo", amount: "400g", category: "Proteína" },
      { item: "Pan baguette", amount: "150g", category: "Carbohidratos" },
      { item: "Queso parmesano", amount: "80g", category: "Lácteos" },
      { item: "Huevos", amount: "2 unidades", category: "Proteína" },
      { item: "Aceite de oliva", amount: "4 cucharadas", category: "Grasas" },
      { item: "Ajo", amount: "2 dientes", category: "Vegetales" },
      { item: "Anchoas", amount: "4 filetes", category: "Proteína" },
      { item: "Jugo de limón", amount: "2 cucharadas", category: "Ácidos" },
      { item: "Mostaza Dijon", amount: "1 cucharadita", category: "Condimentos" },
      { item: "Sal y pimienta", amount: "Al gusto", category: "Condimentos" }
    ],
    instructions: [
      {
        step: 1,
        title: "Preparar el pollo",
        description: "Sazona las pechugas de pollo con sal y pimienta. Calienta una sartén con un poco de aceite y cocina el pollo durante 6-8 minutos por cada lado hasta que esté dorado y cocido por completo.",
        time: "10 min",
        tips: "Asegúrate de que la temperatura interna del pollo alcance 74°C"
      },
      {
        step: 2,
        title: "Hacer los crutones",
        description: "Corta el pan en cubos de 2cm. Mezcla con aceite de oliva, sal y ajo picado. Hornea a 180°C durante 8-10 minutos hasta que estén dorados y crujientes.",
        time: "12 min",
        tips: "Remueve los crutones a mitad de cocción para que se doren uniformemente"
      },
      {
        step: 3,
        title: "Preparar el aderezo",
        description: "En un tazón, mezcla las yemas de huevo, mostaza, anchoas picadas, ajo prensado y jugo de limón. Agrega el aceite de oliva lentamente mientras bates hasta obtener una salsa cremosa.",
        time: "5 min",
        tips: "Agrega el aceite gota a gota al principio para evitar que se corte"
      },
      {
        step: 4,
        title: "Montar la ensalada",
        description: "Lava y corta la lechuga romana. Mezcla con el aderezo, agrega el pollo cortado en tiras, los crutones y el queso parmesano rallado. Sirve inmediatamente.",
        time: "3 min",
        tips: "Sirve en platos fríos para mantener la frescura"
      }
    ],
    nutrition: {
      calories: 420,
      protein: 32,
      carbs: 18,
      fat: 26,
      fiber: 4,
      sugar: 3,
      sodium: 680
    },
    reviews: [
      {
        id: 1,
        user: "Ana López",
        rating: 5,
        comment: "¡Increíble! El aderezo casero hace toda la diferencia. Mi familia la adoró.",
        date: "Hace 2 días",
        userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
      },
      {
        id: 2,
        user: "Carlos Ruiz",
        rating: 4,
        comment: "Muy buena receta. Los crutones quedaron perfectos. La haré otra vez.",
        date: "Hace 1 semana",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
      }
    ]
  },
  {
    id: 2,
    title: "Pasta Carbonara Auténtica",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop",
    time: "25 min",
    difficulty: "Medio",
    category: "Pasta",
    rating: 4.9,
    totalRatings: 567,
    servings: 3,
    calories: 580,
    description: "La receta tradicional italiana con huevos, panceta, queso pecorino y pimienta negra. Un clásico que nunca pasa de moda.",
    tags: ["Italiana", "Comfort Food", "Tradicional"],
    author: "Chef Giuseppe Romano",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    prep_time: "10 min",
    cook_time: "15 min",
    ingredients: [
      { item: "Spaghetti", amount: "400g", category: "Pasta" },
      { item: "Panceta", amount: "200g", category: "Proteína" },
      { item: "Huevos enteros", amount: "3 unidades", category: "Proteína" },
      { item: "Yemas de huevo", amount: "2 unidades", category: "Proteína" },
      { item: "Queso pecorino romano", amount: "100g", category: "Lácteos" },
      { item: "Pimienta negra", amount: "Al gusto", category: "Condimentos" },
      { item: "Sal marina", amount: "Al gusto", category: "Condimentos" }
    ],
    instructions: [
      {
        step: 1,
        title: "Preparar la panceta",
        description: "Corta la panceta en cubos pequeños. Cocina en una sartén grande a fuego medio hasta que esté dorada y crujiente.",
        time: "8 min",
        tips: "No añadas aceite, la panceta soltará su propia grasa"
      },
      {
        step: 2,
        title: "Cocinar la pasta",
        description: "Hierve agua con sal abundante. Cocina la pasta al dente según las instrucciones del paquete.",
        time: "10 min",
        tips: "Reserva una taza del agua de cocción antes de escurrir"
      },
      {
        step: 3,
        title: "Preparar la mezcla de huevos",
        description: "Bate los huevos con las yemas, queso pecorino rallado y pimienta negra abundante.",
        time: "3 min",
        tips: "El queso debe estar finamente rallado para evitar grumos"
      },
      {
        step: 4,
        title: "Mezclar todo",
        description: "Escurre la pasta y agrégala a la sartén con la panceta. Retira del fuego y añade la mezcla de huevos, mezclando rápidamente.",
        time: "4 min",
        tips: "El calor residual cocinará los huevos sin cuajarlos"
      }
    ],
    nutrition: {
      calories: 580,
      protein: 28,
      carbs: 52,
      fat: 32,
      fiber: 3,
      sugar: 2,
      sodium: 890
    },
    reviews: [
      {
        id: 1,
        user: "Isabella Martínez",
        rating: 5,
        comment: "¡La mejor carbonara que he probado! Exactamente como en Roma.",
        date: "Hace 3 días",
        userImage: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=50&h=50&fit=crop&crop=face"
      }
    ]
  },
  {
    id: 3,
    title: "Salmón Teriyaki con Verduras",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
    time: "30 min",
    difficulty: "Medio",
    category: "Pescado",
    rating: 4.7,
    totalRatings: 298,
    servings: 2,
    calories: 450,
    description: "Salmón glaseado con salsa teriyaki acompañado de vegetales salteados. Rico en omega-3 y sabores asiáticos.",
    tags: ["Omega-3", "Asiática", "Saludable"],
    author: "Chef Kenji Tanaka",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    prep_time: "15 min",
    cook_time: "15 min",
    ingredients: [
      { item: "Filetes de salmón", amount: "2 unidades (200g c/u)", category: "Proteína" },
      { item: "Brócoli", amount: "200g", category: "Vegetales" },
      { item: "Zanahoria", amount: "1 grande", category: "Vegetales" },
      { item: "Pimiento rojo", amount: "1 unidad", category: "Vegetales" },
      { item: "Salsa de soja", amount: "4 cucharadas", category: "Condimentos" },
      { item: "Mirin", amount: "2 cucharadas", category: "Condimentos" },
      { item: "Azúcar moreno", amount: "2 cucharadas", category: "Endulzantes" },
      { item: "Jengibre fresco", amount: "1 cucharada", category: "Condimentos" },
      { item: "Ajo", amount: "2 dientes", category: "Vegetales" },
      { item: "Aceite de sésamo", amount: "1 cucharada", category: "Grasas" },
      { item: "Semillas de sésamo", amount: "1 cucharada", category: "Semillas" }
    ],
    instructions: [
      {
        step: 1,
        title: "Preparar la salsa teriyaki",
        description: "Mezcla la salsa de soja, mirin, azúcar moreno, jengibre y ajo picados. Cocina a fuego lento hasta que espese.",
        time: "8 min",
        tips: "La salsa está lista cuando cubre el dorso de una cuchara"
      },
      {
        step: 2,
        title: "Marinar el salmón",
        description: "Marina los filetes de salmón con la mitad de la salsa teriyaki durante 10 minutos.",
        time: "10 min",
        tips: "No marines más tiempo o el pescado se 'cocinará' con el ácido"
      },
      {
        step: 3,
        title: "Cocinar las verduras",
        description: "Saltea las verduras en aceite de sésamo hasta que estén tiernas pero crujientes.",
        time: "6 min",
        tips: "Cocina las verduras en orden: primero las más duras"
      },
      {
        step: 4,
        title: "Cocinar el salmón",
        description: "Cocina el salmón en una sartén caliente, 4 minutos por lado. Glasea con la salsa restante y espolvorea semillas de sésamo.",
        time: "8 min",
        tips: "La piel debe quedar crujiente y el interior jugoso"
      }
    ],
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 22,
      fat: 25,
      fiber: 6,
      sugar: 18,
      sodium: 1200
    },
    reviews: [
      {
        id: 1,
        user: "Pedro Nakamura",
        rating: 5,
        comment: "Sabores auténticos y muy fácil de hacer. El salmón quedó perfecto.",
        date: "Hace 1 día",
        userImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
      }
    ]
  },
  {
    id: 4,
    title: "Tacos de Pescado Baja",
    image: "https://images.unsplash.com/photo-1565299585323-38174c832fdd?w=800&h=600&fit=crop",
    time: "15 min",
    difficulty: "Fácil",
    category: "Mexicana",
    rating: 4.6,
    totalRatings: 189,
    servings: 4,
    calories: 320,
    description: "Tacos frescos con pescado empanizado, repollo morado y salsa de lima. Un clásico de la cocina mexicana.",
    tags: ["Mexicana", "Rápido", "Fresco"],
    author: "Chef Elena Morales",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    prep_time: "10 min",
    cook_time: "5 min",
    ingredients: [
      { item: "Filetes de pescado blanco", amount: "500g", category: "Proteína" },
      { item: "Tortillas de maíz", amount: "8 unidades", category: "Carbohidratos" },
      { item: "Repollo morado", amount: "2 tazas", category: "Vegetales" },
      { item: "Limones", amount: "3 unidades", category: "Cítricos" },
      { item: "Cilantro fresco", amount: "1/2 taza", category: "Hierbas" },
      { item: "Cebolla blanca", amount: "1/4 taza", category: "Vegetales" },
      { item: "Mayonesa", amount: "1/3 taza", category: "Condimentos" },
      { item: "Harina", amount: "1 taza", category: "Harinas" },
      { item: "Cerveza", amount: "1/2 taza", category: "Líquidos" },
      { item: "Comino", amount: "1 cucharadita", category: "Especias" },
      { item: "Pimentón", amount: "1 cucharadita", category: "Especias" }
    ],
    instructions: [
      {
        step: 1,
        title: "Preparar el empanizado",
        description: "Mezcla harina, cerveza, comino, pimentón, sal y pimienta hasta formar una masa lisa.",
        time: "3 min",
        tips: "La masa debe tener consistencia de crema espesa"
      },
      {
        step: 2,
        title: "Empanizar y freír el pescado",
        description: "Corta el pescado en tiras, empaniza y fríe en aceite caliente hasta dorar.",
        time: "6 min",
        tips: "El aceite debe estar a 180°C para un dorado perfecto"
      },
      {
        step: 3,
        title: "Preparar la ensalada",
        description: "Mezcla el repollo con cilantro, cebolla, jugo de lima y mayonesa.",
        time: "4 min",
        tips: "Añade la sal al final para que el repollo no suelte agua"
      },
      {
        step: 4,
        title: "Armar los tacos",
        description: "Calienta las tortillas, coloca el pescado, la ensalada y rocía con lima.",
        time: "2 min",
        tips: "Sirve inmediatamente para mantener el pescado crujiente"
      }
    ],
    nutrition: {
      calories: 320,
      protein: 28,
      carbs: 35,
      fat: 12,
      fiber: 5,
      sugar: 4,
      sodium: 520
    },
    reviews: [
      {
        id: 1,
        user: "Roberto Vega",
        rating: 5,
        comment: "¡Como los de Ensenada! Perfectos para el verano.",
        date: "Hace 5 días",
        userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
      }
    ]
  },
  {
    id: 5,
    title: "Risotto de Hongos",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop",
    time: "40 min",
    difficulty: "Difícil",
    category: "Vegetariana",
    rating: 4.5,
    totalRatings: 156,
    servings: 4,
    calories: 390,
    description: "Cremoso risotto italiano con hongos variados y queso parmesano. Requiere paciencia pero el resultado es espectacular.",
    tags: ["Vegetariana", "Cremoso", "Italiana"],
    author: "Chef Marco Benedetti",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    prep_time: "15 min",
    cook_time: "25 min",
    ingredients: [
      { item: "Arroz Arborio", amount: "320g", category: "Cereales" },
      { item: "Hongos mixtos", amount: "400g", category: "Vegetales" },
      { item: "Caldo de vegetales", amount: "1.5 litros", category: "Líquidos" },
      { item: "Vino blanco", amount: "1/2 taza", category: "Alcoholes" },
      { item: "Cebolla", amount: "1 mediana", category: "Vegetales" },
      { item: "Ajo", amount: "3 dientes", category: "Vegetales" },
      { item: "Queso parmesano", amount: "100g", category: "Lácteos" },
      { item: "Mantequilla", amount: "50g", category: "Lácteos" },
      { item: "Aceite de oliva", amount: "3 cucharadas", category: "Grasas" },
      { item: "Perejil fresco", amount: "2 cucharadas", category: "Hierbas" }
    ],
    instructions: [
      {
        step: 1,
        title: "Preparar el caldo",
        description: "Calienta el caldo de vegetales y manténlo a fuego lento durante toda la cocción.",
        time: "5 min",
        tips: "El caldo caliente es clave para un risotto cremoso"
      },
      {
        step: 2,
        title: "Saltear los hongos",
        description: "Saltea los hongos en aceite hasta dorar. Reserva la mitad para el final.",
        time: "8 min",
        tips: "No amontonar los hongos para que se doren bien"
      },
      {
        step: 3,
        title: "Tostar el arroz",
        description: "Sofríe la cebolla y ajo, añade el arroz y tuesta hasta que esté translúcido. Degrada con vino.",
        time: "5 min",
        tips: "El arroz debe estar bien tostado antes de agregar líquido"
      },
      {
        step: 4,
        title: "Cocinar el risotto",
        description: "Añade el caldo caliente de a poco, revolviendo constantemente hasta que el arroz esté cremoso.",
        time: "18 min",
        tips: "Nunca dejes de revolver y añade caldo gradualmente"
      },
      {
        step: 5,
        title: "Finalizar",
        description: "Incorpora mantequilla, queso, hongos reservados y perejil. Ajusta sazón.",
        time: "4 min",
        tips: "El 'mantecato' final da la cremosidad característica"
      }
    ],
    nutrition: {
      calories: 390,
      protein: 12,
      carbs: 58,
      fat: 14,
      fiber: 3,
      sugar: 5,
      sodium: 750
    },
    reviews: [
      {
        id: 1,
        user: "Lucía Romano",
        rating: 4,
        comment: "Requiere paciencia pero vale la pena. Quedó cremoso y delicioso.",
        date: "Hace 2 semanas",
        userImage: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=50&h=50&fit=crop&crop=face"
      }
    ]
  },
  {
    id: 6,
    title: "Bowl Buddha Vegano",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    time: "25 min",
    difficulty: "Fácil",
    category: "Vegana",
    rating: 4.4,
    totalRatings: 234,
    servings: 2,
    calories: 380,
    description: "Bowl nutritivo con quinoa, vegetales frescos, aguacate y tahini. Colorido, saludable y completamente vegano.",
    tags: ["Vegana", "Nutritivo", "Colorido"],
    author: "Chef Sofia Green",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    prep_time: "15 min",
    cook_time: "10 min",
    ingredients: [
      { item: "Quinoa", amount: "1 taza", category: "Cereales" },
      { item: "Aguacate", amount: "1 grande", category: "Grasas" },
      { item: "Espinacas baby", amount: "2 tazas", category: "Vegetales" },
      { item: "Zanahoria", amount: "1 grande", category: "Vegetales" },
      { item: "Pepino", amount: "1 mediano", category: "Vegetales" },
      { item: "Tomates cherry", amount: "150g", category: "Vegetales" },
      { item: "Garbanzos cocidos", amount: "1 taza", category: "Legumbres" },
      { item: "Tahini", amount: "3 cucharadas", category: "Grasas" },
      { item: "Jugo de limón", amount: "2 cucharadas", category: "Cítricos" },
      { item: "Semillas de girasol", amount: "2 cucharadas", category: "Semillas" },
      { item: "Aceite de oliva", amount: "1 cucharada", category: "Grasas" }
    ],
    instructions: [
      {
        step: 1,
        title: "Cocinar la quinoa",
        description: "Enjuaga la quinoa y cocínala en agua con sal hasta que esté tierna.",
        time: "15 min",
        tips: "Usa 2 partes de agua por 1 de quinoa"
      },
      {
        step: 2,
        title: "Preparar las verduras",
        description: "Corta todas las verduras en juliana o cubos. Mantén colores separados.",
        time: "8 min",
        tips: "Cortes uniformes hacen el bowl más atractivo"
      },
      {
        step: 3,
        title: "Hacer la salsa de tahini",
        description: "Mezcla tahini, jugo de limón, aceite de oliva y un poco de agua hasta obtener consistencia cremosa.",
        time: "2 min",
        tips: "Añade agua gradualmente hasta la consistencia deseada"
      },
      {
        step: 4,
        title: "Armar el bowl",
        description: "Distribuye la quinoa en bowls, acomoda las verduras por colores, agrega aguacate y rocía con la salsa.",
        time: "5 min",
        tips: "La presentación colorida es parte del atractivo"
      }
    ],
    nutrition: {
      calories: 380,
      protein: 15,
      carbs: 42,
      fat: 18,
      fiber: 12,
      sugar: 8,
      sodium: 280
    },
    reviews: [
      {
        id: 1,
        user: "Carmen Vidal",
        rating: 5,
        comment: "¡Perfecto! Nutritivo, sabroso y muy fotogénico. Lo haré seguido.",
        date: "Hace 4 días",
        userImage: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=50&h=50&fit=crop&crop=face"
      }
    ]
  }
];

// Función para obtener una receta por ID
export const getRecipeById = (id) => {
  return recipesData.find(recipe => recipe.id === parseInt(id));
};

// Función para obtener recetas por categoría
export const getRecipesByCategory = (category) => {
  if (category === 'all') return recipesData;
  return recipesData.filter(recipe => recipe.category === category);
};

// Función para obtener recetas destacadas
export const getFeaturedRecipes = (limit = 3) => {
  return recipesData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// Función para buscar recetas
export const searchRecipes = (query) => {
  const searchTerm = query.toLowerCase();
  return recipesData.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    recipe.category.toLowerCase().includes(searchTerm)
  );
};