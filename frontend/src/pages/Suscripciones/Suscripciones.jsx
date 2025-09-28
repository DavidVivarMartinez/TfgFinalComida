import React, { useState } from 'react';
import './Suscripciones.css';

// Iconos SVG
const Crown = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12l3-3 3 3 4-8 4 8 3-3 3 3-2 5H4z"/>
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const ChefHat = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </svg>
);

const Suscripciones = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'basico',
      name: 'Básico',
      description: 'Perfecto para empezar tu journey culinario',
      icon: <ChefHat className="plan-icon" />,
      color: 'green',
      monthlyPrice: 4.99,
      yearlyPrice: 49.99,
      features: [
        'Acceso a 500+ recetas',
        'Filtros básicos de búsqueda',
        'Lista de compras simple',
        'Valores nutricionales básicos',
        'Soporte por email'
      ],
      limitations: [
        'Sin planes personalizados',
        'Sin acceso a nutricionista'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'La experiencia completa para foodies',
      icon: <Star className="plan-icon" />,
      color: 'orange',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        'Acceso ilimitado a recetas',
        'Planes nutricionales personalizados',
        'Lista de compras inteligente',
        'Análisis nutricional completo',
        'Videos tutoriales paso a paso',
        'Soporte prioritario 24/7',
        'Descarga de recetas offline',
        'Comunidad exclusiva'
      ]
    },
    {
      id: 'chef',
      name: 'Chef Master',
      description: 'Para los verdaderos maestros de la cocina',
      icon: <Crown className="plan-icon" />,
      color: 'purple',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        'Todo lo de Premium +',
        'Consultas con nutricionista personal',
        'Recetas exclusivas de chefs reconocidos',
        'Masterclasses en vivo',
        'Planificación de menús para eventos',
        'Análisis de macro y micronutrientes',
        'Recetas adaptadas a condiciones médicas',
        'Acceso anticipado a nuevas funciones',
        'Certificado de participación'
      ]
    }
  ];

  // Plan destacado fijo (independiente del ciclo de facturación)
  const popularPlan = 'premium';

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    if (billingCycle === 'yearly' && plan.monthlyPrice) {
      const monthlyTotal = plan.monthlyPrice * 12;
      const savings = monthlyTotal - plan.yearlyPrice;
      return savings.toFixed(2);
    }
    return 0;
  };

  const getPopularLabel = () => {
    return 'Más Popular';
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const getButtonText = (plan) => {
    const isSelected = selectedPlan === plan.id;
    const isPopular = plan.id === popularPlan;
    
    if (isSelected) {
      return 'Plan Seleccionado';
    } else if (isPopular) {
      return 'Comenzar ahora';
    } else {
      return 'Elegir plan';
    }
  };

  const getPlanCardClasses = (plan) => {
    const isPopular = plan.id === popularPlan;
    const isSelected = selectedPlan === plan.id;
    const isDimmed = selectedPlan && selectedPlan !== plan.id;
    
    let classes = `plan-card ${plan.color}`;
    
    if (isSelected) {
      classes += ' selected';
    } else if (isPopular && !selectedPlan) {
      classes += ' popular';
    }
    
    if (isDimmed) {
      classes += ' dimmed';
    }
    
    return classes;
  };

  const getButtonClasses = (plan) => {
    const isSelected = selectedPlan === plan.id;
    
    let classes = `plan-button ${plan.color}`;
    
    if (isSelected) {
      classes += ' selected';
    }
    
    return classes;
  };

  return (
    <div className="suscripciones-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Elige tu plan perfecto</h1>
          <p className="hero-subtitle">
            Transforma tu forma de cocinar con nuestros planes diseñados para cada tipo de chef
          </p>
          
          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span 
              className={billingCycle === 'monthly' ? 'active' : ''}
              onClick={() => setBillingCycle('monthly')}
            >
              Mensual
            </span>
            <span 
              className={billingCycle === 'yearly' ? 'active' : ''}
              onClick={() => setBillingCycle('yearly')}
            >
              Anual <span className="save-badge">Ahorra hasta 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans-section">
        <div className="plans-container">
          <div className="plans-grid">
            {plans.map((plan) => {
              const isPopular = plan.id === popularPlan;
              const isSelected = selectedPlan === plan.id;
              
              return (
                <div 
                  key={plan.id} 
                  className={getPlanCardClasses(plan)}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {isPopular && !selectedPlan && (
                    <div className="popular-badge">
                      <Star className="badge-icon" />
                      {getPopularLabel()}
                    </div>
                  )}
                  
                  <div className="plan-header">
                    <div className="plan-icon-container">
                      {plan.icon}
                    </div>
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  <div className="plan-pricing">
                    <div className="price-container">
                      <span className="currency">€</span>
                      <span className="price">{getPrice(plan)}</span>
                      <span className="period">/{billingCycle === 'monthly' ? 'mes' : 'año'}</span>
                    </div>
                    {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                      <div className="savings">
                        Ahorras €{getSavings(plan)} al año
                      </div>
                    )}
                  </div>

                  <div className="plan-features">
                    <ul className="features-list">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations && (
                      <ul className="limitations-list">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="limitation-item">
                            <span className="limitation-text">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="plan-footer">
                    <button 
                      className={getButtonClasses(plan)}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlanSelect(plan.id);
                      }}
                    >
                      {getButtonText(plan)}
                    </button>
                    <p className="trial-text">
                      {plan.id === 'basico' ? 'Prueba gratuita de 7 días' : 'Prueba gratuita de 14 días'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Puedo cambiar de plan en cualquier momento?</h3>
              <p>Sí, puedes actualizar o cambiar tu plan cuando quieras desde tu cuenta.</p>
            </div>
            <div className="faq-item">
              <h3>¿Hay compromiso de permanencia?</h3>
              <p>No, todos nuestros planes son sin compromiso. Puedes cancelar cuando desees.</p>
            </div>
            <div className="faq-item">
              <h3>¿Qué incluye la prueba gratuita?</h3>
              <p>Acceso completo a todas las funciones de tu plan elegido, sin restricciones.</p>
            </div>
            <div className="faq-item">
              <h3>¿Los precios incluyen IVA?</h3>
              <p>Los precios mostrados no incluyen IVA, que se añadirá según tu ubicación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Aún no estás seguro?</h2>
          <p>Comienza con nuestra prueba gratuita y descubre todo lo que podemos ofrecerte</p>
          <button className="cta-button">Probar gratis ahora</button>
        </div>
      </section>
    </div>
  );
};

export default Suscripciones;