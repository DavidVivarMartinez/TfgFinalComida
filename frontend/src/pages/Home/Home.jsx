import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-bg home-full flex flex-col justify-center items-center">
      <div className="home-content">
        <h1 className="home-title">Recetas Serenity</h1>
        <p className="home-desc">
          Plataforma web y móvil para buscar, filtrar, guardar y descubrir recetas de cocina.<br />
          Filtra por tipo de comida, tiempo, coste y valor nutricional. Guarda tus favoritas y accede a detalles completos.
        </p>
        <div className="home-carousel">
          {[1,2,3,4].map((i) => (
            <img key={i} src={`https://source.unsplash.com/600x400/?food,recipe,${i}`} alt="Receta" className="carousel-img" />
          ))}
        </div>
        <Link to="/recetas" className="home-btn">Ver recetas</Link>
      </div>
      <footer className="home-footer">TFG - David Vivar Martínez · 2025</footer>
    </div>
  );
};

export default Home;
