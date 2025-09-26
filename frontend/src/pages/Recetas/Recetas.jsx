import React, { useState } from 'react';
import './Recetas.css';
import { recetasDemo, filtrosDemo } from '../../utils/recetasData';
import { Link } from 'react-router-dom';

const Recetas = () => {
  const [filtros, setFiltros] = useState({});
  const [visible, setVisible] = useState(8);

  // Filtrado dinámico
  const recetasFiltradas = recetasDemo.filter(receta => {
    return Object.entries(filtros).every(([key, value]) =>
      !value || receta[key] === value
    );
  });

  // Cargar más recetas al hacer scroll
  const handleScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setVisible(v => v + 8);
    }
  };

  return (
    <div className="recetas-bg min-h-screen p-6">
      <h2 className="recetas-title">Recetas</h2>
      <div className="recetas-filtros mb-6 flex gap-4 flex-wrap">
        {Object.entries(filtrosDemo).map(([key, values]) => (
          <select
            key={key}
            className="recetas-select"
            value={filtros[key] || ''}
            onChange={e => setFiltros(f => ({ ...f, [key]: e.target.value }))}
          >
            <option value="">{key}</option>
            {values.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        ))}
      </div>
      <div className="recetas-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto" style={{maxHeight:'70vh'}} onScroll={handleScroll}>
        {recetasFiltradas.slice(0, visible).map(receta => (
          <Link to={`/receta/${receta.id}`} key={receta.id} className="receta-card">
            <img src={receta.imagen} alt={receta.nombre} className="receta-img" />
            <h3 className="receta-nombre">{receta.nombre}</h3>
            <p className="receta-tipo">{receta.tipo}</p>
            <span className="receta-tiempo">{receta.tiempo} min</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recetas;
