import React from 'react';

const Ayuda = () => {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #2ECC71, #9B59B6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Centro de Ayuda
      </h1>
      <p style={{ 
        fontSize: '1.25rem', 
        color: '#6B7280',
        marginBottom: '2rem'
      }}>
        Esta página está en construcción. Aquí encontrarás respuestas a todas tus dudas sobre Recetas Serenity.
      </p>
      <div style={{
        padding: '1rem 2rem',
        background: 'linear-gradient(135deg, #2ECC71, #9B59B6)',
        color: 'white',
        borderRadius: '12px',
        fontWeight: '600'
      }}>
        🆘 Próximamente
      </div>
    </div>
  );
};

export default Ayuda;