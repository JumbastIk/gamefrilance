import React from 'react';

export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ 
        color: '#0070f3', 
        textAlign: 'center', 
        marginBottom: '40px' 
      }}>
        GameFrilance
      </h1>
      <p style={{ textAlign: 'center', fontSize: '18px' }}>
        Добро пожаловать на биржу игровых заказов
      </p>
    </div>
  );
}