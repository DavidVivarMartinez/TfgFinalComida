import React from 'react';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound-bg min-h-screen flex flex-col items-center justify-center">
    <h1 className="notfound-title">404 - Página no encontrada</h1>
    <p className="notfound-desc">La página que buscas no existe.</p>
  </div>
);

export default NotFound;
