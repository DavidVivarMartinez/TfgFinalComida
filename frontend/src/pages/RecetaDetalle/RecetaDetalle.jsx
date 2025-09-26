import React from 'react';
import './RecetaDetalle.css';
import { useParams } from 'react-router-dom';
import { recetasDemo } from '../../utils/recetasData';

const RecetaDetalle = () => {
  const { id } = useParams();
  const receta = recetasDemo.find(r => r.id === parseInt(id));

  if (!receta) return <div className="detalle-bg p-8">Receta no encontrada</div>;

  return (
    <div className="detalle-bg min-h-screen p-8 flex flex-col items-center">
      <div className="detalle-card max-w-2xl w-full">
        <img src={receta.imagen} alt={receta.nombre} className="detalle-img" />
        <h2 className="detalle-title">{receta.nombre}</h2>
        <p className="detalle-info">{receta.tipo} | {receta.tiempo} min | {receta.coste}€</p>
        <div className="detalle-section">
          <h3 className="detalle-sub">Ingredientes:</h3>
          <ul className="detalle-list">
            {receta.ingredientes.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </div>
        <div className="detalle-section">
          <h3 className="detalle-sub">Valor nutricional:</h3>
          <p className="detalle-nutri">{receta.nutricional}</p>
        </div>
        <a href={receta.youtube} target="_blank" rel="noopener noreferrer" className="detalle-btn">Ver preparación en YouTube</a>
      </div>
    </div>
  );
};

export default RecetaDetalle;
