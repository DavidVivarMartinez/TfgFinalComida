// Datos demo para recetas y filtros
export const recetasDemo = [
  {
    id: 1,
    nombre: 'Tostada de Aguacate',
    tipo: 'Desayuno',
    tiempo: 10,
    coste: 2,
    ingredientes: ['Pan', 'Aguacate', 'Sal', 'Aceite de oliva'],
    nutricional: 'Alto en fibra y grasas saludables',
    imagen: 'https://source.unsplash.com/400x250/?avocado,toast',
    youtube: 'https://www.youtube.com/watch?v=1r4QzjBqQzA',
  },
  {
    id: 2,
    nombre: 'Ensalada César',
    tipo: 'Comida',
    tiempo: 20,
    coste: 4,
    ingredientes: ['Lechuga', 'Pollo', 'Queso', 'Salsa César'],
    nutricional: 'Proteínas y vitaminas',
    imagen: 'https://source.unsplash.com/400x250/?caesar,salad',
    youtube: 'https://www.youtube.com/watch?v=2r4QzjBqQzA',
  },
  {
    id: 3,
    nombre: 'Pizza Margarita',
    tipo: 'Cena',
    tiempo: 30,
    coste: 6,
    ingredientes: ['Masa', 'Tomate', 'Mozzarella', 'Albahaca'],
    nutricional: 'Carbohidratos y calcio',
    imagen: 'https://source.unsplash.com/400x250/?pizza',
    youtube: 'https://www.youtube.com/watch?v=3r4QzjBqQzA',
  },
  {
    id: 4,
    nombre: 'Barritas de Granola',
    tipo: 'Snack',
    tiempo: 15,
    coste: 3,
    ingredientes: ['Avena', 'Miel', 'Frutos secos'],
    nutricional: 'Energía rápida',
    imagen: 'https://source.unsplash.com/400x250/?granola,bar',
    youtube: 'https://www.youtube.com/watch?v=4r4QzjBqQzA',
  },
  // ...más recetas demo
];

export const filtrosDemo = {
  tipo: ['Desayuno', 'Comida', 'Cena', 'Snack'],
  tiempo: ['10', '15', '20', '30'],
  coste: ['2', '3', '4', '6'],
};
